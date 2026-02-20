import nodemailer from "nodemailer";
import type {
  ContactRequestBody,
  ContactRequestResponse,
} from "~/types/contact-request";
import {
  autoreplyTemplate,
  contactNotificationTemplate,
} from "~/server/utils/mail-templates";

export default defineEventHandler(async (event) => {
  if (event.method !== "POST") {
    throw createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed",
    });
  }

  try {
    const body = await readBody<ContactRequestBody>(event);
    const errors: string[] = [];

    if (!body.name || body.name.trim().length === 0) {
      errors.push("Ad alanı zorunludur");
    }

    if (!body.lastName || body.lastName.trim().length === 0) {
      errors.push("Soyad alanı zorunludur");
    }

    if (!body.email || body.email.trim().length === 0) {
      errors.push("E-posta alanı zorunludur");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        errors.push("Geçerli bir e-posta adresi giriniz");
      }
    }

    if (!body.phone || body.phone.trim().length === 0) {
      errors.push("Telefon alanı zorunludur");
    }

    if (!body.message || body.message.trim().length === 0) {
      errors.push("Mesaj alanı zorunludur");
    }

    if (errors.length > 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "Validation Error",
        data: { errors },
      });
    }

    const config = useRuntimeConfig();
    const recaptchaSecret = (
      config.recaptcha as { secretKey?: string } | undefined
    )?.secretKey?.trim();

    if (recaptchaSecret) {
      const token = body.recaptchaToken?.trim();
      if (!token) {
        throw createError({
          statusCode: 400,
          statusMessage: "Validation Error",
          data: {
            errors: [
              "Güvenlik doğrulaması (reCAPTCHA) eksik. Lütfen sayfayı yenileyip tekrar deneyin.",
            ],
          },
        });
      }
      try {
        const verifyRes = await $fetch<{
          success: boolean;
          score?: number;
          action?: string;
          "error-codes"?: string[];
        }>("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          body: new URLSearchParams({
            secret: recaptchaSecret,
            response: token,
          }),
        });
        if (!verifyRes.success) {
          const codes =
            verifyRes["error-codes"]?.join(", ") || "doğrulama başarısız";
          throw createError({
            statusCode: 400,
            statusMessage: "Validation Error",
            data: { errors: [`Güvenlik doğrulaması geçersiz: ${codes}`] },
          });
        }
        const score = verifyRes.score ?? 1;
        if (score < 0.5) {
          throw createError({
            statusCode: 400,
            statusMessage: "Validation Error",
            data: {
              errors: [
                "Güvenlik doğrulaması skoru yetersiz. Lütfen tekrar deneyin.",
              ],
            },
          });
        }
        // Test: terminalde reCAPTCHA sonucunu görmek için (isteğe bağlı kaldırılabilir)
        console.log("[contact-request] reCAPTCHA doğrulandı:", {
          score,
          action: verifyRes.action,
        });
      } catch (err: any) {
        if (err.statusCode === 400) throw err;
        console.error(
          "[contact-request] reCAPTCHA verify hatası:",
          err?.message ?? err,
        );
        throw createError({
          statusCode: 400,
          statusMessage: "Validation Error",
          data: {
            errors: ["Güvenlik doğrulaması yapılamadı. Lütfen tekrar deneyin."],
          },
        });
      }
    }

    console.log("[contact-request] Form doğrulandı, e-posta:", body.email);

    const { host, port, user, pass, from, fromName } = config.smtp ?? {};
    const notificationEmail = config.notificationEmail as string | undefined;
    const inboxBcc =
      (config.inboxBcc as string | undefined)?.trim() || undefined;

    // Gönderici adını formatla: "İsim <email>" veya sadece email
    const fromAddress = fromName && from ? `"${fromName}" <${from}>` : from;

    console.log(
      "[contact-request] SMTP host:",
      host,
      "port:",
      port,
      "from:",
      from,
    );
    console.log(
      "[contact-request] NOTIFICATION_EMAIL:",
      notificationEmail ? `${notificationEmail.slice(0, 3)}***` : "(boş)",
    );

    if (!host || !port || !user || !pass || !from) {
      console.error("[contact-request] Eksik SMTP ayarı:", {
        host: !!host,
        port: !!port,
        user: !!user,
        pass: !!pass,
        from: !!from,
      });
      throw createError({
        statusCode: 500,
        statusMessage: "Mail Configuration Error",
        message: "Mail ayarları eksik.",
      });
    }

    // Not: SMTP sunucusu mesajı kabul etse bile (accepted/rejected OK) teslimat
    // sağlayıcı tarafında (spam, SPF/DKIM, relay) başarısız olabilir.
    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: { user, pass },
    });

    try {
      await transporter.verify();
      console.log("[contact-request] SMTP bağlantısı doğrulandı.");
    } catch (verifyErr: any) {
      console.error(
        "[contact-request] SMTP verify hatası:",
        verifyErr?.message ?? verifyErr,
      );
      throw verifyErr;
    }

    const submittedAt = new Date().toISOString();

    // Kullanıcıya otomatik yanıt (autoreply)
    try {
      console.log("[contact-request] Autoreply gönderiliyor, to:", body.email);
      const autoreplyHtml = autoreplyTemplate;
      const autoreplyResult = await transporter.sendMail({
        from: fromAddress,
        to: body.email,
        replyTo: from,
        subject: `İletişim Formu`,
        html: autoreplyHtml,
        ...(inboxBcc && { bcc: inboxBcc }),
      });
      console.log("[contact-request] Autoreply sonuç:", {
        messageId: autoreplyResult.messageId,
        accepted: autoreplyResult.accepted,
        rejected: autoreplyResult.rejected,
        response: autoreplyResult.response,
      });
      if (autoreplyResult.rejected?.length) {
        console.warn(
          "[contact-request] Autoreply reddedilen adresler:",
          autoreplyResult.rejected,
        );
      }
    } catch (autoreplyErr: any) {
      console.error(
        "[contact-request] Autoreply gönderilemedi:",
        autoreplyErr?.message ?? autoreplyErr,
      );
      throw autoreplyErr;
    }

    // Şirket içi bildirim (contact-notification) — sadece NOTIFICATION_EMAIL adresine, formu dolduran kişiye değil
    const notificationRecipient = notificationEmail?.trim();
    if (notificationRecipient) {
      try {
        if (
          notificationRecipient.toLowerCase() ===
          body.email.trim().toLowerCase()
        ) {
          console.warn(
            "[contact-request] NOTIFICATION_EMAIL formu dolduran kişiyle aynı; bildirim yine de şirket adresine gidecek:",
            notificationRecipient,
          );
        }
        console.log(
          "[contact-request] Bildirim maili gönderiliyor, to (şirket):",
          notificationRecipient,
        );
        const notificationHtml = contactNotificationTemplate
          .replace(/\{\{isim\}\}/g, body.name.trim())
          .replace(/\{\{soyisim\}\}/g, body.lastName.trim())
          .replace(/\{\{email\}\}/g, body.email.trim())
          .replace(/\{\{telefon\}\}/g, body.phone.trim())
          .replace(/\{\{mesaj\}\}/g, body.message.trim());
        const notifResult = await transporter.sendMail({
          from: fromAddress,
          to: notificationRecipient,
          replyTo: body.email,
          subject: `Yeni İletişim Formu Mesajı - ${body.name} ${body.lastName}`,
          html: notificationHtml,
          ...(inboxBcc && { bcc: inboxBcc }),
        });
        console.log("[contact-request] Bildirim sonuç:", {
          messageId: notifResult.messageId,
          accepted: notifResult.accepted,
          rejected: notifResult.rejected,
          response: notifResult.response,
        });
        if (notifResult.rejected?.length) {
          console.warn(
            "[contact-request] Bildirim reddedilen adresler:",
            notifResult.rejected,
          );
        }
      } catch (notifErr: any) {
        console.error(
          "[contact-request] Bildirim maili gönderilemedi:",
          notifErr?.message ?? notifErr,
        );
        throw notifErr;
      }
    } else {
      console.log(
        "[contact-request] NOTIFICATION_EMAIL boş, bildirim atılmadı.",
      );
    }

    const response: ContactRequestResponse = {
      success: true,
      message:
        "Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız.",
      data: { submittedAt },
    };
    return response;
  } catch (error: any) {
    if (error.statusCode) {
      throw error;
    }

    console.error(
      "[contact-request] İletişim Formu Hatası:",
      error?.message ?? error,
    );
    if (error?.response)
      console.error("[contact-request] SMTP response:", error.response);
    if (error?.stack) console.error("[contact-request] Stack:", error.stack);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message:
        "Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
    });
  }
});

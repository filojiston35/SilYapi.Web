import nodemailer from "nodemailer";
import type {
  UrbanTransformationRequest,
  UrbanTransformationResponse,
} from "~/types/urban-transformation";
import {
  urbanTransformationAutoreplyTemplate,
  urbanTransformationNotificationTemplate,
} from "~/server/utils/mail-templates";

export default defineEventHandler(async (event) => {
  // Sadece POST isteklerine izin ver
  if (event.method !== "POST") {
    throw createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed",
    });
  }

  try {
    // Request body'yi al
    const body = await readBody<UrbanTransformationRequest>(event);

    // Validation
    const errors: string[] = [];

    if (!body.fullName || body.fullName.trim().length === 0) {
      errors.push("Ad Soyad alanı zorunludur");
    } else if (body.fullName.length > 100) {
      errors.push("Ad Soyad en fazla 100 karakter olabilir");
    }
    if (!body.email || body.email.trim().length === 0) {
      errors.push("E-posta alanı zorunludur");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        errors.push("Geçerli bir e-posta adresi giriniz");
      } else if (body.email.length > 100) {
        errors.push("E-posta en fazla 100 karakter olabilir");
      }
    }

    if (!body.phone || body.phone.trim().length === 0) {
      errors.push("Telefon alanı zorunludur");
    } else if (body.phone.length > 100) {
      errors.push("Telefon en fazla 100 karakter olabilir");
    }
    if (!body.city || body.city.trim().length === 0) {
      errors.push("İl alanı zorunludur");
    } else if (body.city.length > 100) {
      errors.push("İl en fazla 100 karakter olabilir");
    }

    if (!body.state || body.state.trim().length === 0) {
      errors.push("İlçe alanı zorunludur");
    } else if (body.state.length > 100) {
      errors.push("İlçe en fazla 100 karakter olabilir");
    }
    if (!body.parcel || body.parcel.trim().length === 0) {
      errors.push("Ada Parsel alanı zorunludur");
    } else if (body.parcel.length > 100) {
      errors.push("Ada Parsel en fazla 100 karakter olabilir");
    }

    if (!body.subject || body.subject.trim().length === 0) {
      errors.push("Konu alanı zorunludur");
    } else if (body.subject.length > 200) {
      errors.push("Konu en fazla 200 karakter olabilir");
    }
    // Eğer validation hataları varsa
    if (errors.length > 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "Validation Error",
        data: {
          errors,
        },
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
        console.log("[urban-transformation-request] reCAPTCHA doğrulandı:", {
          score,
          action: verifyRes.action,
        });
      } catch (err: any) {
        if (err.statusCode === 400) throw err;
        console.error(
          "[urban-transformation-request] reCAPTCHA verify hatası:",
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

    console.log(
      "[urban-transformation-request] Form doğrulandı, e-posta:",
      body.email,
    );

    const { host, port, user, pass, from, fromName } = config.smtp ?? {};
    const notificationEmail = config.notificationEmail as string | undefined;
    const inboxBcc =
      (config.inboxBcc as string | undefined)?.trim() || undefined;

    // Gönderici adını formatla: "İsim <email>" veya sadece email
    const fromAddress = fromName && from ? `"${fromName}" <${from}>` : from;

    console.log(
      "[urban-transformation-request] SMTP host:",
      host,
      "port:",
      port,
      "from:",
      from,
    );
    console.log(
      "[urban-transformation-request] NOTIFICATION_EMAIL:",
      notificationEmail ? `${notificationEmail.slice(0, 3)}***` : "(boş)",
    );

    if (!host || !port || !user || !pass || !from) {
      console.error("[urban-transformation-request] Eksik SMTP ayarı:", {
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
      console.log("[urban-transformation-request] SMTP bağlantısı doğrulandı.");
    } catch (verifyErr: any) {
      console.error(
        "[urban-transformation-request] SMTP verify hatası:",
        verifyErr?.message ?? verifyErr,
      );
      throw verifyErr;
    }

    const submittedAt = new Date().toISOString();

    // Kullanıcıya otomatik yanıt (autoreply)
    try {
      console.log(
        "[urban-transformation-request] Autoreply gönderiliyor, to:",
        body.email,
      );
      const autoreplyHtml = urbanTransformationAutoreplyTemplate;
      const autoreplyResult = await transporter.sendMail({
        from: fromAddress,
        to: body.email,
        replyTo: from,
        subject: `Kentsel Dönüşüm Talep Formu`,
        html: autoreplyHtml,
        ...(inboxBcc && { bcc: inboxBcc }),
      });
      console.log("[urban-transformation-request] Autoreply sonuç:", {
        messageId: autoreplyResult.messageId,
        accepted: autoreplyResult.accepted,
        rejected: autoreplyResult.rejected,
        response: autoreplyResult.response,
      });
      if (autoreplyResult.rejected?.length) {
        console.warn(
          "[urban-transformation-request] Autoreply reddedilen adresler:",
          autoreplyResult.rejected,
        );
      }
    } catch (autoreplyErr: any) {
      console.error(
        "[urban-transformation-request] Autoreply gönderilemedi:",
        autoreplyErr?.message ?? autoreplyErr,
      );
      throw autoreplyErr;
    }

    // Şirket içi bildirim (notification) — sadece NOTIFICATION_EMAIL adresine
    const notificationRecipient = notificationEmail?.trim();
    if (notificationRecipient) {
      try {
        if (
          notificationRecipient.toLowerCase() ===
          body.email.trim().toLowerCase()
        ) {
          console.warn(
            "[urban-transformation-request] NOTIFICATION_EMAIL formu dolduran kişiyle aynı; bildirim yine de şirket adresine gidecek:",
            notificationRecipient,
          );
        }
        console.log(
          "[urban-transformation-request] Bildirim maili gönderiliyor, to (şirket):",
          notificationRecipient,
        );
        const notificationHtml = urbanTransformationNotificationTemplate
          .replace(/\{\{ad_soyad\}\}/g, body.fullName.trim())
          .replace(/\{\{eposta\}\}/g, body.email.trim())
          .replace(/\{\{telefon\}\}/g, body.phone.trim())
          .replace(/\{\{il\}\}/g, body.city.trim())
          .replace(/\{\{ilce\}\}/g, body.state.trim())
          .replace(/\{\{ada_parsel\}\}/g, body.parcel.trim())
          .replace(/\{\{konu\}\}/g, body.subject.trim());
        const notifResult = await transporter.sendMail({
          from: fromAddress,
          to: notificationRecipient,
          replyTo: body.email,
          subject: `Yeni Kentsel Dönüşüm Talep Formu - ${body.fullName}`,
          html: notificationHtml,
          ...(inboxBcc && { bcc: inboxBcc }),
        });
        console.log("[urban-transformation-request] Bildirim sonuç:", {
          messageId: notifResult.messageId,
          accepted: notifResult.accepted,
          rejected: notifResult.rejected,
          response: notifResult.response,
        });
        if (notifResult.rejected?.length) {
          console.warn(
            "[urban-transformation-request] Bildirim reddedilen adresler:",
            notifResult.rejected,
          );
        }
      } catch (notifErr: any) {
        console.error(
          "[urban-transformation-request] Bildirim maili gönderilemedi:",
          notifErr?.message ?? notifErr,
        );
        throw notifErr;
      }
    } else {
      console.log(
        "[urban-transformation-request] NOTIFICATION_EMAIL boş, bildirim atılmadı.",
      );
    }

    const response: UrbanTransformationResponse = {
      success: true,
      message:
        "Kentsel Dönüşüm Talep Formu başarıyla gönderildi. En kısa sürede dönüş yapacağız.",
      data: {
        submittedAt,
      },
    };
    return response;
  } catch (error: any) {
    // Hata durumunda
    if (error.statusCode) {
      throw error;
    }

    // Beklenmeyen hatalar
    console.error(
      "[urban-transformation-request] Kentsel Dönüşüm Talep Formu Hatası:",
      error?.message ?? error,
    );
    if (error?.response)
      console.error(
        "[urban-transformation-request] SMTP response:",
        error.response,
      );
    if (error?.stack)
      console.error("[urban-transformation-request] Stack:", error.stack);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message:
        "Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
    });
  }
});

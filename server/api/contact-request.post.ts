import nodemailer from "nodemailer";
import type {
  ContactRequestBody,
  ContactRequestResponse,
} from "~/types/contact-request";

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
    const { host, port, user, pass, from} = config.smtp ?? {};

    if (!host || !port || !user || !pass || !from) {
      throw createError({
        statusCode: 500,
        statusMessage: "Mail Configuration Error",
        message: "Mail ayarları eksik.",
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: { user, pass },
    });

    const submittedAt = new Date().toISOString();
    const textBody = [
      "İletişim Formu",
      "--------------",
      `Ad: ${body.name}`,
      `Soyad: ${body.lastName}`,
      `E-posta: ${body.email}`,
      `Telefon: ${body.phone}`,
      `Mesaj: ${body.message}`,
      `Tarih: ${submittedAt}`,
    ].join("\n");

    await transporter.sendMail({
      from,
      to: body.email,
      replyTo: body.email,
      subject: `İletişim Formu`,
      text: textBody,
    });

    const response: ContactRequestResponse = {
      success: true,
      message: "Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız.",
      data: { submittedAt },
    };
    return response;
  } catch (error: any) {
    if (error.statusCode) {
      throw error;
    }

    console.error("İletişim Formu Hatası:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: "Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
    });
  }
});

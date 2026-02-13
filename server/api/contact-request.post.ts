import nodemailer from "nodemailer";
import { readFile } from "fs/promises";
import { join } from "path";
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
    
    // HTML mail template'ini oku
    const htmlTemplatePath = join(process.cwd(), "data", "mail", "autoreply.html");
    let htmlContent = await readFile(htmlTemplatePath, "utf-8");

    await transporter.sendMail({
      from,
      to: body.email,
      replyTo: from,
      subject: `İletişim Formu`,
      html: htmlContent,
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

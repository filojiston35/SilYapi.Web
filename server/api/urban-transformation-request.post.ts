import type { UrbanTransformationRequest } from "~/types/urban-transformation";

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

    // Burada email gönderme, veritabanına kaydetme gibi işlemler yapılabilir
    // Şimdilik sadece loglama yapıyoruz
    console.log("Kentsel Dönüşüm Talep Formu:", {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      city: body.city,
      state: body.state,
      parcel: body.parcel,
      subject: body.subject,
      timestamp: new Date().toISOString(),
    });

    // TODO: Email gönderme servisi entegrasyonu
    // TODO: Veritabanına kaydetme işlemi

    // Başarılı response
    return {
      success: true,
      message: "Kentsel Dönüşüm Talep Formu başarıyla gönderildi. Size en kısa sürede dönüş yapacağız.",
      data: {
        id: Date.now().toString(), // Geçici ID, gerçek uygulamada veritabanından gelecek
        submittedAt: new Date().toISOString(),
      },
    };
  } catch (error: any) {
    // Hata durumunda
    if (error.statusCode) {
      throw error;
    }

    // Beklenmeyen hatalar
    console.error("Kentsel Dönüşüm Talep Formu Hatası:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: "Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
    });
  }
});


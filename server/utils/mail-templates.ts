// Mail template'leri - Build zamanında bundle'a dahil edilir (Vercel serverless uyumlu)

export const autoreplyTemplate = `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Mesajınızı Aldık</title>
  </head>

  <body style="margin:0; padding:0; background-color:#f5f7fb;">
    <!-- Preheader (inbox preview text) -->
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; color:transparent;">
      Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
    </div>

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f5f7fb; margin:0; padding:0;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e8ecf3;">
            <!-- Header -->
            <tr>
              <td style="padding:20px 24px; background-color:#ffffff; border-bottom:1px solid #eef2f7;">
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:22px; color:#0f172a; font-weight:700;">
                  Silyapi İnşaat
                </div>
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px; color:#64748b; margin-top:4px;">
                  İletişim Formu Bilgilendirme
                </div>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px;">
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:22px; color:#0f172a;">
                  <p style="margin:0 0 12px 0;">Merhaba,</p>

                  <p style="margin:0 0 12px 0;">
                    İletişim formu aracılığıyla bize ilettiğiniz mesaj başarıyla tarafımıza ulaşmıştır.
                  </p>

                  <p style="margin:0 0 12px 0;">
                    Talebinizi en kısa sürede inceleyerek sizinle dönüş sağlayacağız. Yoğunluk durumuna göre en geç
                    <strong>3 iş günü</strong> içerisinde geri dönüş yapılmaktadır.
                  </p>

                  <p style="margin:0 0 16px 0;">
                    Acil bir durum söz konusuysa bu maili yanıtlayarak bizimle doğrudan iletişime geçebilirsiniz.
                  </p>

                  <p style="margin:0;">
                    Bizi tercih ettiğiniz için teşekkür ederiz.
                  </p>
                </div>

                <!-- Divider -->
                <div style="height:1px; background-color:#eef2f7; margin:20px 0;"></div>

                <!-- Signature -->
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px; color:#334155;">
                  <div style="font-weight:700; color:#0f172a;">Saygılarımızla,</div>
                  <div style="margin-top:6px;">Silyapi İnşaat • Müşteri İlişkileri Ekibi</div>
                  <div style="margin-top:10px;">
                    <div>E-posta: <a href="mailto:info@silyapiinsaat.com" style="color:#2563eb; text-decoration:none;">info@silyapiinsaat.com</a></div>
                    <div>Web: <a href="silyapiinsaat.com" style="color:#2563eb; text-decoration:none;">silyapiinsaat.com</a></div>
                  </div>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 24px; background-color:#f8fafc; border-top:1px solid #eef2f7;">
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:16px; color:#64748b;">
                  Bu otomatik bir bilgilendirme mesajıdır.
                </div>
              </td>
            </tr>
          </table>

          <!-- Small footer note -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px; max-width:600px;">
            <tr>
              <td style="padding:12px 6px; text-align:center;">
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:16px; color:#94a3b8;">
                  © [Yıl] [Firma Adı]. Tüm hakları saklıdır.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export const contactNotificationTemplate = `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width"
    />
    <title>Yeni İletişim Formu Mesajı</title>
  </head>

  <body style="margin: 0; padding: 0; background-color: #f4f6f9">
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="background-color: #f4f6f9; padding: 20px 0"
    >
      <tr>
        <td align="center">
          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              background-color: #ffffff;
              border-radius: 10px;
              overflow: hidden;
              border: 1px solid #e5e7eb;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <!-- Header -->
            <tr>
              <td style="padding: 20px 24px; border-bottom: 1px solid #e5e7eb">
                <h2 style="margin: 0; font-size: 18px; color: #111827">
                  Yeni İletişim Formu Mesajı
                </h2>
                <p style="margin: 6px 0 0 0; font-size: 12px; color: #6b7280">
                  Web siteniz üzerinden yeni bir mesaj alındı.
                </p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td
                style="
                  padding: 24px;
                  font-size: 14px;
                  color: #111827;
                  line-height: 22px;
                "
              >
                <table
                  width="100%"
                  cellpadding="8"
                  cellspacing="0"
                  border="0"
                  style="border-collapse: collapse"
                >
                  <tr>
                    <td
                      width="140"
                      style="background: #f9fafb; font-weight: bold"
                    >
                      İsim
                    </td>
                    <td style="background: #ffffff">{{isim}}</td>
                  </tr>

                  <tr>
                    <td style="background: #f9fafb; font-weight: bold">
                      Soyisim
                    </td>
                    <td style="background: #ffffff">{{soyisim}}</td>
                  </tr>

                  <tr>
                    <td style="background: #f9fafb; font-weight: bold">
                      E-posta
                    </td>
                    <td style="background: #ffffff">
                      <a
                        href="mailto:{{email}}"
                        style="color: #2563eb; text-decoration: none"
                      >
                        {{email}}
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td style="background: #f9fafb; font-weight: bold">
                      Telefon
                    </td>
                    <td style="background: #ffffff">
                      <a
                        href="tel:{{telefon}}"
                        style="color: #2563eb; text-decoration: none"
                      >
                        {{telefon}}
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td
                      valign="top"
                      style="background: #f9fafb; font-weight: bold"
                    >
                      Mesaj
                    </td>
                    <td style="background: #ffffff; white-space: pre-line">
                      {{mesaj}}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                style="
                  padding: 16px 24px;
                  background: #f9fafb;
                  font-size: 12px;
                  color: #6b7280;
                  border-top: 1px solid #e5e7eb;
                "
              >
                Bu mail otomatik olarak oluşturulmuştur. Web sitenizdeki
                iletişim formu aracılığıyla gönderilmiştir.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export const urbanTransformationAutoreplyTemplate = `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Mesajınızı Aldık</title>
  </head>

  <body style="margin:0; padding:0; background-color:#f5f7fb;">
    <!-- Preheader (inbox preview text) -->
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; color:transparent;">
      Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
    </div>

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f5f7fb; margin:0; padding:0;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e8ecf3;">
            <!-- Header -->
            <tr>
              <td style="padding:20px 24px; background-color:#ffffff; border-bottom:1px solid #eef2f7;">
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:22px; color:#0f172a; font-weight:700;">
                  Silyapi İnşaat
                </div>
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px; color:#64748b; margin-top:4px;">
                  Kentsel Dönüşüm Talep Formu Bilgilendirme
                </div>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px;">
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:22px; color:#0f172a;">
                  <p style="margin:0 0 12px 0;">Merhaba,</p>

                  <p style="margin:0 0 12px 0;">
                    Kentsel Dönüşüm Talep formu aracılığıyla bize ilettiğiniz mesaj başarıyla tarafımıza ulaşmıştır.
                  </p>

                  <p style="margin:0 0 12px 0;">
                    Talebinizi en kısa sürede inceleyerek sizinle dönüş sağlayacağız. Yoğunluk durumuna göre en geç
                    <strong>3 iş günü</strong> içerisinde geri dönüş yapılmaktadır.
                  </p>

                  <p style="margin:0 0 16px 0;">
                    Acil bir durum söz konusuysa bu maili yanıtlayarak bizimle doğrudan iletişime geçebilirsiniz.
                  </p>

                  <p style="margin:0;">
                    Bizi tercih ettiğiniz için teşekkür ederiz.
                  </p>
                </div>

                <!-- Divider -->
                <div style="height:1px; background-color:#eef2f7; margin:20px 0;"></div>

                <!-- Signature -->
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px; color:#334155;">
                  <div style="font-weight:700; color:#0f172a;">Saygılarımızla,</div>
                  <div style="margin-top:6px;">Silyapi İnşaat • Müşteri İlişkileri Ekibi</div>
                  <div style="margin-top:10px;">
                    <div>E-posta: <a href="mailto:info@silyapiinsaat.com" style="color:#2563eb; text-decoration:none;">info@silyapiinsaat.com</a></div>
                    <div>Web: <a href="silyapiinsaat.com" style="color:#2563eb; text-decoration:none;">silyapiinsaat.com</a></div>
                  </div>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 24px; background-color:#f8fafc; border-top:1px solid #eef2f7;">
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:16px; color:#64748b;">
                  Bu otomatik bir bilgilendirme mesajıdır.
                </div>
              </td>
            </tr>
          </table>

          <!-- Small footer note -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px; max-width:600px;">
            <tr>
              <td style="padding:12px 6px; text-align:center;">
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:16px; color:#94a3b8;">
                  © [Yıl] [Firma Adı]. Tüm hakları saklıdır.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export const urbanTransformationNotificationTemplate = `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Kentsel Dönüşüm Talep Formu</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
  <tr>
    <td align="center">

      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">

        <!-- Header -->
        <tr>
          <td style="background:#1f2937; padding:20px; text-align:center;">
            <h2 style="color:#ffffff; margin:0;">Kentsel Dönüşüm Talep Formu</h2>
          </td>
        </tr>

        <!-- Content -->
        <tr>
          <td style="padding:30px;">

            <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">

              <tr style="border-bottom:1px solid #e5e7eb;">
                <td width="40%" style="font-weight:bold; color:#374151;">Ad Soyad</td>
                <td style="color:#111827;">{{ad_soyad}}</td>
              </tr>

              <tr style="border-bottom:1px solid #e5e7eb;">
                <td style="font-weight:bold; color:#374151;">E-Posta Adresi</td>
                <td style="color:#111827;">{{eposta}}</td>
              </tr>

              <tr style="border-bottom:1px solid #e5e7eb;">
                <td style="font-weight:bold; color:#374151;">Cep Telefonu</td>
                <td style="color:#111827;">{{telefon}}</td>
              </tr>

              <tr style="border-bottom:1px solid #e5e7eb;">
                <td style="font-weight:bold; color:#374151;">İl</td>
                <td style="color:#111827;">{{il}}</td>
              </tr>

              <tr style="border-bottom:1px solid #e5e7eb;">
                <td style="font-weight:bold; color:#374151;">İlçe</td>
                <td style="color:#111827;">{{ilce}}</td>
              </tr>

              <tr style="border-bottom:1px solid #e5e7eb;">
                <td style="font-weight:bold; color:#374151;">Ada / Parsel</td>
                <td style="color:#111827;">{{ada_parsel}}</td>
              </tr>

              <tr>
                <td style="font-weight:bold; color:#374151;">Talep / Açıklama</td>
                <td style="color:#111827;">{{konu}}</td>
              </tr>

            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb; padding:20px; text-align:center; font-size:12px; color:#6b7280;">
            Bu mesaj web sitenizdeki <strong>Kentsel Dönüşüm Talep Formu</strong> aracılığıyla gönderilmiştir.<br>
            © 2026 SİL Yapı İnşaat
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

</body>
</html>`;

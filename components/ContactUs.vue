<template>
  <!-- CONTACTUS SECTION -->
  <!-- CONTACT US -->
  <section
    id="contactus"
    class="contactus-section"
  >
    <div>
      <h4 class="section-title">İLETİŞİM FORMU</h4>
      <h6 class="section-desc my-2">
        İletişim formumuzu doldurarak bizimle iletişime geçebilirsiniz.
      </h6>
      <v-row>
        <v-col
          cols="12"
          lg="6"
          xl="4"
          class="my-1"
        >
          <ClientOnly>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.8718994262895!2d28.86230031571861!3d41.00617692750249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb4a1141a37f%3A0x3e185f3859e9541a!2sBah%C3%A7elievler%20Merkez%2C%20Talatpa%C5%9Fa%20Cd%20No%3A49%2C%2034180%20Bah%C3%A7elievler%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1672382649918!5m2!1str!2str"
              width="100%"
              height="350"
              style="border: 3px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <template #fallback>
              <div style="width: 100%; height: 350px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
                <span>Harita yükleniyor...</span>
              </div>
            </template>
          </ClientOnly>
        </v-col>
        <v-col
          cols="12"
          class="divider d-flex justify-content-center d-lg-none"
        >
          <hr />
        </v-col>
        <v-col
          cols="12"
          lg="6"
          xl="3"
          class="d-flex my-1"
        >
          <div class="contact-container">
            <h5 class="header">İLETİŞİM BİLGİLERİ</h5>
            <h6 class="sub-header">
              İstanbul içi tüm ilçelere hizmet vermekteyiz.
            </h6>
            <div class="phone">
              <div class="title">
                <v-icon size="20">mdi-map-marker</v-icon>
                <span>Adres:</span>
              </div>
              <span class="description">
                Talatpaşa Caddesi bahar sokak No:49 Daire:13 Bahçelievler
                /İstanbul
              </span>
            </div>
            <div class="email">
              <div class="title">
                <v-icon size="20">mdi-email</v-icon>
                <span>Email:</span>
              </div>
              <span class="description"> silyapiinsaat@gmail.com </span>
            </div>
            <div class="phone">
              <div class="title">
                <v-icon size="20">mdi-phone</v-icon>
                <span>Telefon:</span>
              </div>
              <span class="description"> +90 535 873 44 76 </span>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          class="divider d-flex justify-content-center d-lg-none"
        >
          <hr />
        </v-col>
        <v-col
          cols="12"
          xl="5"
          class="pl-xl-5 my-1 contactus-form-wrapper"
        >
          <div class="contactus-form">
            <div class="title mb-1">BİZ SİZİ ARAYALIM</div>
            <v-form
              method="POST"
              action=""
              id="contactForm"
            >
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="contactModel.name"
                    label="Adınız"
                    variant="outlined"
                    density="comfortable"
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="contactModel.lastName"
                    label="Soyadınız"
                    variant="outlined"
                    density="comfortable"
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="contactModel.name"
                    label="Eposta Adresiniz"
                    variant="outlined"
                    density="comfortable"
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="contactModel.name"
                    label="Telefon Numaranız"
                    variant="outlined"
                    density="comfortable"
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    id="remark"
                    label="Mesajınız"
                    v-model="contactModel.remark"
                    variant="outlined"
                    density="comfortable"
                    counter="100"
                    maxlength="100"
                    :hint="$t('public.this_field_required')"
                    :rules="requiredFieldRule"
                    required
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    color="primary"
                    type="submit"
                    block
                  >
                    GÖNDER
                    <v-icon size="20">mdi-check</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script>
import rules from "@/mixins/rules";
export default {
  name: "ContactUs",
  mixins: [rules],
  data() {
    return {
      contactModel: {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        remark: "",
      },
    };
  },
};
</script>
<style></style>

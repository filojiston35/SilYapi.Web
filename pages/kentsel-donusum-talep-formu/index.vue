<template>
  <div
    class="scroller"
    id="scroller"
  >
    <Header />
    <!-- REQUEST FORM SECTION -->
    <section
      id="requestform"
      class="request-form-section"
    >
      <v-col
        cols="12"
        md="8"
        class="d-flex flex-column offset-md-2"
      >
        <h4 class="section-title mt-3">KENTSEL DÖNÜŞÜM TALEP FORMU</h4>
        <p class="section-desc">
          Aşağıdaki formu doldurarak kentsel dönüşüm talebinizi bize
          iletebilirsiniz.
        </p>
        <v-form
          ref="contactForm"
          id="contactForm"
          class="mt-5"
        >
          <v-row>
            <!-- FULL NAME -->
            <v-col
              cols="12"
              md="6"
              class="py-1"
            >
              <v-text-field
                id="fullName"
                label="Adınız Soyadınız"
                v-model="model.fullName"
                variant="outlined"
                density="comfortable"
                counter="100"
                maxlength="100"
                :hint="$t('public.this_field_required')"
                :rules="requiredFieldRule.concat(stringFieldRule)"
                required
              ></v-text-field>
            </v-col>
            <!-- EMAIL -->
            <v-col
              cols="12"
              md="6"
              class="py-1"
            >
              <v-text-field
                id="email"
                label="E-posta Adresiniz"
                v-model="model.email"
                variant="outlined"
                density="comfortable"
                counter="100"
                maxlength="100"
                :hint="$t('public.this_field_required')"
                :rules="requiredFieldRule"
                required
              ></v-text-field>
            </v-col>
            <!-- PHONE -->
            <v-col
              cols="12"
              md="6"
              class="py-1"
            >
              <v-text-field
                id="phone"
                label="Cep Telefonunuz"
                v-model="model.phone"
                variant="outlined"
                density="comfortable"
                counter="100"
                maxlength="100"
                :hint="$t('public.this_field_required')"
                :rules="requiredFieldRule"
                required
              ></v-text-field>
            </v-col>
            <!-- CITY -->
            <v-col
              cols="12"
              md="6"
              class="py-1"
            >
              <v-text-field
                id="city"
                label="İl"
                v-model="model.city"
                variant="outlined"
                density="comfortable"
                counter="100"
                maxlength="100"
                :hint="$t('public.this_field_required')"
                :rules="requiredFieldRule"
                required
              ></v-text-field>
            </v-col>
            <!-- STATE -->
            <v-col
              cols="12"
              md="6"
              class="py-1"
            >
              <v-text-field
                id="state"
                label="İlçe"
                v-model="model.state"
                variant="outlined"
                density="comfortable"
                counter="100"
                maxlength="100"
                :hint="$t('public.this_field_required')"
                :rules="requiredFieldRule"
                required
              ></v-text-field>
            </v-col>
            <!-- PARCEL -->
            <v-col
              cols="12"
              md="6"
              class="py-1"
            >
              <v-text-field
                id="parcel"
                label="Ada Parsel"
                v-model="model.parcel"
                variant="outlined"
                density="comfortable"
                counter="100"
                maxlength="100"
                :hint="$t('public.this_field_required')"
                :rules="requiredFieldRule"
                required
              ></v-text-field>
            </v-col>
            <!-- SUBJECT -->
            <v-col
              cols="12"
              class="py-1"
            >
              <v-textarea
                id="subject"
                label="Konu"
                v-model="model.subject"
                variant="outlined"
                density="comfortable"
                counter="200"
                maxlength="200"
                :hint="$t('public.this_field_required')"
                :rules="requiredFieldRule"
                required
              ></v-textarea>
            </v-col>
            <v-col
              cols="12"
              class="text-end"
            >
              <v-btn
                :block="mdAndUp ? false : true"
                color="primary"
                :width="mdAndUp ? '250px' : '100%'"
                :loading="loading"
                @click="submitForm()"
              >
                GÖNDER
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useReCaptcha } from "vue-recaptcha-v3";
import { useDisplay } from "vuetify";
import rules from "@/mixins/rules";
import global from "@/mixins/global";

export default {
  layout: "default",
  name: "RequestForm",
  components: { Header, Footer },
  mixins: [global, rules],
  setup() {
    useHead({ title: "Kentsel Dönüşüm Talep Formu" });
    const { mdAndUp } = useDisplay();
    let executeRecaptcha = null;
    let recaptchaLoaded = null;
    if (import.meta.client) {
      try {
        const api = useReCaptcha();
        executeRecaptcha = api.executeRecaptcha;
        recaptchaLoaded = api.recaptchaLoaded;
      } catch (_) {
        executeRecaptcha = null;
        recaptchaLoaded = null;
      }
    }
    return { mdAndUp, executeRecaptcha, recaptchaLoaded };
  },
  data() {
    return {
      loading: false,
      model: {
        fullName: "Yusuf Ünlü",
        email: "myunlu35@gmail.com",
        phone: "5555555555",
        city: "İstanbul",
        state: "İstanbul",
        parcel: "1234567890",
        subject: "Test",
      },
    };
  },
  methods: {
    async submitForm() {
      const form = this.$refs.contactForm;
      if (!form) return;

      const { valid } = await form.validate();
      if (!valid) return;

      this.loading = true;
      let recaptchaToken = null;
      try {
        if (this.recaptchaLoaded && typeof this.recaptchaLoaded === "function") {
          await this.recaptchaLoaded();
        }
        if (this.executeRecaptcha && typeof this.executeRecaptcha === "function") {
          recaptchaToken = await this.executeRecaptcha("requestForm");
        }
      } catch (recaptchaErr) {
        this.createToastMessage(
          "error",
          "Güvenlik doğrulaması",
          "Güvenlik doğrulaması alınamadı. Lütfen sayfayı yenileyip tekrar deneyin.",
        );
        this.loading = false;
        return;
      }

      if (!recaptchaToken) {
        this.createToastMessage(
          "error",
          "Güvenlik doğrulaması",
          "reCAPTCHA henüz yüklenmedi. Lütfen birkaç saniye bekleyip tekrar deneyin.",
        );
        this.loading = false;
        return;
      }

      try {
        const response = await $fetch("/api/urban-transformation-request", {
          method: "POST",
          body: {
            fullName: this.model.fullName,
            email: this.model.email,
            phone: this.model.phone,
            city: this.model.city,
            state: this.model.state,
            parcel: this.model.parcel,
            subject: this.model.subject,
            recaptchaToken: recaptchaToken ?? undefined,
          },
        });

        if (response.success) {
          this.createToastMessage(
            "success",
            "İşlem Başarılı",
            response.message || "Kentsel Dönüşüm Talep Formu başarıyla gönderildi, size en kısa sürede dönüş yapacağız.",
          );
          // Formu temizle
          this.model = {
            fullName: null,
            email: null,
            phone: null,
            city: null,
            state: null,
            parcel: null,
            subject: null,
          };
          // Form validation'ı sıfırla
          form.reset();
        }
      } catch (error) {
        let errorMessage = "Kentsel Dönüşüm Talep Formu gönderimi sırasında bir hata oluştu";
        
        if (error.data?.errors && Array.isArray(error.data.errors)) {
          errorMessage = error.data.errors.join(", ");
        } else if (error.message) {
          errorMessage = error.message;
        }

        this.createToastMessage(
          "error",
          "İşlem Başarısız",
          errorMessage,
        );
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

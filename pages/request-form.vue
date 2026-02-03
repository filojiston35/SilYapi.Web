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
<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import rules from "@/mixins/rules";
import global from "@/mixins/global";
import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();
useHead({
  title: "Kentsel Dönüşüm Talep Formu",
});
</script>
<script>
export default {
  layout: "default",
  name: "RequestForm",
  mixins: [global, rules],
  data() {
    return {
      loading: false,
      model: {
        fullName: null,
        email: null,
        phone: null,
        city: null,
        state: null,
        parcel: null,
        subject: null,
      },
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      try {
        this.createToastMessage(
          "success",
          "İşlem Başarılı",
          "Kentsel Dönüşüm Talep Formu başarıyla gönderildi, size en kısa sürede dönüş yapacağız.",
        );
        this.loading = false;
      } catch (error) {
        this.createToastMessage(
          "error",
          "İşlem Başarısız",
          "Kentsel Dönüşüm Talep Formu gönderimi sırasında bir hata oluştu",
        );
        this.loading = false;
      }
    },
  },
};
</script>

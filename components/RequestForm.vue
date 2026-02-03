<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <v-card class="request-form-card">
      <v-card-title>
        Kentsel Dönüşüm Talep Formu
        <v-icon
          class="text-body-1 text-white"
          @click="closeDialog()"
        >
          mdi-close
        </v-icon>
      </v-card-title>
      <v-card-text>
        <p>
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
                block
                color="primary"
                :loading="loading"
                @click="submitForm()"
              >
                GÖNDER
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup>
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
      dialog: false,
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
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    async submitForm() {
      // Form validation kontrolü
      const form = this.$refs.contactForm;
      if (!form) return;

      const { valid } = await form.validate();
      if (!valid) {
        return;
      }

      this.loading = true;
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
          },
        });

        if (response.success) {
          this.createToastMessage(
            "success",
            "İşlem Başarılı",
            response.message ||
              "Kentsel Dönüşüm Talep Formu başarıyla gönderildi, size en kısa sürede dönüş yapacağız.",
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
          // Dialog'u kapat
          this.closeDialog();
        }
      } catch (error) {
        let errorMessage =
          "Kentsel Dönüşüm Talep Formu gönderimi sırasında bir hata oluştu";

        if (error.data?.errors && Array.isArray(error.data.errors)) {
          errorMessage = error.data.errors.join(", ");
        } else if (error.message) {
          errorMessage = error.message;
        }

        this.createToastMessage("error", "İşlem Başarısız", errorMessage);
      } finally {
        this.loading = false;
      }
    },
  },
  expose: ["openDialog"],
};
</script>

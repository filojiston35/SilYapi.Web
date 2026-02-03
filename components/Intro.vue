<template>
  <!-- INTRO SECTION -->
  <section
    id="intro"
    class="intro-section"
  >
    <div>
      <h3>SİL Baştan YAPI'yoruz</h3>
      <p>
        1982 yılından bu yana edindiğimiz tecrübe ile bünyemizde bulunan
        mühendis, mimar ve iç mimarlarımız, yaşam alanlarınızı güvenle inşa
        ediyor.
      </p>
      <a
        @click="openRequestForm()"
        class="request-form-button"
      >
        KENTSEL DÖNÜŞÜM TALEP FORMU
        <i class="fa-solid fa-chevron-right ml-1"></i>
        <i class="fa-solid fa-chevron-right"></i>
        <i class="fa-solid fa-chevron-right"></i>
      </a>
    </div>
    <!-- social media icons -->
    <div class="social">
      <!-- email -->
      <div>
        <a
          href="mailto:silyapiinsaat@gmail.com"
          target="_blank"
        >
          <v-icon :size="mdAndUp ? 30 : 20">mdi-email-outline</v-icon>
        </a>
      </div>
      <!-- instagram -->
      <div>
        <a
          href="https://www.instagram.com/silyapiinsaat/"
          target="_blank"
        >
          <v-icon :size="mdAndUp ? 28 : 20">mdi-instagram</v-icon>
        </a>
      </div>
    </div>
  </section>
  <RequestForm ref="requestForm" />
</template>
<script setup>
import { useDisplay } from "vuetify";
import RequestForm from "@/components/RequestForm.vue";
const { mdAndUp } = useDisplay();
</script>
<script>
export default {
  name: "Intro",
  methods: {
    openRequestForm() {
      this.$refs.requestForm.openDialog();
    },
  },
};
</script>

<template>
  <!-- BRANDS SECTION -->
  <section
    id="brands"
    class="brands-section"
    :class="{ 'is-page': isPage }"
  >
    <h4 class="section-title">MARKALAR</h4>
    <p class="section-desc my-2">
      Güvenilir ve kaliteli yapılar için seçtiğimiz markalar
    </p>
    <v-chip
      v-for="brand in brands"
      :key="brand.id"
      size="small"
      variant="outlined"
      class="ma-1"
      color="#2c304b"
    >
    <v-icon size="small">mdi-circle-small</v-icon>
      {{ brand.name }}
    </v-chip>
    <img
      src="/images/brands.png"
      alt=""
    />
  </section>
</template>
<script>
import { brands } from "@/data/brands";
export default {
  name: "Brands",
  props: {
    isPage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      brands: brands,
    };
  },
};
</script>
<style></style>

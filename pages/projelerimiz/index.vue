<template>
  <div
    class="scroller"
    id="scroller"
  >
    <Header />
    <Projects :isPage="true" />
    <Footer />
  </div>
</template>
<script setup>
useHead({
  title: "Projelerimiz",
  meta: [
    { name: "description", content: "" },
  ],
});
</script>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Projects from "@/components/Projects.vue";
export default {
  name: "Projelerimiz",
  data() {
    return {
      title: "Projelerimiz",
    };
  },
};
</script>

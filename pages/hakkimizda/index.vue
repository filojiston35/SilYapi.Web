<template>
   <div
    class="scroller"
    id="scroller"
  >
    <Header />
    <AboutUs :isPage="true" />
    <Footer />
  </div>
</template>
<script setup>
useHead({
    title: 'Hakkimizda',
})
</script>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AboutUs from "@/components/AboutUs.vue";
export default {
    name: 'Hakkimizda',
    data() {
        return {
            title: 'Hakkimizda',
        }
    }
}
</script>
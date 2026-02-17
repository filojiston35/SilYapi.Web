<template>
    <div
     class="scroller"
     id="scroller"
   >
     <Header />
     <Services :isPage="true" />
     <Footer />
   </div>
 </template>
 <script setup>
useHead({
    title: 'Hizmetlerimiz',
})
</script>
 <script>
 import Header from "@/components/Header.vue";
 import Footer from "@/components/Footer.vue";
 import Services from "@/components/Services.vue";
 export default {
     name: 'Hizmetlerimiz',
     props: {
        isPage: {
            type: Boolean,
            default: false,
        }
     },
     data() {
         return {
             title: 'Hizmetlerimiz',
         }
     }
 }
 </script>
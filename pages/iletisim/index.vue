<template>
    <div
     class="scroller"
     id="scroller"
   >
     <Header />
     <ContactUs :isPage="true" />
     <Footer />
   </div>
 </template>
 <script setup>
useHead({
    title: 'İletişim',
    meta: [
        { name: "description", content: "" },
    ],
})
 </script>
 <script>
 import Header from "@/components/Header.vue";
 import Footer from "@/components/Footer.vue";
 import ContactUs from "@/components/ContactUs.vue";
 export default {
     name: 'İletişim',
     data() {
         return {
             title: 'İletişim',
         }
     }
 }
</script>
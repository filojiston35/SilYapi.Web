<template>
    <div
     class="scroller"
     id="scroller"
   >
     <Header />
     <Brands :isPage="true" />
     <Footer />
   </div>
 </template>
 <script setup>
 useHead({
     title: 'Çalıştığımız Markalar',
 })
 </script>
 <script>
 import Header from "@/components/Header.vue";
 import Footer from "@/components/Footer.vue";
 import Brands from "@/components/Brands.vue";
 export default {
     name: 'Çalıştığımız Markalar',
     data() {
         return {
             title: 'Çalıştığımız Markalar',
         }
     }
 }
 </script>
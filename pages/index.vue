<template>
  <!-- SCROLLER -->
  <div
    class="scroller"
    id="scroller"
  >
    <HeaderDefault />
    <!-- SPLASH SCREEN - YORUM SATIRINDA
    <div
      v-show="isSplashVisible"
      class="splash-screen"
      :class="{ 'is-fading': isSplashFading }"
    >
      <img
        src="/images/colorful-logo.svg"
        alt=""
      />
    </div>
    -->
    <!-- SHOWCASE SECTION -->
    <section
      id="mainpage"
      class="showcase-section"
    >
      <!-- BACKGROUND -->
      <video
        id="showcaseVideo"
        ref="showcaseVideo"
        preload="auto"
        autoplay="autoplay"
        loop
        muted
        playsinline
      >
        <p>Your user agent does not support the HTML5 Video element.</p>
        <source
          src="/videos/showcase.webm"
          type="video/webm"
        />
        <source
          src="/videos/showcase.mp4"
          type="video/mp4"
        />
      </video>
      <div class="overlay"></div>
    </section>
    <!-- INTRO SECTION -->
    <Intro />
    <!-- ABOUTUS SECTION -->
    <AboutUs />
    <!-- WHAT WE DO SECTION -->
    <WhatWeDo />
    <!-- PROJECTS SECTION -->
    <Projects />
    <!-- SAMPLE 1 SECTION -->
    <Sample1Section />
    <!-- BRANDS SECTION -->
    <Brands />
    <!-- VISION AND MISSION SECTION -->
    <VisionAndMission />
    <!-- SERVICES SECTION -->
    <Services />
    <!-- CONTACTUS SECTION -->
    <ContactUs />
    <!-- FOOTER SECTION -->
    <Footer />
    <!-- SCROLLER END -->
  </div>
</template>
<script setup>
import HeaderDefault from "@/components/HeaderDefault.vue";
import AboutUs from "@/components/AboutUs.vue";
import Brands from "@/components/Brands.vue";
import VisionAndMission from "@/components/VisionAndMission.vue";
import Sample1Section from "@/components/Sample1Section.vue";
import Footer from "@/components/Footer.vue";
import WhatWeDo from "@/components/WhatWeDo.vue";
import Intro from "@/components/Intro.vue";
import Projects from "@/components/Projects.vue";
import Services from "@/components/Services.vue";
import ContactUs from "@/components/ContactUs.vue";
useHead({
    title: 'Anasayfa',
})
</script>
<script>
export default {
  layout: "default",
  data: () => {
    return {
      timers: [],
    };
  },
  mounted() {
    this.playShowcaseVideo();
    // Title'ı manuel olarak set et (cache sorunları için)
    if (typeof document !== 'undefined') {
      document.title = 'Sil Yapı İnşaat';
    }
  },
  beforeDestroy() {
    this.clearTimers();
  },
  methods: {
    setBodyOverflow(value) {
      document.body.style.overflowY = value;
    },
    addTimer(timerId) {
      this.timers.push(timerId);
    },
    clearTimers() {
      this.timers.forEach((timerId) => clearTimeout(timerId));
      this.timers = [];
    },
    playShowcaseVideo() {
      const rVideo = this.$refs.showcaseVideo;
      if (!rVideo || typeof rVideo.play !== "function") {
        return;
      }

      rVideo.pause();
      rVideo
        .play()
        .then((res) => {
          console.log("playing start", res);
        })
        .catch((err) => {
          console.log("error playing", err);
        });
    },
  },
};
</script>

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
<script>
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

export default {
  layout: "default",
  setup() {
    useHead({
      title: "Anasayfa",
    });
  },
  data: () => {
    return {
      // SPLASH SCREEN - YORUM SATIRINDA
      // isSplashVisible: true,
      // isSplashFading: false,
      timers: [],
    };
  },
  mounted() {
    // SPLASH SCREEN - YORUM SATIRINDA
    // this.handleWindowLoad = this.handleWindowLoad.bind(this);
    // if (document.readyState === "complete") {
    //   this.handleWindowLoad();
    // } else {
    //   window.addEventListener("load", this.handleWindowLoad);
    // }
    // Video'yu direkt oynat
    this.playShowcaseVideo();
  },
  beforeDestroy() {
    // SPLASH SCREEN - YORUM SATIRINDA
    // window.removeEventListener("load", this.handleWindowLoad);
    this.clearTimers();
    // this.setBodyOverflow("auto");
  },
  // watch: {
  //   isSplashVisible(isVisible) {
  //     this.setBodyOverflow(isVisible ? "hidden" : "auto");
  //   },
  // },
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
    // SPLASH SCREEN - YORUM SATIRINDA
    // handleWindowLoad() {
    //   this.playShowcaseVideo();

    //   const fadeTimer = setTimeout(() => {
    //     this.isSplashFading = true;
    //     const hideTimer = setTimeout(() => {
    //       this.isSplashVisible = false;
    //       this.isSplashFading = false;
    //     }, 500);
    //     this.addTimer(hideTimer);
    //   }, 1000);
    //   this.addTimer(fadeTimer);
    // },
  },
};
</script>

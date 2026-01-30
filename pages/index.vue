<template>
  <!-- SCROLLER -->
  <div
    class="scroller"
    id="scroller"
  >
    <div>
      <Header />
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
      <section
        id="intro"
        class="intro-section"
      >
        <div class="text">
          <h3>SİL Baştan YAPI'yoruz</h3>
          <p>
            1982 yılından itibaren gelen tecrübe ile şirketimizin bünyesinde
            bulunan mühendis ,mimar ve iç mimarlarımız sizlerin yaşam alanlarını
            güvenle inşa ediyor.
          </p>
          <a href="#">
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
              href="mailto:info@silyapiinsaat.com"
              target="_blank"
            >
              <v-icon size="30">mdi-email-outline</v-icon>
            </a>
          </div>
          <!-- instagram -->
          <div>
            <a
              href="https://www.instagram.com/silyapiinsaat/"
              target="_blank"
            >
              <v-icon size="28">mdi-instagram</v-icon>
            </a>
          </div>
          <!-- whatsapp -->
          <div>
            <a
              href="https://wa.me/905321234567"
              target="_blank"
            >
              <v-icon size="28">mdi-whatsapp</v-icon>
            </a>
          </div>
        </div>
      </section>
      <!-- ABOUTUS SECTION -->
      <AboutUs />
      <!-- WHAT WE DO SECTION -->
      <WhatWeDo />
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
    </div>
    <!-- SCROLLER END -->
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import AboutUs from "@/components/AboutUs.vue";
import Brands from "@/components/Brands.vue";
import VisionAndMission from "@/components/VisionAndMission.vue";
import Sample1Section from "@/components/Sample1Section.vue";
import Footer from "@/components/Footer.vue";
import WhatWeDo from "@/components/WhatWeDo.vue";
export default {
  layout: "default",
  head() {
    return {
      title: "Anasayfa",
    };
  },
  data: () => {
    return {
      isSplashVisible: true,
      isSplashFading: false,
      timers: [],
    };
  },
  mounted() {
    this.handleWindowLoad = this.handleWindowLoad.bind(this);
    if (document.readyState === "complete") {
      this.handleWindowLoad();
    } else {
      window.addEventListener("load", this.handleWindowLoad);
    }
  },
  beforeDestroy() {
    window.removeEventListener("load", this.handleWindowLoad);
    this.clearTimers();
    this.setBodyOverflow("auto");
  },
  watch: {
    isSplashVisible(isVisible) {
      this.setBodyOverflow(isVisible ? "hidden" : "auto");
    },
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
    handleWindowLoad() {
      this.playShowcaseVideo();

      const fadeTimer = setTimeout(() => {
        this.isSplashFading = true;
        const hideTimer = setTimeout(() => {
          this.isSplashVisible = false;
          this.isSplashFading = false;
        }, 500);
        this.addTimer(hideTimer);
      }, 1000);
      this.addTimer(fadeTimer);
    },
  },
  components: {
    Header,
  },
};
</script>

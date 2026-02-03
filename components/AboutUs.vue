<template>
  <!-- ABOUTUS SECTION -->
  <section
    id="aboutus"
    class="aboutus-section"
    ref="aboutUsSection"
  >
    <div class="left-content">
      <div class="column-1">SEKTÖRDE</div>
      <div class="column-2">{{ years }}</div>
      <div class="column-3">YIL</div>
    </div>
    <div class="right-content">
      <div class="column-1">HAKKIMIZDA</div>
      <div class="column-2">
        <p>
          1982 yılından itibaren inşaat sektöründeki faaliyetlerimizi, aynı
          kalite ve heyecanla; günümüz mimarisine uyum sağlayan modern,
          sürdürülebilir, fonksiyonel ve güvenilir yapılar inşa ederek
          sürdürmekteyiz.
        </p>
        <br /><br />
        <p>
          <span class="font-weight-medium">SİL YAPI İNŞAAT</span> olarak
          maliklerin istek ve arzularını dikkate alarak projelerine uygun
          şekilde yapılar yapmaya özen gösteriyor, özveriyle takip ediyor ve
          uyguluyoruz. Bünyemizde bulunan mühendis ,mimar ve iç mimarlar ile her
          zaman ekiplerimizin imalatlarını en iyi şekilde yapmaları için dikkat
          ediyoruz.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutUs",
  data() {
    return {
      years: 0,
      targetYears: 44,
      hasAnimated: false,
      observer: null,
      animationFrameId: null,
      startTimestamp: null,
    };
  },
  mounted() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      this.years = this.targetYears;
      this.hasAnimated = true;
      return;
    }

    const root = document.getElementById("scroller") || null;
    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !this.hasAnimated) {
          this.startCountAnimation();
          this.hasAnimated = true;
          if (this.observer) {
            this.observer.disconnect();
          }
        }
      },
      {
        root,
        threshold: 0.4,
      },
    );

    if (this.$refs.aboutUsSection) {
      this.observer.observe(this.$refs.aboutUsSection);
    }
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  },
  methods: {
    startCountAnimation() {
      const durationMs = 2000;
      this.startTimestamp = null;

      const step = (timestamp) => {
        if (!this.startTimestamp) {
          this.startTimestamp = timestamp;
        }
        const progress = Math.min(
          (timestamp - this.startTimestamp) / durationMs,
          1,
        );
        this.years = Math.floor(this.targetYears * progress);

        if (progress < 1) {
          this.animationFrameId = requestAnimationFrame(step);
        } else {
          this.years = this.targetYears;
        }
      };

      this.animationFrameId = requestAnimationFrame(step);
    },
  },
};
</script>
<style></style>

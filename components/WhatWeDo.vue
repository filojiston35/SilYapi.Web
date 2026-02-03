<template>
  <!-- WHAT WE DO SECTION -->
  <section
    id="whatwedo"
    class="whatwedo-section"
    ref="whatWeDoSection"
  >
    <h4 class="section-title">NELER YAPIYORUZ ?</h4>
    <p class="section-desc">
      Sizlerin konforlu ve güvenli bir yaşam sürebilmesi için çalışıyoruz
    </p>
    <div class="section-cards">
      <div>
        <span>
          <Icon
            icon="tdesign:building-filled"
            width="40"
            height="40"
            color="white"
          />
        </span>
        <span id="completedResidence">+{{ completedResidence }}</span>
        <span>Tamamlanan Mesken</span>
      </div>
      <div>
        <span>
          <Icon
            icon="fa-solid:hard-hat"
            width="40"
            height="40"
            color="white"
          />
        </span>
        <span id="experience">{{ experience }}</span>
        <span>Yıllık Deneyim</span>
      </div>
      <div>
        <span>
          <Icon
            icon="fa7-solid:person-digging"
            width="40"
            height="40"
            color="white"
          />
        </span>
        <span id="builtArea">{{ builtArea }}</span>
        <span>İnşaa Edilan Alan</span>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
<script>
export default {
  name: "WhatWeDo",
  data() {
    // Mevcut yıl - 1982 hesaplama
    const currentYear = new Date().getFullYear();
    const calculatedExperience = currentYear - 1982;
    
    return {
      completedResidence: 0,
      experience: 0,
      builtArea: 0,
      targets: {
        completedResidence: 200,
        experience: calculatedExperience,
        builtArea: 50000,
      },
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
      this.completedResidence = this.targets.completedResidence;
      this.experience = this.targets.experience;
      this.builtArea = this.targets.builtArea;
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

    if (this.$refs.whatWeDoSection) {
      this.observer.observe(this.$refs.whatWeDoSection);
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
      const durationMs = 4000;
      this.startTimestamp = null;

      const step = (timestamp) => {
        if (!this.startTimestamp) {
          this.startTimestamp = timestamp;
        }
        const progress = Math.min(
          (timestamp - this.startTimestamp) / durationMs,
          1,
        );

        this.completedResidence = Math.floor(
          this.targets.completedResidence * progress,
        );
        this.experience = Math.floor(this.targets.experience * progress);
        this.builtArea = Math.floor(this.targets.builtArea * progress);

        if (progress < 1) {
          this.animationFrameId = requestAnimationFrame(step);
        } else {
          this.completedResidence = this.targets.completedResidence;
          this.experience = this.targets.experience;
          this.builtArea = this.targets.builtArea;
        }
      };

      this.animationFrameId = requestAnimationFrame(step);
    },
  },
};
</script>

<template>
  <!-- HEADER START -->
  <header
    class="header"
    :class="{ active: isMenuOpen, fixed: isFixed }"
  >
    <a
      :class="{ 'd-none': isMenuOpen }"
      href="/"
      id="logoWhite"
      ><img
        class="logo"
        src="/images/logo-white.svg"
        alt=""
    /></a>
    <a
      href="/"
      id="logoBlack"
      :class="{ 'd-none': !isMenuOpen }"
      ><img
        class="logo"
        src="/images/logo.svg"
        alt=""
    /></a>
    <div>
      <div class="menu-toggle my-auto">
        <input
          type="checkbox"
          v-model="isMenuOpen"
        />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
  <!-- HEADER END -->
  <!-- NAVBAR -->
  <div
    class="menu"
    :class="{ active: isMenuOpen }"
  >
    <div
      class="contact-container d-none d-md-flex"
      :class="{ active: isMenuOpen }"
    >
      <span class="title">İLETİŞİM BİLGİLERİ</span>
      <span class="sub-title"
        >İstanbul içi tüm ilçelere hizmet vermekteyiz.</span
      >
      <div class="address">
        <div class="d-flex">
          <Icon
            icon="line-md:map-marker-filled"
            width="20"
            height="20"
            color="#2c304b"
          />
          <span class="title">Adres:</span>
        </div>
        <span class="description">
          Talatpaşa Caddesi No:49 İstanbul/Bahçelievler
        </span>
      </div>
      <div class="email">
        <div class="d-flex">
          <Icon
            icon="mdi:email"
            width="20"
            height="20"
            color="#2c304b"
            class="mr-1"
          />
          <span class="title">Email:</span>
        </div>
        <span class="description">info@silyapiinsaat.com</span>
      </div>
      <div class="phone">
        <div class="d-flex">
          <Icon
            icon="line-md:phone-filled"
            width="20"
            height="20"
            color="#2c304b"
            class="mr-1"
          />
          <span class="title">Telefon:</span>
        </div>
        <span class="description">+90 535 873 44 76 </span>
      </div>
    </div>
    <ul
      class="navigation"
      :class="{ active: isMenuOpen }"
    >
      <li @click="gotoPage('/')">
        <span class="navigation-link"> Anasayfa </span>
      </li>
      <li @click="gotoPage('/hakkimizda')">
        <span class="navigation-link"> Hakkımızda </span>
      </li>

      <li @click="gotoPage('/projelerimiz')">
        <span class="navigation-link"> Projelerimiz </span>
      </li>
      <li @click="gotoPage('/hizmetlerimiz')">
        <span class="navigation-link"> Hizmetlerimiz </span>
      </li>
      <li @click="gotoPage('/calistigimiz-markalar')">
        <span class="navigation-link"> Çalıştığımız Markalar </span>
      </li>
      <li @click="gotoPage('/kentsel-donusum-talep-formu')">
        <span class="navigation-link"> Kentsel Dönüşüm Talep Formu </span>
      </li>
      <li @click="gotoPage('/iletisim')">
        <span class="navigation-link"> İletişim </span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
      isFixed: false,
      scrollerEl: null,
    };
  },
  mounted() {
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollerEl = document.getElementById("scroller");
    const target = this.scrollerEl || window;
    target.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  },
  beforeDestroy() {
    const target = this.scrollerEl || window;
    target.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.isMenuOpen) {
        this.isFixed = false;
        return;
      }
      const scrollTop = this.scrollerEl
        ? this.scrollerEl.scrollTop
        : window.scrollY;
      this.isFixed = scrollTop > 0;
    },
    gotoPage(anchor) {
      this.isMenuOpen = false;
      setTimeout(() => {
        this.$router.push(anchor);
      }, 200);
    },
    gotoAnchor(anchor) {
      this.isMenuOpen = false;
      setTimeout(() => {
        if (anchor === "#" || !anchor) {
          const target = this.scrollerEl || window;
          if (target === window) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            target.scrollTo({ top: 0, behavior: "smooth" });
          }
          this.$router.push(anchor);
          return;
        }

        const el = document.querySelector(anchor);
        if (!el) {
          this.$router.push(anchor);
          return;
        }

        if (this.scrollerEl) {
          const scrollerRect = this.scrollerEl.getBoundingClientRect();
          const elRect = el.getBoundingClientRect();
          const top =
            this.scrollerEl.scrollTop + (elRect.top - scrollerRect.top);
          this.scrollerEl.scrollTo({ top, behavior: "smooth" });
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        this.$router.push(anchor);
      }, 200);
    },
  },
  watch: {
    isMenuOpen() {
      this.handleScroll();
    },
  },
};
</script>

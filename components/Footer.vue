<template>
  <!-- FOOTER SECTION -->
  <footer
    id="footer"
    class="footer"
  >
    <img
      class="logo"
      src="/images/logo-white.svg"
      alt=""
      @click="gotoPage('/')"
    />
    © 2026 Sil Yapı İnşaat Tüm Hakları Saklıdır.
  </footer>
</template>
<script>
export default {
  name: "Footer",
  methods: {
    gotoPage(page) {
      this.$router.push(page);
    },
  },
};
</script>
<style scoped>
.footer {
  .logo {
    cursor: pointer;
  }
}
</style>

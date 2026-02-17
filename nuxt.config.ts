import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  // ön yüklemeyi devre dışı bırak
  typescript: {
    strict: true,
  },
  // devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    smtp: {
      host: process.env.SMTP_HOST ?? "",
      port: process.env.SMTP_PORT ?? "",
      user: process.env.SMTP_USER ?? "",
      pass: process.env.SMTP_PASS ?? "",
      from: process.env.SMTP_FROM ?? "",
      to: process.env.SMTP_TO ?? "",
    },
    notificationEmail: process.env.NOTIFICATION_EMAIL ?? "",
    inboxBcc: process.env.INBOX_BCC ?? "",
  },
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    preset: "vercel",
  },
  components: true,
  // Diğer yapılandırmalar
  app: {
    head: {
      titleTemplate: "Sil Yapı İnşaat - %s",
      title: "Sil Yapı İnşaat",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Sil Yapı İnşaat" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/images/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/favicon-32x32.png",
        },
      ],
    },
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Modern SCSS compiler kullanılıyor
        },
      },
    },
    vue: { template: { transformAssetUrls } },
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: false, // 👈 console.* silinir
          drop_debugger: true, // 👈 debugger silinir
        },
      },
    },
  },
  i18n: {
    // dil dosyalarında html olduğu için çeviri yapılırken strictMessage: false, escapeHtml: false, yapılır
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
    strategy: "no_prefix", //url de language prefix olmadan çalışır
    defaultLocale: "tr", //default language
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "tr", name: "Turkish", file: "tr.json" },
    ],
  },

  plugins: [{ src: "~/plugins/moment.ts" }],

  css: [
    "~/assets/css/index.scss",
  ],

  alias: {
    "~/assets": "_nuxt/assets",
  },
  compatibilityDate: "2026-01-29",
});

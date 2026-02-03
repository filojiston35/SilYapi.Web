import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
const formActionUrl = process.env.BASE_URL ?? "";
export default defineNuxtConfig({
  // ön yüklemeyi devre dışı bırak
  typescript: {
    strict: true,
  },
  // devtools: { enabled: true },
  ssr: false,
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    preset: "iis",
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
    "nuxt-security",
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
          api: "modern-compiler", // or 'modern'
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
  security: {
    // removeLoggers: false,
    sri: true,
    nonce: true,
    headers: {
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
      },
      xXSSProtection: "1; mode=block",
      contentSecurityPolicy: {
        "script-src": ["'self'", "data:", "'nonce-{{nonce}}'"],
        "script-src-attr": ["'self'", "'unsafe-inline'"],
        "form-action": ["'self'", formActionUrl],
        "img-src": false,
        "worker-src": ["'self'", "data:", "blob:"],
        "report-uri": process.env.BASE_URL + "api/csp-report",
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

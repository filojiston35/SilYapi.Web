import trFile from "../i18n/locales/tr";
import enFile from "../i18n/locales/en";
export default defineI18nConfig(() => ({
  legacy: true,
  locales: [
    {
      code: "tr",
      iso: "tr-TR",
      name: "Turkish",
    },
    {
      code: "en",
      iso: "en-US",
      name: "English",
    },
  ],
  locale: "tr",
  defaultLocale: "tr",
  noPrefixDefaultLocale: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    onlyOnRoot: true, // recommended
    alwaysRedirect: true,
  },
  fallbackLocale: "tr",
  messages: {
    en: enFile,
    tr: trFile,
  },
}));

import { VueReCaptcha } from "vue-recaptcha-v3";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const siteKey = (config.public.recaptcha as { siteKey?: string } | undefined)?.siteKey?.trim();
  if (!siteKey) return;
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey,
    loaderOptions: { useRecaptchaNet: true },
  });
});

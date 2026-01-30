import trFile from "../i18n/locales/tr";
import enFile from "../i18n/locales/en";

export default defineNuxtPlugin(({ nuxtApp }) => {
  const BASE_URL = useRuntimeConfig().public.BASE_URL;
  const { $i18n } = useNuxtApp();
  const fetchExceptionMessages = async () => {
    try {
      const response = await fetch(BASE_URL + "internal/exceptionmessages");
      if (!response.ok) {
        throw new Error("Failed to fetch exception messages");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return {};
    }
  };
  const updateLocaleMessages = async () => {
    const exceptionMessages = await fetchExceptionMessages();
    trFile.toast = { ...trFile.toast, ...exceptionMessages.data };
    enFile.toast = { ...enFile.toast, ...exceptionMessages.data };
    $i18n.setLocaleMessage("tr", trFile);
    $i18n.setLocaleMessage("en", enFile);
  };

  updateLocaleMessages();
});

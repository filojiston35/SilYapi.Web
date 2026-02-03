import trFile from "../i18n/locales/tr.json";
import enFile from "../i18n/locales/en.json";

const { $i18n } = useNuxtApp();
$i18n.setLocaleMessage("tr", trFile);
$i18n.setLocaleMessage("en", enFile);

// export default defineNuxtPlugin(({ nuxtApp }) => {
//   const BASE_URL = useRuntimeConfig().public.BASE_URL;
//   const { $i18n } = useNuxtApp();

//   const updateLocaleMessages = async () => {
//     trFile.toast = { ...trFile.toast, ...exceptionMessages.data };
//     enFile.toast = { ...enFile.toast, ...exceptionMessages.data };
//     $i18n.setLocaleMessage("tr", trFile);
//     $i18n.setLocaleMessage("en", enFile);
//   };

//   updateLocaleMessages();
// });

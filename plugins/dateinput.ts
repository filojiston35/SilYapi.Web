import { VDateInput } from 'vuetify/labs/VDateInput'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("VDateInput", VDateInput);
  })
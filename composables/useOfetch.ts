import { themeConfigStore } from "~/stores/themeConfig";
import type { headerOptions } from "../data/types";
export default function () {
  const BASE_URL = useRuntimeConfig().public.BASE_URL;
  const defaultOptions: headerOptions = {
    headers: {},
  };
  const postOptions: headerOptions = {
    headers: { "Content-Type": "application/json" },
  };
  const getHeaders = (requestType: any) => {
    if (requestType == "POST") {
      return { ...postOptions };
    } else {
      return { ...defaultOptions };
    }
  };
  const loading = ref(false);

  const requestInterceptor = (config: any) => {
    loading.value = true;
    const themeConfig = themeConfigStore();
    themeConfig.increaseRequestCounterActions();
    return config;
  };

  const requestErrorInterceptor = (error: any) => {
    loading.value = false;
    console.log(error);
    // Burada request error interceptor işlemleri yapılabilir.
    throw error;
  };

  const responseInterceptor = (response: any) => {
    loading.value = false;

    const themeConfig = themeConfigStore();
    themeConfig.decreaseRequestCounterActions();
    // Burada response interceptor işlemleri yapılabilir.
    return response;
  };

  const responseErrorInterceptor = (error: any) => {
    loading.value = false;
    //Kullanıcının tokeni bittiyse, tokeni yenile

    if (error?.response?.status == 403) {
      navigateTo("/unauthorized-user");
    } else if (error?.response?.status == 404) {
      navigateTo("/error");
    }
    // Burada response error interceptor işlemleri yapılabilir.
    throw error;
  };
  const ofetchInstance = (method: string, options?: headerOptions) => {
    const instanceOptions = options ? { ...options } : getHeaders(method);
    return $fetch.create({
      baseURL: BASE_URL,
      credentials: "include",
      method: method,
      ...instanceOptions,
      onRequest: requestInterceptor,
      onRequestError: requestErrorInterceptor,
      onResponse: responseInterceptor,
      onResponseError: <any>responseErrorInterceptor,
    });
  };
  return {
    ofetchInstance,
  };
}

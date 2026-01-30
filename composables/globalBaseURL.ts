export default function () {
    const config = useRuntimeConfig();
    const BASE_URL = config.public.BASE_URL;
  
    return {
      BASE_URL
    }
  }
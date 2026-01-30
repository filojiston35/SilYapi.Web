import { themeConfigStore } from "~/stores/themeConfig";

export default function () {
  const { getThemeMode, getSelectedThemePrimaryColor,getSelectedTheme } = themeConfigStore();
  const themeMode = computed(() => getThemeMode);
  const selectedThemePrimaryColor = computed(() => getSelectedThemePrimaryColor);
  const selectedTheme = computed(() => getSelectedTheme);
  return {
    getThemeMode:themeMode,
    getSelectedThemePrimaryColor:selectedThemePrimaryColor,
    getSelectedTheme:selectedTheme,
  };
}

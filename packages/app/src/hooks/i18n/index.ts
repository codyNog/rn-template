import en from "gen/i18n/en-US";
import ja from "gen/i18n/ja-JP";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: en,
  },
  ja: {
    translation: ja,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const useI18n = () => {
  const { t } = i18n;
  return t;
};

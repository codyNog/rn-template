import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      hello: "Hello, {{name}}",
    },
  },
  ja: {
    translation: {
      welcome: "ようこそ",
      hello: "こんにちは、{{name}}さん",
    },
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

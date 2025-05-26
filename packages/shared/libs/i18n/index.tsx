import * as Localization from "expo-localization";
import enUS from "gen/i18n/en-US";
import jaJP from "gen/i18n/ja-JP";
import type { DynamicKey, I18nKey } from "gen/i18n/types";
import i18next from "i18next";
import type { FC, ReactNode } from "react";
import { useEffect } from "react";
import { initReactI18next, useTranslation } from "react-i18next";

// i18nextの初期化
i18next.use(initReactI18next).init({
  resources: {
    "en-US": {
      translation: enUS,
    },
    "ja-JP": {
      translation: jaJP,
    },
  },
  lng: Localization.getLocales()[0]?.languageCode || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

/**
 * i18n翻訳フックを提供します
 * @returns 翻訳関数
 */
export const useI18n = () => {
  const { t } = useTranslation();

  return <K extends I18nKey | DynamicKey>(
    key: K,
    params?: K extends DynamicKey ? Record<string, unknown> : undefined,
  ) => t(key, params);
};

/**
 * i18nプロバイダーコンポーネント
 * 渡されたlocaleでi18nextの言語を設定します
 */
export const I18nProvider = ({
  children,
  locale,
}: { children: ReactNode; locale?: string }) => {
  useEffect(() => {
    if (locale && i18next.language !== locale) {
      i18next.changeLanguage(locale);
    }
  }, [locale]);

  return <>{children}</>;
};

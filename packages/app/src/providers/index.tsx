import FontAwesome from "@expo/vector-icons/FontAwesome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { type ReactNode, useEffect } from "react";
import { useColorScheme } from "react-native";
import { I18nProvider } from "shared/libs/i18n";
import { UIProvider } from "ui/Provider";

type ProvidersProps = {
  children: ReactNode;
};

const client = new QueryClient();

const useProviders = () => {
  const colorScheme = useColorScheme();
  // フォントの読み込みを簡略化
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"), // 一時的にコメントアウト
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"), // 一時的にコメントアウト
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return { loaded, theme: colorScheme || undefined };
};

const KEY_COLOR = "#006493";

export const Providers = ({ children }: ProvidersProps) => {
  const { loaded, theme } = useProviders();

  if (!loaded) return null;

  return (
    <UIProvider theme={theme} keyColor={KEY_COLOR}>
      <I18nProvider>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </I18nProvider>
    </UIProvider>
  );
};

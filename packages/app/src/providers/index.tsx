import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { type ReactNode, useEffect } from "react";
import { useColorScheme } from "react-native";
import { UIProvider } from "ui";

type ProvidersProps = {
  children: ReactNode;
};

const client = new QueryClient();

const useProviders = () => {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"), // フォント追加
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"), // フォント追加
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

  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return { loaded, theme };
};

export const Providers = ({ children }: ProvidersProps) => {
  const { loaded, theme } = useProviders();

  if (!loaded) return null;

  return (
    <ThemeProvider value={theme}>
      <UIProvider>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </UIProvider>
    </ThemeProvider>
  );
};

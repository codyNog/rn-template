import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { SWRConfig } from "swr";
import { Toast, UIProvider } from "ui";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

const useRootLayout = () => {
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

  return { loaded, colorScheme };
};

export default function RootLayout() {
  const { loaded, colorScheme } = useRootLayout();

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <UIProvider>
        <SWRConfig>
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
        </SWRConfig>
      </UIProvider>
    </ThemeProvider>
  );
}

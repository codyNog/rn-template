import { Providers } from "@/providers";
import { SplashScreen, Stack } from "expo-router";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </Providers>
  );
}

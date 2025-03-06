import { Providers } from "@/providers";
import { Slot, SplashScreen } from "expo-router";
import { AppLayout } from "ui/AppLayout";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Providers>
      <AppLayout>
        <Slot />
      </AppLayout>
    </Providers>
  );
}

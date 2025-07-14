import { Slot } from "expo-router";
import { Providers } from "src/providers";
import { AppLayout } from "ui";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  return (
    <Providers>
      <AppLayout>
        <Slot />
      </AppLayout>
    </Providers>
  );
}

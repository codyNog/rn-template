import { Providers } from "@/providers";
import { AppLayout } from "@codynog/rn-ui";
import { Slot } from "expo-router";
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

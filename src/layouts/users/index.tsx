import { Slot, router } from "expo-router";
import { Providers } from "src/providers";
import { AppLayout } from "ui";

export default function UsersLayout() {
  return (
    <Providers>
      <AppLayout
        appbar={{
          title: "Users",
          backAction: { onPress: () => router.back() },
        }}
      >
        <Slot />
      </AppLayout>
    </Providers>
  );
}

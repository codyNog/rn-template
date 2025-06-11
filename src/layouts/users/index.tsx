import { AppLayout } from "@codynog/rn-ui";
import { Slot, router } from "expo-router";
import { Providers } from "src/providers";

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

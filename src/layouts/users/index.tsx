import { Providers } from "@/providers";
import { AppLayout } from "@codynog/rn-ui";
import { router, Slot } from "expo-router";

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

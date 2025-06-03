import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        ...(Platform.OS === "web"
          ? {
              presentation: "containedTransparentModal",
            }
          : { contentStyle: { backgroundColor: "transparent" } }),
      }}
    >
      <Stack.Screen name="/settings" />
      <Stack.Screen name="/settings/notifications" />
    </Stack>
  );
}

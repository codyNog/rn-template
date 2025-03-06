import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function MessagesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        ...(Platform.OS === "web"
          ? {
              presentation: "transparentModal",
            }
          : { contentStyle: { backgroundColor: "transparent" } }),
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}

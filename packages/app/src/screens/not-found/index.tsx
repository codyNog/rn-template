import { Stack } from "expo-router";
import { Text } from "ui";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Text>Not Found</Text>
    </>
  );
}

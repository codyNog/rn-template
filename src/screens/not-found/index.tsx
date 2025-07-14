import { Stack } from "expo-router";
import { Typography } from "ui";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Typography>Not Found</Typography>
    </>
  );
}

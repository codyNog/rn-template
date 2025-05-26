import { Typography } from "@codynog/rn-ui";
import { Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Typography>Not Found</Typography>
    </>
  );
}

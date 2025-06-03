import { Typography } from "@codynog/rn-ui";
import { Stack } from "expo-router";
import { useFooScreen } from "./hooks";

const Screen = () => {
  useFooScreen();
  return (
    <>
      <Stack.Screen
        options={{ title: "カスタムタイトル", headerShown: false }}
      />
      <Typography>Screen</Typography>
    </>
  );
};

export default Screen;

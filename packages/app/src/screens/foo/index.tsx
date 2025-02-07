import { Stack } from "expo-router";
import { Text } from "ui/Text";
import { useFooScreen } from "./hooks";

const Screen = () => {
  useFooScreen();
  return (
    <>
      <Stack.Screen
        options={{ title: "カスタムタイトル", headerShown: false }}
      />
      <Text>Screen</Text>
    </>
  );
};

export default Screen;

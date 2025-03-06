import { Text } from "ui/Text";
import { useSearchScreen } from "./hooks";

const Screen = () => {
  useSearchScreen();
  return <Text>Screen</Text>;
};

export default Screen;

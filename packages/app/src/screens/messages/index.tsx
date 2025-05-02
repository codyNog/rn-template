import { Link } from "expo-router";
import { Text } from "ui/Text";
import { useMessagesScreen } from "./hooks";
import { SafeAreaView } from "ui/SafeAreaView";

const Screen = () => {
  useMessagesScreen();
  return (
    <SafeAreaView>
      <Link href="/messages/1">
        <Text>メッセージ</Text>
      </Link>
    </SafeAreaView>
  );
};

export default Screen;

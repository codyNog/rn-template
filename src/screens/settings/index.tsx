import { Divider, List } from "ui";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import { useSettingsScreen } from "./hooks";

const Screen = () => {
  useSettingsScreen();
  return (
    <SafeAreaView>
      <Link href="/settings/notifications">
        <View>
          <List.Item
            left={() => <List.Icon icon="bell" />}
            right={() => <List.Icon icon="chevron-right" />}
            title="通知"
          />
        </View>
      </Link>
      <Divider />
    </SafeAreaView>
  );
};

export default Screen;

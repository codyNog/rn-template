import { SafeAreaView } from "ui/SafeAreaView";
import { useSettingsScreen } from "./hooks";
import { Link } from "expo-router";
import { ListItem } from "ui/ListItem";
import { Bell, ChevronRight } from "ui/icons";
import { Divider } from "ui/Divider";
import { View } from "ui/View";

const Screen = () => {
  useSettingsScreen();
  return (
    <SafeAreaView>
      <Link href="/settings/notifications">
        <View>
          <ListItem
            leading={<Bell color={"$onSurfaceVariant"} />}
            trailing={<ChevronRight color={"$onSurfaceVariant"} />}
            headline="通知"
          />
        </View>
      </Link>
      <Divider />
    </SafeAreaView>
  );
};

export default Screen;

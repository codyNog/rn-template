import { Link } from "expo-router";
import { useI18n } from "shared/libs/i18n";
import { Text } from "ui/Text";
import { Anchor } from "ui/Anchor";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const t = useI18n();

  return (
    <SafeAreaView>
      <Text>{t("submit")}</Text>
      <Anchor>
        <Link href="/chat">
          <Text>Chat</Text>
        </Link>
      </Anchor>
    </SafeAreaView>
  );
}

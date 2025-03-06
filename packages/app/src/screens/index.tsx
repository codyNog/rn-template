import { Link } from "expo-router";
import { SafeAreaView } from "ui/SafeAreaView";
import { useI18n } from "shared/libs/i18n";
import { Anchor } from "ui/Anchor";
import { Text } from "ui/Text";

export default function HomeScreen() {
  const t = useI18n();

  return (
    <SafeAreaView>
      <Text>{t("submit")}</Text>
      <Anchor>
        <Link href="/messages">
          <Text>Chat</Text>
        </Link>
      </Anchor>
    </SafeAreaView>
  );
}

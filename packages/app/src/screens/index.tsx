import { useI18n } from "shared/libs/i18n";
import { Text } from "ui/Text";
import { AppLayout } from "ui/AppLayout";
import { Home } from "ui/icons";

export default function HomeScreen() {
  const t = useI18n();

  return (
    <AppLayout
      navigationBar={{
        items: [
          {
            label: "home",
            icon: <Home />,
            value: "home",
          },
        ],
      }}
    >
      <Text>{t("submit")}</Text>
    </AppLayout>
  );
}

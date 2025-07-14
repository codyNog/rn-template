import { Link } from "expo-router";
import { useI18n } from "shared/libs/i18n";
import { Typography } from "ui";

export default function HomeScreen() {
  const t = useI18n();

  return (
    <>
      <Typography>{t("common.submit")}</Typography>
      <Link href="/users">users</Link>
    </>
  );
}

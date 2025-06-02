import { Typography } from "@codynog/rn-ui";
import { useI18n } from "shared/libs/i18n";

export default function HomeScreen() {
  const t = useI18n();

  return (
    <>
      <Typography>{t("common.submit")}</Typography>
    </>
  );
}

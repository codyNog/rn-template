import { FooForm } from "@/components/_examples/FooForm";
import type { FooFormValues } from "@/components/_examples/FooForm/types";
import { useI18n } from "@/hooks/i18n";
import { Text, View } from "ui";

export default function HomeScreen() {
  const t = useI18n();
  const action = async (values: FooFormValues) => {
    console.log(values);
  };

  return (
    <View>
      <Text>{t("hello", { name: "foo" })}</Text>
      <FooForm action={action} />
    </View>
  );
}

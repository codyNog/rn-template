import { YStack } from "ui/Stack";
import { useSettingsNotificationsScreen } from "./hooks";
import { SafeAreaView } from "ui/SafeAreaView";
import { Grid } from "ui/Grid";
import { Text } from "ui/Text";
import { TopAppBar } from "ui/TopAppBar";
import { ArrowLeft } from "ui/icons";
import { useRouter } from "expo-router";

const Screen = () => {
  useSettingsNotificationsScreen();
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <SafeAreaView>
      <TopAppBar
        headline="通知"
        leadingIcon={
          <ArrowLeft color={"$onSurfaceVariant"} onPress={handleBack} />
        }
      />
      <YStack paddingTop="$4">
        <Grid.Container>
          <Text>通知</Text>
        </Grid.Container>
      </YStack>
    </SafeAreaView>
  );
};

export default Screen;

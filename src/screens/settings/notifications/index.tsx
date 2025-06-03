import { Appbar, Grid, Stack, Typography } from "@codynog/rn-ui";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native";
import { useSettingsNotificationsScreen } from "./hooks";

const Screen = () => {
  useSettingsNotificationsScreen();
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.Content title="通知" />
        <Appbar.Action icon="arrow-left" onPress={handleBack} />
      </Appbar>
      <Stack>
        <Grid>
          <Typography>通知</Typography>
        </Grid>
      </Stack>
    </SafeAreaView>
  );
};

export default Screen;

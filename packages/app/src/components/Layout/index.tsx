import type { ReactNode } from "react";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, YStack } from "tamagui";
import { Background } from "ui/Background";
import { Grid } from "ui/Grid";

type Props = {
  children: ReactNode;
  navigationBar?: ReactNode;
  topAppBar?: ReactNode;
};

export const Layout = ({ children, navigationBar, topAppBar }: Props) => {
  return (
    <Background>
      {topAppBar && topAppBar}
      <SafeAreaView
        style={{ flex: 1 }}
        edges={["top", "left", "right"]} // bottomを除外
      >
        <Background>{children}</Background>
      </SafeAreaView>
      {navigationBar && navigationBar}
    </Background>
  );
};

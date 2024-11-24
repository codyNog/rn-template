"use client";
import { forwardRef, type ComponentProps } from "react";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import type { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";
import TabBarBackground from "../TabBarBackground";

function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === "ios") {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}

type Screen = ComponentProps<typeof Tabs.Screen>;

type Props = {
  screens: Screen[];
};

// biome-ignore lint:
export const BottomTabs = forwardRef<any, Props>(({ screens }: Props, _ref) => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      {screens.map((screen) => (
        <Tabs.Screen {...screen} key={screen.name} />
      ))}
    </Tabs>
  );
});

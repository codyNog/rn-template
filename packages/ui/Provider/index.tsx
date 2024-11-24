import { createInterFont } from "@tamagui/font-inter";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import type { ReactNode } from "react";
import { TamaguiProvider, createTamagui } from "tamagui";

const headingFont = createInterFont();
const bodyFont = createInterFont();

const tamaguiConfig = createTamagui({
  themes,
  tokens,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
});

export const UIProvider = ({ children }: { children: ReactNode }) => {
  return <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>;
};

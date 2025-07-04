import { ConvexProvider, ConvexReactClient } from "convex/react";
import type { ReactNode } from "react";
import { CONVEX_URL } from "../../../constants/env";

type ConvexAppProviderProps = {
  children: ReactNode;
};

const client = new ConvexReactClient(CONVEX_URL, {
  unsavedChangesWarning: false,
});

export const ConvexAppProvider = ({ children }: ConvexAppProviderProps) => {
  if (!CONVEX_URL) {
    throw new Error(
      "Convex URL is not set. Please set CONVEX_URL environment variable",
    );
  }

  return <ConvexProvider client={client}>{children}</ConvexProvider>;
};

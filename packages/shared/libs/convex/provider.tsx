import { ConvexProvider } from "convex/react";
import type { ReactNode } from "react";
import { CONVEX_URL } from "../../constants/env";
import { createConvexClient } from "./client";

type ConvexAppProviderProps = {
  children: ReactNode;
};

export const ConvexAppProvider = ({ children }: ConvexAppProviderProps) => {
  if (!CONVEX_URL) {
    throw new Error(
      "Convex URL is not set. Please set CONVEX_URL environment variable",
    );
  }

  const client = createConvexClient(CONVEX_URL);

  return <ConvexProvider client={client}>{children}</ConvexProvider>;
};

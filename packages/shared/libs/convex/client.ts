import { ConvexReactClient } from "convex/react";

const createConvexClient = (url: string) => {
  return new ConvexReactClient(url, {
    unsavedChangesWarning: false,
  });
};

export { createConvexClient };

import rootConfig from "../../vitest.config";

export default {
  ...rootConfig,
  test: {
    poolOptions: {
      workers: {
        wrangler: { configPath: "./wrangler.toml" },
      },
    },
  },
};

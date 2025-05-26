import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["**/node_modules/**", "**/dist/**", "**/build/**", "e2e/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "e2e/",
        "**/*.d.ts",
        "**/*.config.{js,ts}",
        "**/dist/**",
        "**/build/**",
      ],
    },
    setupFiles: ["./vitest.setup.ts"],
    testTimeout: 20000,
  },
  resolve: {
    alias: {
      "@app": resolve(__dirname, "./packages/app/src"),
      "@shared": resolve(__dirname, "./packages/shared"),
      "@server": resolve(__dirname, "./packages/server/src"),
      "@ui": resolve(__dirname, "./packages/ui"),
    },
  },
});

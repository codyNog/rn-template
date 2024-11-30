import { defineConfig } from "orval";

export default defineConfig({
  server: {
    input: "./openapi/schemas/openapi.json",
    output: {
      client: "swr",
      httpClient: "fetch",
      target: "./packages/gen/httpClient/server.ts",
      baseUrl: process.env.BASE_URL || "http://localhost:4000",
    },
  },
});

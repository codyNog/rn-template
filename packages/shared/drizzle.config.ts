import type { Config } from "drizzle-kit";

export default {
  schema: "./schemas/index.ts",
  out: "./drizzle",
  driver: "d1-http",
  dialect: "sqlite",
} satisfies Config;

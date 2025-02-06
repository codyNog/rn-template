import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schemas/index.ts",
  out: "./db/migrations",
  driver: "d1-http",
  dialect: "sqlite",
} satisfies Config;

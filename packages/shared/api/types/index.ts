import type { AnyD1Database } from "drizzle-orm/d1";
import type { Context as HonoContext } from "hono";

export type Bindings = {
  DB: AnyD1Database;
};

export type Context = HonoContext<{ Bindings: Bindings }>;
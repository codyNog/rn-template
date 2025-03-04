import type { AnyD1Database } from "drizzle-orm/d1";
import { Hono } from "hono";

type Bindings = {
  DB: AnyD1Database;
};

export const server = new Hono<{ Bindings: Bindings }>();

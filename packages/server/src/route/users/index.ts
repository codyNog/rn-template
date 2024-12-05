import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { insertUserSchema, users } from "../../schemas/users";
import type { AnyD1Database } from "drizzle-orm/d1";

type Bindings = {
  DB: AnyD1Database;
};

export const usersRoute = new Hono<{ Bindings: Bindings }>();

usersRoute
  .get("/users", async (c) => {
    const db = drizzle(c.env.DB);
    const result = await db.select().from(users).all();
    return c.json(result);
  })
  .post("/users", async (c) => {
    const body = await c.req.json();
    const params = insertUserSchema.parse(body);
    const db = drizzle(c.env.DB);
    const result = await db.insert(users).values(params);
    return c.json(result);
  });

import { drizzle, type AnyD1Database } from "drizzle-orm/d1";
import { Hono } from "hono";
import { users } from "../schemas";

type Bindings = {
  DB: AnyD1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

export const route = app
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .get("healthz", (c) => {
    return c.text("OK");
  })
  .get("/users", async (c) => {
    const db = drizzle(c.env.DB);
    const result = await db.select().from(users).all();
    return c.json(result);
  })
  .post("/users", async (c) => {
    const params = await c.req.json<typeof users.$inferSelect>();
    const db = drizzle(c.env.DB);

    const result = await db.insert(users).values({
      name: params.name,
      email: params.email,
      password: params.password,
    });

    return c.json(result);
  });

export type AppType = typeof route;

import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { insertUserSchema, selectUserSchema, users } from "../../../db/schemas";
import { server } from "../../server";

export const usersRouter = server
  .basePath("/users")
  .get("/", zValidator("query", selectUserSchema.partial()), async (c) => {
    const _query = c.req.valid("query");
    const db = drizzle(c.env.DB);
    const result = await db.select().from(users).all();
    return c.json(result);
  })
  .post("/", zValidator("json", insertUserSchema), async (c) => {
    const body = c.req.valid("json");
    const db = drizzle(c.env.DB);
    const result = await db.insert(users).values(body);
    return c.json(result);
  })
  .get("/:id", zValidator("param", selectUserSchema), async (c) => {
    const _param = c.req.valid("param");
    const db = drizzle(c.env.DB);
    const result = await db.select().from(users).where(eq(users.id, _param.id));
    return c.json(result);
  });

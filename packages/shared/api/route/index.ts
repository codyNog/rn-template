import type { AnyD1Database } from "drizzle-orm/d1";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { insertUserSchema, selectUserSchema, users } from "../../db/schemas";
import { zValidator } from "@hono/zod-validator";

type Bindings = {
  DB: AnyD1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

export const route = app
  .use(
    "/*",
    cors({
      // すべてのオリジンを許可
      origin: "*",
      // 許可するHTTPメソッド
      allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      // 許可するヘッダー
      allowHeaders: ["Content-Type", "Authorization"],
      // レスポンスに含めるヘッダー
      exposeHeaders: ["Content-Length"],
      // 認証情報の許可（必要な場合）
      credentials: true,
      // プリフライトリクエストのキャッシュ時間（秒）
      maxAge: 86400,
    }),
  )
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .get("healthz", (c) => {
    return c.text("OK");
  })
  .get("/users", zValidator("param", selectUserSchema), async (c) => {
    // const _param = c.req.valid("param");
    const db = drizzle(c.env.DB);
    const result = await db.select().from(users).all();
    return c.json(result);
  })
  .post("/users", zValidator("json", insertUserSchema), async (c) => {
    const body = c.req.valid("json");
    const db = drizzle(c.env.DB);
    const result = await db.insert(users).values(body);
    return c.json(result);
  });

export type AppType = typeof route;

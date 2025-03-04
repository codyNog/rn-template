import { cors } from "hono/cors";
import { server } from "../server";
import { usersRouter } from "./users";

export const route = server
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
  .get("/healthz", (c) => {
    return c.text("OK");
  })
  .route("/", usersRouter);

export type AppType = typeof route;

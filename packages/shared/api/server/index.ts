import { Hono } from "hono";
import type { Bindings } from "../types";
import { cors } from "hono/cors";

export const server = new Hono<{ Bindings: Bindings }>().use(
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

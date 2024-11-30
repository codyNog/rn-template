import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { postAnalysisRecords } from "./routes/post_analysis_records";
import { cors } from '@elysiajs/cors'
import { postAnalysisRecordsId } from "./routes/post_analysis_records/id";

export const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "API Documentation",
          version: "1.0.0",
          description: "Auto-routed API endpoints with Swagger documentation",
        },
      },
    }),
  )
  .use(cors({
    // フロントエンドのオリジンを許可
    origin: [
      'http://localhost:8081',  // 開発環境のフロントエンド
      // 必要に応じて本番環境のオリジンも追加
      // 'https://your-production-domain.com'
    ],
    // 許可するHTTPメソッド
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    // 許可するヘッダー
    allowedHeaders: ['Content-Type', 'Authorization'],
    // クレデンシャル（Cookieなど）の送信を許可
    credentials: true,
    // プリフライトリクエストのキャッシュ時間（秒）
    maxAge: 600,
  }))
  .use(postAnalysisRecords)
  .use(postAnalysisRecordsId)
  .listen(4000);

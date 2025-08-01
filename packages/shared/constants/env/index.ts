export const IS_TEST = process.env.NODE_ENV === "test";
export const IS_STORYBOOK = !!process.env.STORYBOOK;

const DEFAULT_CONFIG = {
  development: {
    DATABASE_NAME: "mydatabase",
    DATABASE_USER: "myuser",
    DATABASE_PASSWORD: "mypassword",
    DATABASE_HOST: "localhost",
    DATABASE_PORT: 5432,
  },
  test: {
    DATABASE_NAME: "testdb",
    DATABASE_USER: "testuser",
    DATABASE_PASSWORD: "testpass",
    DATABASE_HOST: "localhost",
    DATABASE_PORT: 5433,
  },
};

// 環境に基づいて設定を選択
const config = IS_TEST ? DEFAULT_CONFIG.test : DEFAULT_CONFIG.development;

// 環境変数から値を取得（環境変数が設定されていない場合はデフォルト値を使用）
export const DATABASE_NAME = process.env.DATABASE_NAME || config.DATABASE_NAME;
export const DATABASE_USER = process.env.DATABASE_USER || config.DATABASE_USER;
export const DATABASE_PASSWORD =
  process.env.DATABASE_PASSWORD || config.DATABASE_PASSWORD;
export const DATABASE_HOST = process.env.DATABASE_HOST || config.DATABASE_HOST;
export const DATABASE_PORT =
  Number(process.env.DATABASE_PORT) || config.DATABASE_PORT;

export const DATABASE_URL = `postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

export const SERVER_URL = process.env.SERVER_URL || "http://localhost:8787";

export const WEB_BASE_URL = process.env.WEB_BASE_URL || "http://0.0.0.0:3000";

export const CONVEX_URL = process.env.CONVEX_URL || "http://localhost:3210";

export const SUPABASE_PROJECT_ID = process.env.SUPABASE_PROJECT_ID || "";
export const SUPABASE_URL = SUPABASE_PROJECT_ID
  ? `https://${SUPABASE_PROJECT_ID}.supabase.co`
  : process.env.SUPABASE_URL || "";
export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "";

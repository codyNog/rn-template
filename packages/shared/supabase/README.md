# Supabase Setup

## 型の生成

Supabaseの型定義を生成するには、以下のコマンドを実行します：

```bash
# 環境変数にSUPABASE_PROJECT_IDを設定
export SUPABASE_PROJECT_ID="your-project-id"

# 型を生成
npm run supabase:types
```

## 環境変数

以下の環境変数を設定してください：

- `NEXT_PUBLIC_SUPABASE_URL` または `EXPO_PUBLIC_SUPABASE_URL`: SupabaseプロジェクトのURL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` または `EXPO_PUBLIC_SUPABASE_ANON_KEY`: Supabaseの匿名キー

## 使用方法

```typescript
import { createSupabaseClient } from "shared/supabase/client";

const supabase = createSupabaseClient();
```
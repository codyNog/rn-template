# rn-template

React Native + Expo によるクロスプラットフォームアプリのモノレポ構成プロジェクト

## Installation

```sh
bun install
```

## Project Structure

### Root Application

- **React Native App**: Expo を使用したクロスプラットフォームモバイルアプリ

### Packages

#### `/packages/web`

- **Next.js App**: Webアプリケーション

#### `/packages/shared`

- **Shared**: 共通のコード、型定義、ユーティリティ関数など

#### `/packages/gen`

- **Generated Files**: 自動生成されたファイルの出力先
- このディレクトリのファイルは直接編集しないこと

#### `/packages/ui`

- **UI Components**: 共通UIコンポーネントの置き場所

#### `/packages/server`

- **API Server**: Hono + Cloudflare Functions による API サーバーの実体

import fs from "node:fs";
import pkg from "papaparse";
const { parse } = pkg;
import path from "node:path";
import { fileURLToPath } from "node:url";

// 現在のファイルのディレクトリパスを取得
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// CSVファイルを読み込み、JSONに変換する関数
const convertCsvToJson = (csvFilePath) => {
  // 絶対パスに変換
  const absolutePath = path.resolve(__dirname, csvFilePath);
  const csvContent = fs.readFileSync(absolutePath, "utf8");

  // PapaParseを使用してCSVをパース
  parse(csvContent, {
    header: true,
    skipEmptyLines: true,
    comments: true,
    complete: (result) => {
      // 言語ごとのJSONデータを格納するオブジェクト
      const jsonDataObject = {};

      // CSVの形式は以下を想定:
      // key, ja-JP, en-US, ...
      // hello, こんにちは, hello, ...

      const languages = result.meta.fields;

      // 各言語ごとにオブジェクトを初期化
      for (const lang of languages) {
        jsonDataObject[lang] = {};
      }

      // 各行に対してJSONを生成
      for (const row of result.data) {
        const key = row.key; // keyカラムの値を取得

        if (!key) continue; // キーが空の場合はスキップ

        // 各言語の翻訳を設定
        for (const lang of languages) {
          jsonDataObject[lang][key] = row[lang];
        }
      }

      // 各言語に対応するJSONをファイルに書き込む
      for (const lang of languages) {
        const outputDir = path.resolve(process.cwd(), "./packages/gen/i18n");

        // ディレクトリが存在しない場合は作成
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        const jsonFilePath = path.join(outputDir, `${lang}.ts`);

        fs.writeFileSync(
          jsonFilePath,
          `export default ${JSON.stringify(jsonDataObject[lang], null, 2)} as const;`,
        );
        console.log(`変換完了。JSONファイルが作成されました: ${jsonFilePath}`);
      }
    },
    error: (error) => {
      console.error("CSVのパースエラー:", error.message);
    },
  });
};

// 関数を呼び出し
convertCsvToJson("index.csv");

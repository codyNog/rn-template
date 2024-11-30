import fs from "node:fs";
import { parse } from "papaparse";
import csvFile from "./index.csv";

// CSVファイルを読み込み、JSONに変換する関数
const convertCsvToJson = (csvFilePath) => {
  const csvFile = fs.readFileSync(csvFilePath, "utf8");

  // PapaParseを使用してCSVをパース
  parse(csvFile, {
    header: true,
    skipEmptyLines: true,
    comments: true,
    complete: (result) => {
      // 言語ごとのJSONデータを格納するオブジェクト
      const jsonDataObject = {};

      // CSVの形式は以下を想定:
      // key, ja, en, ...
      // hello, こんにちは, hello, ...

      const languages = result.meta.fields.filter((field) => field !== "key");

      // 各言語ごとにオブジェクトを初期化
      for (const lang of languages) {
        jsonDataObject[lang] = {};
      }

      // 各行に対してJSONを生成
      for (const row of result.data) {
        const key = row.key; // keyカラムの値を取得

        // 各言語の翻訳を設定
        for (const lang of languages) {
          jsonDataObject[lang][key] = row[lang];
        }
      }

      // 各言語に対応するJSONをファイルに書き込む
      for (const lang of languages) {
        const jsonFilePath = `./packages/gen/i18n/${lang}.ts`;
        fs.writeFileSync(
          jsonFilePath,
          `export default ${JSON.stringify(jsonDataObject[lang], null, 2)} as const;`,
        );
        console.log(
          `Conversion complete. JSON file created at ${jsonFilePath}`,
        );
      }
    },
    error: (error) => {
      console.error("Error parsing CSV:", error.message);
    },
  });
};

// 関数を呼び出し
convertCsvToJson(csvFile);

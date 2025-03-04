// biome-ignore lint/style/useImportType: <explanation>
import key from "../key";

// Add keys for passing dynamic values
export type DynamicKey = "";

export type I18nKey = Exclude<keyof typeof key, DynamicKey>;

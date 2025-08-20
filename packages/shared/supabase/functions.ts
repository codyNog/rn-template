import { createSupabaseClient } from "./client";
import type { FunctionsResponse } from "@supabase/supabase-js";

/**
 * Supabase Edge Functionsを呼び出すユーティリティ
 */
export const supabaseFunctions = {
  /**
   * Edge Functionを呼び出す
   * @param functionName 関数名（例: "hello-world"）
   * @param body リクエストボディ
   * @param options オプション（ヘッダーなど）
   */
  async invoke<T = any>(
    functionName: string,
    body?: Record<string, any>,
    options?: {
      headers?: Record<string, string>;
    }
  ): Promise<FunctionsResponse<T>> {
    const supabase = createSupabaseClient();
    
    return await supabase.functions.invoke<T>(functionName, {
      body,
      headers: options?.headers,
    });
  },

  /**
   * 型安全なEdge Function呼び出し例
   */
  helloWorld: async (name?: string) => {
    type HelloWorldResponse = {
      message: string;
      user: string;
    };
    
    return supabaseFunctions.invoke<HelloWorldResponse>("hello-world", {
      name,
    });
  },
};
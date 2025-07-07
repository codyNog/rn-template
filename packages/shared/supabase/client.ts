import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./types/database.types";
import { supabaseConfig } from "./config";

export const createSupabaseClient = () => {
  return createBrowserClient<Database>(
    supabaseConfig.url,
    supabaseConfig.anonKey
  );
};

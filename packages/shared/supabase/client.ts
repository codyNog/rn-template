import { createBrowserClient } from "@supabase/ssr";
import { supabaseConfig } from "./config";
import type { Database } from "./types/database.types";

export const createSupabaseClient = () => {
  return createBrowserClient<Database>(
    supabaseConfig.url,
    supabaseConfig.anonKey,
  );
};

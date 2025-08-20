import { createClient } from "@supabase/supabase-js"
import type { Database } from "../../packages/shared/supabase/types/database.types"

export const createSupabaseClient = (
  authHeader?: string
) => {
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!
  
  const options = authHeader
    ? {
        global: {
          headers: { Authorization: authHeader }
        }
      }
    : {}

  return createClient<Database>(
    supabaseUrl,
    supabaseAnonKey,
    options
  )
}

export const createServiceRoleClient = () => {
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  
  return createClient<Database>(
    supabaseUrl,
    supabaseServiceRoleKey
  )
}
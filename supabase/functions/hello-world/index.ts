import { serve } from "std/http/server.ts"
import { createSupabaseClient } from "../_shared/supabase.ts"

serve(async (req) => {
  const authHeader = req.headers.get('Authorization')
  const supabase = createSupabaseClient(authHeader ?? undefined)
  
  const { name } = await req.json()
  
  // Supabaseクライアントを使用した例
  const { data: userData, error } = await supabase.auth.getUser()
  
  const data = {
    message: `Hello ${name || 'World'}!`,
    user: userData?.user?.email || 'Anonymous'
  }

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})
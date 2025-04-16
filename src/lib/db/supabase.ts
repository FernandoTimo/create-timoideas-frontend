// 📦 Supabase client para Next.js 15
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.warn("⚠️ Supabase no está correctamente configurado. Revisa tu archivo .env.local")
}

export const supabase = createClient(supabaseUrl || "", supabaseKey || "")

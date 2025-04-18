/**
 * @module supabaseClient
 * Cliente Supabase para Client Components usando @supabase/ssr.
 */

import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    "⚠️ Supabase no está configurado correctamente. Revisa tu archivo .env.local"
  );
}

/**
 * Cliente Supabase reutilizable en el navegador.
 */
export const supabase: SupabaseClient = createBrowserClient(
  supabaseUrl,
  supabaseKey
);

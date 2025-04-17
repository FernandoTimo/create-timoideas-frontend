// src/features/theme/utils/getDefaultTheme.ts
import { cookies } from "next/headers";

/**
 * getDefaultTheme
 * Lee la cookie 'theme' en SSR y normaliza a 'light' | 'dark'
 */
export async function getTheme(): Promise<"light" | "dark"> {
  const store = await cookies();
  const value = store.get("theme")?.value;
  return value === "light" ? "light" : "dark";
}

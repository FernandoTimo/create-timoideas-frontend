"use server";
// 📁 src/features/theme/components/ThemeToggleWrapper.tsx
import { getTheme } from "../utils/getTheme";
import { ThemeToggle } from "./ThemeToggle";

/**
 * ThemeToggleWrapper
 * - Server Component que detecta el tema desde getTheme
 * - Inyecta `initialTheme` a ThemeToggle client
 */
export default async function ThemeToggleWrapper() {
  return <ThemeToggle initialTheme={await getTheme()} />;
}

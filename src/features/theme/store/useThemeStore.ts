// 📁 src/features/theme/store/useThemeStore.ts
import { create } from "zustand";
import { COOKIE_NAME, COOKIE_MAX_AGE } from "../constants";
import type { Theme } from "../types";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * useThemeStore
 * - Inicializa leyendo la clase actual de <html>
 * - toggleTheme actualiza clase, cookie y estado
 */
export const useThemeStore = create<ThemeState>((set) => {
  // Valor inicial: lo que ya puso el SSR en <html>
  const initial =
    typeof window !== "undefined" &&
    document.documentElement.className === "dark"
      ? "dark"
      : "light";

  return {
    theme: initial,
    toggleTheme: () =>
      set((state) => {
        const next: Theme = state.theme === "light" ? "dark" : "light";
        // 1) clase en <html> para Tailwind/class-based dark mode
        document.documentElement.className = next;
        // 2) persistencia en cookie
        document.cookie = `${COOKIE_NAME}=${next}; path=/; max-age=${COOKIE_MAX_AGE}`;
        return { theme: next };
      }),
  };
});

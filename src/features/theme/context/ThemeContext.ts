"use client";
/**
 * 📦 ThemeContext
 * Creación y configuración del contexto de theme.
 */

import { createContext } from "react";
import type { ThemeContextValue } from "../types";

/**
 * ThemeContext
 * - Provee `theme` y `toggleTheme`
 * - Contiene valores dummy iniciales para TS y evita nulls
 */
export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

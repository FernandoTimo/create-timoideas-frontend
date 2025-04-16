/**
 * 📦 useTheme hook
 * Hook para consumir el ThemeContext desde cualquier componente.
 */

import { useContext } from "react";
import type { ThemeContextValue } from "../types";
import { ThemeContext } from "../context/ThemeContext";

/**
 * useTheme
 * @returns {ThemeContextValue} El tema actual y la función para alternarlo.
 */
export const useTheme = (): ThemeContextValue => {
  return useContext(ThemeContext);
};

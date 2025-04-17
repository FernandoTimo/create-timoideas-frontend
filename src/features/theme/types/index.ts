/**
 * 📦 theme-types
 * Definiciones de tipos para la feature de theme.
 */

/**
 * Theme
 * Valores posibles para el tema de la app.
 */

export type Theme = "light" | "dark";

/**
 * ThemeState
 * Estructura del estado para manejar el tema (Zustand store).
 */
export interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

/** ThemeToggleProps
 * Props que recibe el ThemeToggle.
 * */

export interface ThemeToggleProps {
  initialTheme: Theme;
}

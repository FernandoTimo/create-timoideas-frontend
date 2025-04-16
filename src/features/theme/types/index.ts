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
 * ThemeContextValue
 * Estructura del contexto que provee el tema actual y la función para alternarlo.
 */
export interface ThemeContextValue {
  /** Tema activo */
  theme: Theme;
  /** Función que invierte el tema */
  toggleTheme: () => void;
}

/**
 * ThemeProviderProps
 * Props que recibe el ThemeProvider.
 */
export interface ThemeProviderProps {
  /** Tema inicial (viene de SSR vía cookie) */
  defaultTheme: Theme;
  /** Contenido de la app */
  children: React.ReactNode;
}

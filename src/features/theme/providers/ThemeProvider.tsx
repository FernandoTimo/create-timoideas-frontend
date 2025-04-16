"use client";
/**
 * 📦 ThemeProvider
 * Envuelve la app, maneja el estado del tema y lo persiste en cookie.
 */

import React, { useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { ThemeProviderProps } from "../types";
import { COOKIE_NAME, COOKIE_MAX_AGE } from "../constants";

/**
 * ThemeProviderProps:
 * - defaultTheme: tema inicial (SSR vía cookie)
 * - children: contenido de la app
 */
export const ThemeProvider = ({
  defaultTheme,
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    // Aplica la clase al <html> para Tailwind darkMode:'class'
    document.documentElement.className = theme;
    // Persiste la selección en cookie
    document.cookie = `${COOKIE_NAME}=${theme};path=/;max-age=${COOKIE_MAX_AGE}`;
  }, [theme]);

  /** Alterna entre 'light' y 'dark' */
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

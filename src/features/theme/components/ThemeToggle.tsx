"use client";
/**
 * 📦 ThemeToggle
 * Botón que muestra 🌞 o 🌜 según el tema y permite alternarlo.
 */

import React from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Alternar tema claro/oscuro"
      onClick={toggleTheme}
      className="
        p-2 
        rounded-full 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2
      "
    >
      {theme === "light" ? "🌞" : "🌜"}
    </button>
  );
};

// 📁 src/features/theme/components/ThemeToggle.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";

/**
 * ThemeToggle
 * — Durante SSR renderiza siempre 🌞 (light)
 * — Tras el montaje (mount) actualiza al icono real según el estado
 */
export const ThemeToggle: React.FC = () => {
  const theme = useThemeStore((s) => s.theme);
  const toggle = useThemeStore((s) => s.toggleTheme);

  // Estado para saber si ya estamos en cliente
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Icono fijo que SSR y React mostrarán sin choque
  const SSR_ICON = "🌞";

  if (!mounted) {
    return (
      <button
        aria-label="Alternar tema claro/oscuro"
        className="
          p-2
          rounded-full
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
        "
      >
        {SSR_ICON}
      </button>
    );
  }

  return (
    <button
      aria-label="Alternar tema claro/oscuro"
      onClick={toggle}
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

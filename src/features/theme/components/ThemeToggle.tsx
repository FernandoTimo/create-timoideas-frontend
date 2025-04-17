"use client";
import { useEffect, useState } from "react";
import { useThemeStore } from "../store/useThemeStore";
import type { ThemeToggleProps } from "../types";

export const ThemeToggle = ({ initialTheme }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.className = initialTheme;
    setMounted(true);
  }, [initialTheme]);

  const icon = (mounted ? theme : initialTheme) === "dark" ? "🌜" : "🌞";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema claro/oscuro"
      className="p-2 rounded-full transition-opacity duration-300"
    >
      {icon}
    </button>
  );
};

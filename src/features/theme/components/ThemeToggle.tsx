"use client";
import { useEffect, useState } from "react";
import { useThemeStore } from "../store/useThemeStore";

import type { ThemeToggleProps } from "../types";
import { Switch } from "@heroui/react";
import { MoonIcon, SunIcon } from "../assets";

export const ThemeToggle = ({ initialTheme }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.className = initialTheme;
    setMounted(true);
  }, [initialTheme]);

  return (
    <Switch
      defaultSelected={(mounted ? theme : initialTheme) === "dark"}
      color="default"
      endContent={<MoonIcon />}
      size="lg"
      startContent={<SunIcon />}
      onValueChange={toggleTheme}
      thumbIcon={({ isSelected, className }) =>
        !isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    ></Switch>
  );
};

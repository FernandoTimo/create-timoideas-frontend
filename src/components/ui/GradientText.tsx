/**
 * @module GradientText
 * @description Texto con gradiente (estático o animado) personalizable
 */

import type { CSSProperties } from "react";
import { cn } from "@/lib/utils/cn";
import { GradientTextProps } from "@/features/theme/types";

/**
 * 📦 GradientText
 * — Texto con gradiente dinámico (animado o estático)
 */
export const GradientText = ({
  text,
  colors = ["#ec4899", "#8b5cf6"],
  direction = "to top",
  speed = 4,
  size = "2rem",
  weight = "800",
  animate = "disabled",
  inactiveColor = "#fff",
  className,
  ...props
}: GradientTextProps) => {
  const gradientBase: CSSProperties = {
    backgroundImage: `linear-gradient(${direction}, ${colors.join(", ")})`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    fontSize: size,
    fontWeight: weight as CSSProperties["fontWeight"],
  };

  const gradientStyle: CSSProperties =
    animate === "onHover"
      ? {
          ...gradientBase,
          backgroundSize: "400% 400%",
          animation: `animatedGradient ${speed}s ease infinite`,
        }
      : gradientBase;

  return (
    <>
      {animate !== "disabled" && (
        <style>
          {`
            @keyframes animatedGradient {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}
        </style>
      )}
      <span
        {...props}
        style={gradientStyle}
        className={cn(
          "inline-block transition-all duration-300 group-hover:text-fill-transparent",
          `text-[${inactiveColor}]`,
          className
        )}
      >
        {text}
      </span>
    </>
  );
};

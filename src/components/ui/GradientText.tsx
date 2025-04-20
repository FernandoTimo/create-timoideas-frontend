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
  direction = "270deg",
  speed = 4,
  size = "2rem",
  weight = "800",
  animated = false,
  className,
  ...props
}: GradientTextProps) => {
  const gradientBase: CSSProperties = {
    backgroundImage: `linear-gradient(${direction}, ${colors.join(", ")})`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    fontSize: size,
    fontWeight: weight as CSSProperties["fontWeight"],
  };

  const gradientStyle: CSSProperties = animated
    ? {
        ...gradientBase,
        backgroundSize: "400% 400%",
        animation: `animatedGradient ${speed}s ease infinite`,
      }
    : gradientBase;

  return (
    <>
      {animated && (
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
        className={cn("inline-block", className)}
        style={gradientStyle}
      >
        {text}
      </span>
    </>
  );
};

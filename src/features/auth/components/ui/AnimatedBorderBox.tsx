"use client";

import React from "react";

type BorderRadiusOption =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full"
  | string;

type AnimateOption = "always" | "onHover" | "disabled";

const options = [
  "none",
  "sm",
  "md",
  "lg",
  "xl",
  "1xl",
  "2xl",
  "3xl",
  "full",
] as const;

const valuesMap: Record<(typeof options)[number], string> = {
  none: "0",
  sm: "2px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  "1xl": "14px",
  "2xl": "16px",
  "3xl": "24px",
  full: "9999px",
};
export function getBorderRadiusSize(value: BorderRadiusOption): string {
  // devuelve el tamaño de la borde en px en función del valor de `rounded` usando el mapa de valores
  if (options.includes(value as (typeof options)[number])) {
    const index = options.indexOf(value as (typeof options)[number]);
    return valuesMap[options[index]];
  }
  return valuesMap["none"];
}
export function getSmallerBorderRadius(value: BorderRadiusOption): string {
  // Mapa equivalente de valores reales en Tailwind

  if (options.includes(value as (typeof options)[number])) {
    const index = options.indexOf(value as (typeof options)[number]);
    const previous = index > 0 ? options[index - 1] : "none";
    return valuesMap[previous];
  }

  const index = options.indexOf(value as (typeof options)[number]);

  if (index <= 0) {
    // Ya está en el menor valor posible
    return valuesMap["none"];
  }

  const previousKey = options[index - 1];
  return valuesMap[previousKey];
}

export const AnimatedBorderBox = ({
  children,
  colores = ["#f87171", "#facc15", "#4ade80", "#38bdf8", "#a78bfa"],
  animate = "always",
  rounded = "xl",
  className = "",
  speed = 6,
  thickness = 2,
  inactiveBorder = "#444",
}: {
  children: React.ReactNode;
  colores?: string[];
  animate?: AnimateOption;
  rounded?: BorderRadiusOption;
  className?: string;
  speed?: number;
  thickness?: number;
  inactiveBorder?: string;
}) => {
  const animationId = React.useId();
  const gradient = colores.join(", ");
  return (
    <div
      className={`relative inline-block group overflow-hidden  ${className}`}
      style={{
        padding: `${thickness}px`,
        borderRadius: getBorderRadiusSize(rounded),
      }}
      data-animate={animate}
    >
      {/* Capa animada (activada por hover o siempre) */}
      <div
        className={`absolute inset-0 z-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        data-layer="anim"
        style={{
          background: `linear-gradient(270deg, ${gradient})`,
          backgroundSize: "800% 800%",
          pointerEvents: "none",
          animation: `border-spin-${animationId} ${speed}s ease infinite`, // 👈 SIEMPRE ANIMADO
          transition: "opacity 0.4s ease",
        }}
        aria-hidden="true"
      />
      {/* Capa base inactiva (inactiveBorder) */}
      <div
        className={`absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300`}
        style={{
          background: inactiveBorder,
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div
        className={`relative z-20 bg-[var(--color-surface)] overflow-hidden`}
        style={{
          borderRadius: getSmallerBorderRadius(rounded),
        }}
      >
        {children}
      </div>

      {/* Estilos para animación */}
      <style jsx>{`
        @keyframes border-spin-${animationId} {
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

        [data-animate="onHover"]:hover [data-layer="anim"] {
          opacity: 1;
        }

        [data-animate="disabled"] [data-layer="anim"] {
          display: none;
        }
      `}</style>
    </div>
  );
};

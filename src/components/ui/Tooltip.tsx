// 📁 src/components/ui/Tooltip.tsx

"use client";

import { ReactNode } from "react";
import { Tooltip as TT, type TooltipProps } from "@heroui/react";

/**
 * 📦 Tooltip
 * — Wrapper tipado para mostrar tooltips personalizados en la app.
 */
type Props = {
  /** Elemento que activará el tooltip al interactuar */
  children: ReactNode;
  /** Texto que se mostrará dentro del tooltip */
  text: string;
  /** Posición del tooltip respecto al elemento */
  placement?: TooltipProps["placement"];
  /** Offset del tooltip respecto al elemento */
  offset?: TooltipProps["offset"];
};

export function Tooltip({
  children,
  text,
  placement = "top",
  offset = 0,
}: Props) {
  return (
    <TT
      content={
        <span className="text-[var(--color-text-secondary)] text-[10px]">
          {text}
        </span>
      }
      placement={placement}
      offset={offset}
      closeDelay={0}
      classNames={{
        base: ["before:bg-[var(--color-text-primary)]"],
        content: ["bg-[var(--color-text-primary)]"],
      }}
      showArrow
    >
      {children}
    </TT>
  );
}

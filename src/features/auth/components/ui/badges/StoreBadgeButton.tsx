// 📁 src/components/ui/StoreBadgeButton.tsx

import { GradientText } from "@/components/ui";
import clsx from "clsx";
import { AnimatedBorderBox } from "../AnimatedBorderBox";
import { detectCase } from "@/lib/utils/detectCase";
import { adjustFontSize } from "@/lib/utils/adjustFontSize";

export type Size = "sm" | "md" | "lg";

export type StoreBadgeButtonProps = {
  /**
   * Icono SVG del store (Apple, Google, etc.)
   */
  icon: React.ReactNode;
  /**
   * Texto superior ("Disponible en" o "Consíguelo en el")
   */
  label: string;
  /**
   * Nombre del store ("Google Play", "App Store", etc.)
   */
  storeName: string;
  /**
   * Enlace externo del botón
   */
  href: string;
  /**
   * Tamaño del botón
   * @default "md"
   */
  size?: Size;
};

/**
 * 📦 StoreBadgeButton
 * Componente genérico para botones de tiendas móviles. Reutilizable.
 */
export function StoreBadgeButton({
  icon,
  label,
  storeName,
  href,
  size = "md",
}: StoreBadgeButtonProps) {
  const sizeStyles = {
    sm: {
      icon: "w-[18px] h-[18px]",
      text: "8px",
      title: "text-[14px]",
      padding: "px-3 py-1.5 w-36",
    },
    md: {
      icon: "w-6 h-6",
      text: "10px",
      title: "text-[20px]",
      padding: "px-4 py-2 w-48",
    },
    lg: {
      icon: "w-8 h-8",
      text: "12px",
      title: "text-[26px]",
      padding: "px-6 py-3 w-60",
    },
  };

  const current = sizeStyles[size];
  const colores = [
    "var(--color-accent)",
    "var(--color-border)",
    "var(--color-border)",
    "var(--color-accent)",
    "var(--color-border)",
    "var(--color-border)",
    "var(--color-accent)",
  ];
  return (
    <AnimatedBorderBox
      key={`store-button-${name}`}
      colores={colores}
      animate="onHover"
      rounded="2xl"
      thickness={1}
      speed={3}
      inactiveBorder="var(--color-border)"
      className="transition-shadow duration-100 hover:shadow-[0_0_40px_var(--color-shadow)] shadow-[0_0_0px_transparent]"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "flex items-center justify-center text-white transition-all duration-100 group",
          current.padding
        )}
        aria-label={`${label} ${storeName}`}
      >
        <div className="flex gap-2 items-center justify-center">
          <span
            className={clsx(
              current.icon,
              "transition-transform duration-100 transform-gpu group-hover:scale-[1.05] will-change-transform center"
            )}
          >
            {icon}
          </span>
          <div className="leading-tight text-left">
            <GradientText
              text={label}
              colors={[
                "var(--color-text-primary)",
                "var(--color-text-secondary)",
              ]}
              size={adjustFontSize(current.text, detectCase(label))}
              weight="normal"
              speed={1}
              animate="onHover"
              inactiveColor="var(--color-text-secondary)"
              className="transition-transform duration-100 transform-gpu group-hover:scale-[1.02] will-change-transform select-none"
            />
            <span
              className={clsx(
                current.title,
                "font-semibold -mt-1 block transition-transform duration-100 transform-gpu group-hover:scale-[1.02] will-change-transform text-[var(--color-text-primary)] select-none"
              )}
            >
              {storeName}
            </span>
          </div>
        </div>
      </a>
    </AnimatedBorderBox>
  );
}

import { HTMLAttributes } from "react";

/**
 * Props del componente GradientText
 */
export interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;

  /**
   * Array de colores del gradiente (mínimo dos)
   * @example ["#facc15", "#f97316"]
   */
  colors?: string[];

  /**
   * Dirección del gradiente (por defecto: 270deg)
   */
  direction?: string;

  /**
   * Velocidad de animación (solo si `animated` está activado)
   * @example 4
   */
  speed?: number;

  /**
   * Tamaño del texto (px, rem, clamp, etc.)
   * @example "2rem"
   */
  size?: string;

  /**
   * Peso de la fuente (ej. "bold", "900")
   */
  weight?: string;

  /**
   * Activar animación del gradiente
   */
  animated?: boolean;

  className?: string;
}

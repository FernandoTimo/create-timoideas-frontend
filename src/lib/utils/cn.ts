/**
 * Combina clases condicionales, similar a clsx o classnames.
 * Ideal para aplicar estilos de forma dinámica.
 *
 * @example
 * cn("btn", isActive && "bg-blue-500")
 */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Tipado de proveedor OAuth basado en la constante de providers.
 */

export interface PasswordSecurityLevel {
  label: string; // Nombre del nivel (ej. "Baja", "Excelente")
  emoji: string; // Emoji representativo del nivel
  level: number; // Número entre 0 y 5
  color: string; // Clase de color para el nivel
}

export interface PasswordValidator {
  label: string; // Nombre del nivel (ej. "Baja", "Excelente")
  test: (value: string) => boolean; // Función de validación
}

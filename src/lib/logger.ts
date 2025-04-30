/**
 * 📦 logger
 * Utilidad de logging centralizada para controlar los mensajes que se muestran en consola.
 *
 * Beneficios:
 * - Solo muestra logs útiles en desarrollo.
 * - Estándar en toda la app (no más `console.log` suelto).
 * - Extensible para integraciones futuras (Sentry, Datadog, etc).
 *
 * 🚀 Cómo usar:
 * import { log } from "@/lib/logger";
 * log.info("Mensaje"); log.error("Error"); log.debug("Solo dev");s
 */

const isDev = process.env.NODE_ENV === "development";

export const log = {
  /**
   * ℹ️ Mensajes informativos que deberían verse en desarrollo.
   * Ej: flujos normales, checkpoints de lógica.
   */
  info: (...args: unknown[]) => {
    if (isDev) {
      console.log("ℹ️ [INFO]:", ...args);
    }
  },

  /**
   * ❌ Errores que deben verse siempre (también en producción).
   * Ej: errores no capturados, fallas críticas.
   */
  error: (...args: unknown[]) => {
    console.error("❌ [ERROR]:", ...args);
  },

  /**
   * 🐞 Logs muy detallados, solo útiles mientras desarrollas.
   * Ej: inspección de payloads, estados internos.
   */
  debug: (...args: unknown[]) => {
    if (isDev) {
      console.debug("🐞 [DEBUG]:", ...args);
    }
  },
};

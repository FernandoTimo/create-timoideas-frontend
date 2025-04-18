"use client";

import { PasswordInput } from "@/features/auth/components/ui/PasswordInput";

interface Props {
  mode: "login" | "register";
}

/**
 * Formulario de email y contraseña adaptado al theme.
 */
export const AuthEmailForm = ({ mode }: Props) => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="text-sm font-medium block mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          placeholder="tucorreo@ejemplo.com"
          className="w-full px-4 py-2 rounded-md bg-[var(--color-muted)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]"
        />
      </div>

      <div>
        <label htmlFor="password" className="text-sm font-medium block mb-1">
          Contraseña
        </label>
        <PasswordInput />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 rounded-md bg-[var(--color-accent)] text-white hover:opacity-90 transition"
      >
        {mode === "login" ? "Iniciar sesión" : "Registrarse"}
      </button>
    </form>
  );
};

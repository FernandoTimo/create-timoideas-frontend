"use client";

import { PasswordInput } from "@/features/auth/components/ui/PasswordInput";
import { useState } from "react";

export const PasswordResetForm = () => {
  const [method, setMethod] = useState<"phone" | "email">("phone");

  return (
    <form className="space-y-4">
      {/* Título */}
      <h2 className="text-xl font-bold text-center">
        Restablece la contraseña
      </h2>

      {/* Inputs específicos */}
      {method === "phone" ? (
        <>
          {/* Teléfono */}
          <div className="flex gap-2">
            <select
              className="w-24 px-2 py-2 rounded-md bg-[var(--color-muted)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)]"
              defaultValue="+51"
            >
              <option value="+51">PE +51</option>
              <option value="+1">US +1</option>
              <option value="+34">ES +34</option>
            </select>
            <input
              type="tel"
              placeholder="Número de teléfono"
              className="flex-1 px-4 py-2 rounded-md bg-[var(--color-muted)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]"
            />
          </div>
        </>
      ) : (
        <>
          {/* Correo */}
          <input
            type="email"
            placeholder="Dirección de correo electrónico"
            className="w-full px-4 py-2 rounded-md bg-[var(--color-muted)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]"
          />
        </>
      )}

      {/* Código + botón */}
      <div className="flex gap-2">
        <input
          type="text"
          name="otp"
          inputMode="numeric"
          autoComplete="off"
          placeholder="Introduce el código de 6 dígitos"
          className="flex-1 px-4 py-2 rounded-md bg-[var(--color-muted)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]"
        />

        <button
          type="button"
          className="px-3 text-sm rounded-md bg-[var(--color-accent)] text-white hover:opacity-90"
        >
          Enviar código
        </button>
      </div>

      {/* Nueva contraseña */}
      <PasswordInput placeholder="Nueva contraseña" />
      <div className="flex justify-center items-center text-xs text-[var(--color-text-secondary)] font-medium">
        <button
          type="button"
          className="hover:underline"
          onClick={() => setMethod(method === "phone" ? "email" : "phone")}
        >
          {method === "phone"
            ? "Restablecer con correo electrónico"
            : "Restablecer acceso con número de teléfono"}
        </button>
      </div>
      {/* Confirmar */}

      <button
        type="submit"
        className="w-full py-2 rounded-md bg-[var(--color-accent)] text-white text-sm font-medium hover:opacity-90"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

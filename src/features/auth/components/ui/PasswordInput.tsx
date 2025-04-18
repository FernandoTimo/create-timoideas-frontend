"use client";

import { useState } from "react";
import PasswodSecurity from "../ux/PasswordSecurity";
import PasswordValidators from "../ux/PasswordValidators";
import { EyeIcon, EyeOffIcon } from "@/assets/icons";

interface Props {
  placeholder?: string;
  name?: string;
  autoComplete?: string; // Permite sobreescribir si es necesario
}

/**
 * PasswordInput
 * Input de contraseña con ícono de mostrar/ocultar.
 * Forza autoComplete="off" por defecto, salvo que se pase explícitamente.
 */
export const PasswordInput = ({
  placeholder = "Contraseña",
  name = "new-password",
  autoComplete = "new-password", // valor por defecto
}: Props) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((prev) => !prev);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          name={"new-password"} // evita current-password
          id="password-field"
          autoComplete={"new-password"} // evita autofill
          placeholder={placeholder}
          value={value}
          className="w-full px-4 py-2 pr-10 rounded-md bg-[var(--color-muted)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]"
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <button
          type="button"
          onClick={toggle}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-[var(--color-text-secondary)]"
        >
          {show ? (
            <EyeOffIcon className="w-5 h-5" />
          ) : (
            <EyeIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      {(focused || value.length > 0) && (
        <div className="flex gap-4 mt-2 justify-between">
          <PasswordValidators value={value} />
          <PasswodSecurity value={value} />
        </div>
      )}
    </div>
  );
};

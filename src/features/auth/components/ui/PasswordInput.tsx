"use client";

import { cn } from "@/lib/utils/cn";
import { useState } from "react";
import PasswodSecurity from "../ux/PasswordSecurity";
import PasswordValidators from "./PasswordValidators";

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
          {!show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3l18 18M10.477 10.477a3 3 0 004.243 4.243M9.88 15.536A6.964 6.964 0 0112 16c4.478 0 8.268-2.943 9.542-7a9.973 9.973 0 00-4.304-5.246M6.423 6.423A9.964 9.964 0 002.458 12a9.964 9.964 0 003.122 4.358"
              />
            </svg>
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

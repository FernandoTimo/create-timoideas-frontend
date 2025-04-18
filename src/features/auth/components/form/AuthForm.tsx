"use client";

import { useState } from "react";
import { AuthEmailForm } from "./AuthEmailForm";
import { AuthPhoneForm } from "./AuthPhoneForm";
import { StepSelector } from "../StepSelector";
import { PasswordResetForm } from "../PasswordResetForm";

/**
 * Flujo principal de autenticación tipo TikTok login.
 */
export const AuthForm = () => {
  const [step, setStep] = useState<"selector" | "local" | "reset">("selector");

  const handleProviderLogin = (provider: string) => {
    // Aquí más adelante conectarás con Supabase
    alert(`Iniciar sesión con ${provider}`);
  };

  return (
    <div className="relative max-w-md mx-auto p-6 rounded-lg shadow-md space-y-6 bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)]">
      {/* Botón retroceso */}
      {step !== "selector" && (
        <button
          onClick={() => setStep("selector")}
          className="absolute top-4 left-4 text-2xl text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
          aria-label="Volver"
        >
          ←
        </button>
      )}

      {/* Render step */}
      {step === "selector" && (
        <StepSelector
          onSelect={(method) => setStep(method)}
          onProvider={handleProviderLogin}
        />
      )}

      {step === "local" && (
        <AuthPhoneForm mode="login" onForgotPassword={() => setStep("reset")} />
      )}
      {step === "reset" && <PasswordResetForm />}
    </div>
  );
};

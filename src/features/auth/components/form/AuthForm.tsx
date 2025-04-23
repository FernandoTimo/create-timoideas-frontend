"use client";

import { useState } from "react";
import { AuthPhoneForm } from "./AuthPhoneForm";
import { StepSelector } from "../StepSelector";
import { PasswordResetForm } from "../PasswordResetForm";

/**
 * Flujo principal de autenticación tipo TikTok login.
 */
export const AuthForm = () => {
  const [step, setStep] = useState<
    "local" | "google" | "apple" | "facebook" | "tiktok" | "reset" | "selector"
  >("selector");

  const handleProviderLogin = (provider: string) => {
    // Aquí más adelante conectarás con Supabase
    alert(`Iniciar sesión con ${provider}`);
  };

  return (
    <div className="relative max-w-md mx-auto p-6 rounded-lg space-y-6  text-[var(--color-text-primary)]">
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
        <>
          <h2 className="text-2xl font-bold text-center">
            Inicia sesión en Timoideas
          </h2>
          {/* <QuickLoginSection /> */}

          <StepSelector
            onSelect={(method) => setStep(method)}
            onProvider={handleProviderLogin}
          />
        </>
      )}

      {step === "local" && (
        <AuthPhoneForm mode="login" onForgotPassword={() => setStep("reset")} />
      )}
      {step === "reset" && <PasswordResetForm />}
    </div>
  );
};

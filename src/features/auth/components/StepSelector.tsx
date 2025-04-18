"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

interface Props {
  onSelect: (method: "email" | "phone" | "oauth") => void;
  onProvider?: (provider: string) => void;
}

const PROVIDERS = [
  {
    name: "facebook",
    label: "Continuar con Facebook",
    icon: "/icons/facebook.svg",
  },
  { name: "google", label: "Continuar con Google", icon: "/icons/google.svg" },
  { name: "apple", label: "Continuar con Apple", icon: "/icons/apple.svg" },
  { name: "tiktok", label: "Continuar con TikTok", icon: "/icons/tiktok.svg" },
];

/**
 * Paso inicial: muestra opciones para elegir método de login.
 */
export const StepSelector = ({ onSelect, onProvider }: Props) => {
  return (
    <div className="space-y-4">
      <button
        onClick={() => onSelect("local")}
        className="w-full bg-[var(--color-muted)] hover:bg-[var(--color-surface)] text-[var(--color-text-primary)] text-sm py-3 rounded-md border border-[var(--color-border)]"
      >
        Continuar con teléfono correo o usuario
      </button>

      {PROVIDERS.map((provider) => (
        <button
          key={provider.name}
          onClick={() => onProvider?.(provider.name)}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-muted)] transition"
        >
          <Image
            src={provider.icon}
            alt={provider.name}
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="text-sm">{provider.label}</span>
        </button>
      ))}
    </div>
  );
};

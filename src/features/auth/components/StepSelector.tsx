"use client";

import { PROVIDERS } from "../constants";

interface Props {
  onSelect: (
    method: "local" | "google" | "apple" | "tiktok" | "facebook"
  ) => void;
  onProvider?: (provider: string) => void;
}

/**
 * Paso inicial: muestra opciones para elegir método de login.
 */
export const StepSelector = ({ onSelect }: Props) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-1.5 mt-4 justify-center">
        {PROVIDERS.map(({ name, label, Icon }) => (
          <button
            key={name}
            onClick={() => onSelect(name)}
            className="w-4/5 h-15 flex transition duration-100  justify-center items-center font-bold gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-muted)] hover:bg-black/40 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]  cursor-pointer"
          >
            <Icon className="w-5 h-5" />
            <span className="text-md ">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

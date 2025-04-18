"use client";

import { OAUTH_PROVIDERS } from "../constants/oauthProviders";

/**
 * Botones para iniciar sesión con proveedores OAuth.
 * Tema personalizado + arquitectura limpia.
 */
export const OAuthButtons: React.FC = () => {
  return (
    <div className="space-y-3">
      {OAUTH_PROVIDERS.map((provider) => (
        <button
          key={provider.name}
          className="w-full flex items-center justify-center gap-2 border px-4 py-2 rounded-md text-sm font-medium bg-[var(--color-surface)] text-[var(--color-text-primary)] border-[var(--color-border)] hover:bg-[var(--color-muted)]"
        >
          <span>{provider.icon}</span> {provider.name}
        </button>
      ))}
    </div>
  );
};

"use client";

import { QuickLoginCard } from "./QuickLoginCard";
import { OAUTH_PROVIDERS } from "../constants/oauthProviders";

/**
 * Sección para mostrar proveedores como mini tarjetas reutilizando QuickLoginCard.
 */
export const OAuthQuickSection = () => {
  const visibleProviders = ["google", "facebook", "apple", "tiktok"];

  const filtered = OAUTH_PROVIDERS.filter((p) =>
    visibleProviders.includes(p.name)
  );

  return (
    <section className="space-y-2 mb-4">
      <h3 className="text-sm font-semibold text-[var(--color-text-secondary)] text-center">
        O continúa con
      </h3>
      <div className="flex gap-3 overflow-x-auto justify-center px-1">
        {filtered.map((provider) => (
          <div key={provider.name} className="min-w-[110px]">
            <QuickLoginCard
              data={{
                id: provider.name,
                displayName: provider.displayName,
                avatarUrl: provider.icon,
                provider: provider.name,
                lastLoginAt: 0,
              }}
              onClick={() => alert(`Iniciar sesión con ${provider.name}`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

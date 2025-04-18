"use client";

import { QuickLoginCard } from "./QuickLoginCard";
import { MOCK_QUICK_LOGINS } from "../constants/quickLogins";

/**
 * Renderiza las cuentas guardadas en una fila horizontal scrollable.
 */
export const QuickLoginSection = () => {
  const accounts = MOCK_QUICK_LOGINS.slice(0, 5);

  if (accounts.length === 0) return null;

  return (
    <section className="space-y-2 mb-4 text-center">
      <h3 className="text-sm font-semibold text-[var(--color-text-secondary)]">
        Inicios de sesión recientes
      </h3>
      <div className="flex gap-3 overflow-x-auto px-1 justify-center">
        {accounts.map((user) => (
          <div key={user.id} className="min-w-[110px]">
            <QuickLoginCard
              data={user}
              onClick={() => alert(`Re-login: ${user.email}`)}
              onRemove={() => alert("Eliminar cuenta")}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

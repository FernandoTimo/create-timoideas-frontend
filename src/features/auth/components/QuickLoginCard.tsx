"use client";

import { QuickLoginData } from "../types/quickLogin";
import Image from "next/image";

interface Props {
  data: QuickLoginData;
  onClick?: () => void;
  onRemove?: () => void;
}

/**
 * Tarjeta de inicio rápido tipo Facebook login,
 * con avatar fullscreen, botón de eliminar y nombre + proveedor.
 */
export const QuickLoginCard = ({ data, onClick, onRemove }: Props) => {
  const providerLabel =
    data.provider.charAt(0).toUpperCase() + data.provider.slice(1);

  return (
    <div className="relative w-[110px] rounded-lg overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm">
      {/* Botón ❌ */}
      {onRemove && (
        <button
          onClick={onRemove}
          className="absolute top-1 right-1 z-10 text-xs bg-[var(--color-muted)] rounded-full px-1 text-[var(--color-text-secondary)] hover:text-[var(--color-error)]"
          title="Eliminar cuenta"
        >
          ×
        </button>
      )}

      {/* Avatar (toda la parte superior) */}
      <button onClick={onClick} className="w-full block aspect-square relative">
        {data.avatarUrl ? (
          <Image
            src={data.avatarUrl}
            alt={data.displayName}
            fill
            sizes="110px"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[var(--color-muted)] text-xl text-[var(--color-text-primary)]">
            {data.displayName[0]}
          </div>
        )}
      </button>

      {/* Info: nombre + proveedor */}
      <div className="py-1 px-2 text-center">
        <p className="text-sm font-medium text-[var(--color-text-primary)] truncate">
          {data.displayName}
        </p>
        <p className="text-[10px] text-[var(--color-text-secondary)]">
          {providerLabel}
        </p>
      </div>
    </div>
  );
};

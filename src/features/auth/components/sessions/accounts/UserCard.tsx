// 📁 src/components/ui/UserCard.tsx

"use client";

import { useState } from "react";
import { Avatar, Badge } from "@heroui/react";
import { Tooltip } from "@/components/ui";

/**
 * 📦 UserCard
 * — Tarjeta pequeña de usuario con avatar, nombre y botón de cerrar.
 */
export default function UserCard() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative flex w-4/5 flex-col rounded-xl bg-[var(--color-surface)]/50 p-3 text-white shadow-md backdrop-blur-xl">
      {/* Botón cerrar */}
      <Tooltip text="Eliminar cuenta de esta página" placement="top-end">
        <button
          onClick={() => setVisible(false)}
          className="absolute right-2 top-2 rounded-full p-1 text-[8px] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition hover:font-black cursor-pointer"
          aria-label="Cerrar tarjeta"
        >
          ✕
        </button>
      </Tooltip>

      {/* Avatar y nombre */}
      <div className="flex items-center gap-4">
        <Tooltip
          text="Último acceso hace 3 días"
          offset={20}
          placement="top-start"
        >
          <Badge
            color="default"
            content={
              <span className="text-[var(--color-surface)] text-[10px]">
                3d
              </span>
            }
            size="sm"
            placement="bottom-right"
          >
            <Avatar isBordered src="/profile.jpg" size="sm" />
          </Badge>
        </Tooltip>
        <div className="flex flex-col">
          <span className="font-semibold text-sm leading-tight text-[var(--color-text-primary)]">
            Zoey Lang
          </span>
          <span className="text-xs text-[var(--color-text-secondary)]">
            @zoeylang
          </span>
        </div>
      </div>

      {/* Descripción */}
      <p className="mt-2 text-xs text-[var(--color-text-primary)]">
        Full-stack, fan de <span className="text-blue-400">@hero_ui</span> 🎉
      </p>
    </div>
  );
}

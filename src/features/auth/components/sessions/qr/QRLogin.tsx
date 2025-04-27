"use client";
// 📁 src/features/auth/components/QRLogin.tsx
import { AppStoreButton, GooglePlayButton } from "../../ui/badges";
import QRCode from "./code/QRCode";
import QRHeader from "./QRHeader";

/**
 * 📦 QRLogin
 * Renderiza los accesos para apps móviles con autenticación QR (tipo WhatsApp Web).
 * Incluye botones de descarga a tiendas móviles, cada uno animado con borde.
 */
export const QRLogin = () => {
  // 🎨 Colores del borde animado

  return (
    <div className="center flex-col rounded-b-3xl wh bg-[var(--color-bg)] pt-3">
      <div className="center h-20 ">
        <QRHeader />
      </div>
      <div className="flex-1 relative center">
        <QRCode />
      </div>
      <div className="flex gap-1 items-center justify-center py-3">
        <GooglePlayButton />
        <AppStoreButton />
      </div>
    </div>
  );
};

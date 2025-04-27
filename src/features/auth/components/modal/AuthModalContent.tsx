"use client";

import { AuthForm } from "../form/AuthForm";
import { SavedAccounts } from "../sessions/accounts/SavedAccounts";
import { motion } from "framer-motion";
import { QRLogin } from "../sessions/qr/QRLogin";
/**
 * 📦 AuthModal
 * Diseño responsive:
 * - En desktop: QR + Saved a la izquierda, AuthForm a la derecha
 * - En mobile: AuthForm arriba, Saved abajo, QR oculto
 */
export default function AuthModalContent() {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 bg-[var(--color-surface)] wh">
      {/* Desktop: columna izquierda (QR + Saved) */}
      <div className="flex lg:flex-col justify-between lg:w-[35%]! w gap-6 lg:ml-6">
        {/* QR solo en desktop */}
        <motion.div
          className="hidden flex-2 lg:flex items-center justify-center text-[var(--color-text-primary)] text-sm font-medium min-h-[220px]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <QRLogin />
        </motion.div>

        {/* Saved visible en desktop */}
        <motion.div
          className="flex-1 flex center text-[var(--color-text-primary)] text-sm font-medium min-h-[220px] w"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SavedAccounts />
        </motion.div>
      </div>

      {/* Columna derecha (AuthForm) */}
      <motion.div
        className="flex-1 flex center text-[var(--color-text-primary)] text-sm font-medium min-h-[460px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <AuthForm />
      </motion.div>
    </div>
  );
}

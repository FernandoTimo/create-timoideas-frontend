// 📁 src/components/ui/GooglePlayButton.tsx

import { StoreBadgeButton } from "./StoreBadgeButton";
import { GooglePlayIcon } from "@/assets/icons/social-media";

/**
 * 📦 GooglePlayButton
 * Componente específico para Google Play Store, usando StoreBadgeButton genérico.
 */
export function GooglePlayButton({
  size = "sm",
}: {
  size?: "sm" | "md" | "lg";
}) {
  return (
    <StoreBadgeButton
      icon={<GooglePlayIcon />}
      label="DISPONIBLE EN"
      storeName="Google Play"
      href="https://play.google.com/store/apps/details?id=tu.app.id"
      size={size}
    />
  );
}

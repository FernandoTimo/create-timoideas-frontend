// 📁 src/components/ui/AppStoreButton.tsx

import { AppleIcon } from "@/assets/icons/social-media";
import { StoreBadgeButton } from "./StoreBadgeButton";

/**
 * 📦 AppStoreButton
 * Componente específico para Apple App Store, usando StoreBadgeButton genérico.
 */
export function AppStoreButton({ size = "sm" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <StoreBadgeButton
      icon={<AppleIcon />}
      label="Consíguelo en el"
      storeName="App Store"
      href="#"
      size={size}
    />
  );
}

import type { QuickLoginData } from "@/features/auth/types/quickLogin";

/**
 * Datos simulados para pruebas de UI.
 */
export const MOCK_QUICK_LOGINS: QuickLoginData[] = [
  {
    id: "uid_001",
    email: "maria@gmail.com",
    displayName: "María",
    avatarUrl: "",
    provider: "google",
    lastLoginAt: Date.now() - 1000,
  },
  {
    id: "uid_002",
    email: "pedro@twitch.tv",
    displayName: "Pedro",
    avatarUrl: "",
    provider: "twitch",
    lastLoginAt: Date.now() - 3000,
  },
];

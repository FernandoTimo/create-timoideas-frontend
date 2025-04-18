/**
 * Representa una cuenta guardada para inicio de sesión rápido.
 */
export interface QuickLoginData {
  id: string;
  email?: string;
  phone?: string;
  displayName: string;
  avatarUrl?: string;
  provider: string;
  lastLoginAt: number;
}

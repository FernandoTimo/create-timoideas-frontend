import { PasswordSecurityLevel, PasswordValidator } from "../types";

export const PASSWORD_SECURITY_LEVELS: PasswordSecurityLevel[] = [
  {
    label: "Vacía",
    emoji: "😴",
    level: 0,
    color: "bg-transparent border-[var(--color-border)]",
  },
  {
    label: "Muy baja",
    emoji: "😬",
    level: 1,
    color: "bg-red-500 border-red-500",
  },
  {
    label: "Baja",
    emoji: "😕",
    level: 2,
    color: "bg-orange-400 border-orange-400",
  },
  {
    label: "Media",
    emoji: "🙂",
    level: 3,
    color: "bg-yellow-400 border-yellow-400",
  },
  {
    label: "Alta",
    emoji: "😎",
    level: 4,
    color: "bg-lime-400 border-lime-400",
  },
  {
    label: "Excelente",
    emoji: "🛡️",
    level: 5,
    color: "bg-green-500 border-green-500",
  },
];

export const validators: PasswordValidator[] = [
  {
    label: "Entre 8 y 20 caracteres",
    test: (val: string) => val.length >= 8 && val.length <= 20,
  },
  {
    label: "Una letra minúscula",
    test: (val: string) => /[a-z]/.test(val),
  },
  {
    label: "Una letra mayúscula",
    test: (val: string) => /[A-Z]/.test(val),
  },
  {
    label: "Un número",
    test: (val: string) => /\d/.test(val),
  },
  {
    label: "Un carácter especial",
    test: (val: string) => /[^a-zA-Z\d]/.test(val),
  },
];

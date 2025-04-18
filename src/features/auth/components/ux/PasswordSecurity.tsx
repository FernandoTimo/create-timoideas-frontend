// 📁 src/features/auth/components/PasswordSecurity.tsx

import { cn } from "@/lib/utils/cn";
import { PASSWORD_SECURITY_LEVELS, validators } from "../../constants";

/**
 * 📦 PasswordSecurity
 * — Renderiza visualización del nivel de seguridad de una contraseña
 * — Muestra emoji, barra de nivel y texto con feedback visual
 */
type Props = {
  value: string;
};

export default function PasswordSecurity({ value }: Props) {
  const passedLevel = validators.filter((v) => v.test(value)).length;
  const { emoji, label } = PASSWORD_SECURITY_LEVELS[passedLevel];
  const color = PASSWORD_SECURITY_LEVELS[passedLevel].color;
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between p-2 rounded-md border-3 transition-colors duration-300 h-[80%] self-center mr-10 w-40",
        passedLevel === 5
          ? "border-green-400/50"
          : "border-[var(--color-border)]"
      )}
    >
      {/* Emoji asociado al nivel actual */}
      <span className="text-xl">{emoji}</span>

      {/* Barra de progreso visual */}
      <div className="flex flex-row justify-center gap-[2px] self-center my-1">
        {PASSWORD_SECURITY_LEVELS.slice(1).map(({ level }) => (
          <div
            key={level}
            className={cn(
              "w-4 h-4 rounded-sm border transition-colors duration-300",
              passedLevel >= level
                ? color
                : "bg-transparent border-[var(--color-border)]"
            )}
          />
        ))}
      </div>

      {/* Texto descriptivo del nivel */}
      <span
        className={cn(
          "text-xs font-medium text-[var(--color-text-secondary)]",
          passedLevel === 5 && "text-green-600 font-bold"
        )}
      >
        Seguridad: {label}
      </span>
    </div>
  );
}

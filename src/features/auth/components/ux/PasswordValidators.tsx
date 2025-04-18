import { cn } from "@/lib/utils/cn";
import { validators } from "../../constants";

export default function PasswordValidators({ value }: { value: string }) {
  return (
    <div className="text-xs space-y-1 text-[var(--color-text-secondary)]">
      <p className="font-semibold">Tu contraseña debe tener:</p>
      <ul className="space-y-0.5">
        {validators.map((v, i) => {
          const passed = v.test(value);
          return (
            <li
              key={i}
              className={cn(
                "flex items-center gap-2",
                passed ? "text-green-500" : "text-[var(--color-text-secondary)]"
              )}
            >
              <span>{passed ? "✔️" : "✖️"}</span>
              <span>{v.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

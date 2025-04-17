import { ThemeToggle } from "@/features/theme";
import { getTheme } from "@/features/theme/utils/getTheme";

export default async function HomePage() {
  return (
    <main
      className="min-h-screen p-8"
      style={{ background: "var(--color-bg)" }}
    >
      <ThemeToggle initialTheme={await getTheme()} />
      <div
        className="rounded-xl p-6"
        style={{ background: "var(--color-surface)" }}
      >
        <h2
          className="text-xl font-bold mb-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          Título del Card
        </h2>
        <h3
          className="text-md font-medium mb-1"
          style={{ color: "var(--color-accent)" }}
        >
          Subtítulo llamativo
        </h3>
        <p style={{ color: "var(--color-text-secondary)" }}>
          Este es un párrafo de ejemplo en el Card. El contenido se adapta al
          tema activo.
        </p>
      </div>
    </main>
  );
}

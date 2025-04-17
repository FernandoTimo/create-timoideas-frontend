import { ThemeToggle } from "@/features/theme";

export default async function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-[var(--color-bg)]">
      <ThemeToggle />
      <div className="rounded-xl p-6 bg-[var(--color-surface)]">
        <h2 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">
          Título del Card
        </h2>
        <h3 className="text-md font-medium mb-1 text-[var(--color-accent)]">
          Subtítulo llamativo
        </h3>
        <p className="text-[var(--color-text-secondary)]">
          Este es un párrafo de ejemplo en el Card. El contenido se adapta al
          tema activo.
        </p>
      </div>
    </main>
  );
}

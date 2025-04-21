import AuthModal from "@/features/auth/components/modal/AuthModal";
import { ThemeToggle } from "@/features/theme";

export default async function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-[var(--color-bg)]">
      <ThemeToggle />
      <AuthModal />
    </main>
  );
}

import AuthModal from "@/features/auth/components/modal/AuthModal";
import { ParticlesLayer } from "@/features/auth/components/sessions/qr/code/ParticlesLayer";
import { ThemeToggle } from "@/features/theme";

export default async function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-[var(--color-bg)] flex items-center justify-center">
      <AuthModal />
      <ThemeToggle />
      {/* <ParticlesLayer /> */}
    </main>
  );
}

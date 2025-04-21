import { GradientText, ImpactCycle, ShadowText } from "@/components/ui";
import AuthModal from "@/features/auth/components/modal/AuthModal";
import { ThemeToggle } from "@/features/theme";
import Link from "next/link";

export default async function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-[var(--color-bg)]">
      <ThemeToggle />
      <div className="rounded-xl p-6 bg-[var(--color-surface)]">
        {/* <ImpactCycle
          direction="top"
          interval={2500}
          className="text-3xl font-bold"
        >
          <GradientText
            text="TRANSACCIONES"
            colors={["#facc15", "#f97316"]}
            className="tracking-tight"
            animated
          />
          <GradientText
            text="COMPRAS"
            colors={["#a855f7", "#06b6d4"]}
            className="tracking-tight"
            animated
          />
          <GradientText
            text="VENTAS"
            colors={["#10b981", "#3b82f6"]}
            className="tracking-tight"
            animated
          />
        </ImpactCycle> */}

        {/* <GradientText
          text="fácil de animar manito."
          animated
          speed={2}
          size="2rem"
          weight="900"
          colors={["#facc15", "#f97316", "#a855f7"]}
          className="uppercase"
        /> */}
        <div>
          <ShadowText
            text={"PROTEGIDA"}
            direction="center"
            animation="out"
            interval={3000}
            mode="fade"
            shadowSize={20}
            layers={["#facc15", "#7e22ce", "#1e3a8a"]}
            fontSize="2rem"
            className="font-black tracking-widest"
          />
        </div>
        {/* {["P", "R", "O", "T", "E", "G", "I", "D", "A"].map((item) => (
          <ShadowText
            key={item}
            text={item}
            direction="center"
            animation="out"
            interval={1000}
            mode="fade"
            shadowSize={20}
            layers={["#facc15", "#f97316", "#a855f7", "#7e22ce", "#1e3a8a"]}
            fontSize="2rem"
            className="font-black tracking-tight"
            style={{ color: "#fff" }}
          />
        ))} */}
        {/* <ShadowText
          text="A"
          direction="center"
          animation="in"
          interval={1000}
          shadowSize={20}
          fontSize="8rem"
          layers={["#22d3ee", "#a855f7", "#facc15", "#f97316", "#ef4444"]}
          className="font-extrabold tracking-tight"
          strokeOnly
          blurShadow={50}
          mode="fade"
          shadowBlendMode="screen"
          style={{ color: "#fff" }}
        /> */}

        {/* <StackedShadowText
          text="SHADOW"
          shadowSize={5}
          shadowColor="#fa0"
          textColor="white"
          size="4rem"
          weight="900"
          className="tracking-wider"
        /> */}
        <h3 className="text-md font-medium mb-1 text-[var(--color-accent)]">
          Subtítulo llamativo
        </h3>
        <p className="text-[var(--color-text-secondary)]">
          Este es un párrafo de ejemplo en el Card. El contenido se adapta al
          tema activo.
        </p>
        {/* Link a la página de auth */}
        <Link href="/auth">
          <div className="mt-4 inline-block rounded-md bg-[var(--color-accent)] px-4 py-2 text-white hover:bg-[var(--color-accent-hover)]">
            Ir a la página de autenticación
          </div>
        </Link>
      </div>

      <AuthModal />
    </main>
  );
}

"use client";
import { QRParticlesAssembler } from "./QRParticlesAssembler";
import { Corners } from "./Corners";
import { useQRCoordinates } from "@/features/auth/hooks/useQRCoordinates";
import { useNewQRUrl } from "@/features/auth/hooks/useNewQRUrl";
import { useEffect, useState } from "react";
// import { TimoideasIcon } from "@/assets/icons/social-media";

export default function QRCode() {
  const [scanned, setScanned] = useState(false); // ✅ nuevo estado
  const baseUrl = "https://timoideas.com/login?nonce=";
  const url = useNewQRUrl(80000, () => `${baseUrl}${crypto.randomUUID()}`);
  const { containerRef, points } = useQRCoordinates(url);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setScanned(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  // anim de entrada
  // anim de salida
  // anim de escaneo
  // anim de logeo
  return (
    <div className="center group p-1 relative">
      <div className="absolute wh trans-200 group-hover:scale-98 ">
        <Corners />
      </div>
      <div
        ref={containerRef}
        className="relative w-[200px] h-[200px] center self-center trans-200"
      >
        {points && (
          <QRParticlesAssembler
            points={points}
            pointSize={5}
            scanned={scanned}
          />
        )}
        {/* <TimoideasIcon className="w-7 h-7 absolute" /> */}
      </div>
    </div>
  );
}

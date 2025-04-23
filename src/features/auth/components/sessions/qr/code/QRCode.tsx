import { QRParticlesAssembler } from "./QRParticlesAssembler";
import { Corners } from "./Corners";
import { useQRCoordinates } from "@/features/auth/hooks/useQRCoordinates";
import { useNewQRUrl } from "@/features/auth/hooks/useNewQRUrl";
// import { TimoideasIcon } from "@/assets/icons/social-media";

export default function QRCode() {
  const baseUrl = "https://timoideas.com/login?nonce=";
  const url = useNewQRUrl(5, () => `${baseUrl}${crypto.randomUUID()}`);

  const { containerRef, points } = useQRCoordinates(url);
  return (
    <div className="center group p-1 relative">
      <div className="absolute wh trans-200 ">
        <Corners />
      </div>
      <div
        ref={containerRef}
        className="relative w-[200px] h-[200px] group-hover:scale-95 center self-center trans-200"
      >
        {points && <QRParticlesAssembler points={points} pointSize={5} />}
        {/* <TimoideasIcon className="w-7 h-7 absolute" /> */}
      </div>
    </div>
  );
}

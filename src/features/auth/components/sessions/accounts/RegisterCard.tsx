import { TimoideasIcon } from "@/assets/icons/social-media";

export default function RegisterCard() {
  return (
    <div className="wh center px-5 bg-gradient-to-t to-transparent from-[var(--color-mountain-deep)] gap-3">
      <div className="w-9 h-9">
        <TimoideasIcon />
      </div>
      <div className="flex flex-1 flex-col gap-0">
        <span className="text-[13px] font-bold tracking-tighter text-orange-100">
          Timoideas
        </span>
        <span className="text-[10px] text-amber-100 cursor-pointer">
          ¿No tienes cuenta?
        </span>
      </div>
      <div className="center">
        <button className="px-2 py-1.5 rounded-xl cursor-pointer bg-transparent border-2 border-amber-100 text-amber-100 text-[13px]">
          Registrarse -&gt;
        </button>
      </div>
    </div>
  );
}

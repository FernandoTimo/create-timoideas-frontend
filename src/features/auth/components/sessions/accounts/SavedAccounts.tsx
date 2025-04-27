import AccountsHeader from "./AccountsHeader";
import RegisterCard from "./RegisterCard";
import UserCard from "./UserCard";
import Paradise from "@/features/auth/assets/para.svg";
/**
 * 📦 SavedAccounts
 * Muestra accesos guardados (cookies, localStorage)
 * Permite seleccionar usuarios usados anteriormente
 */
export const SavedAccounts = () => {
  return (
    <div className="relative center rounded-t-3xl lg:bg-[var(--color-bg)] wh flex-col pt-5 overflow-hidden">
      {/* Fondo degradado */}
      <div className="pointer-events-none absolute lg-bottom-[-30] bottom-[-100]   overflow-hidden flex justify-end w">
        {/* <div className="h-full w-full bg-[linear-gradient(to_top,_#ff4500_0%,_#ff8c00_40%,_transparent_100%)]" /> */}
        <Paradise className="w-[100%]" />
      </div>

      {/* Contenido real */}
      {/* Aquí tu contenido, bro */}
      <div className="center">
        <AccountsHeader />
      </div>
      <div className="center flex-1 wh ">
        <UserCard />
      </div>
      <div className="center h-15 w z-10 backdrop-blur-md border-t-1 border-[var(--color-border)]">
        <RegisterCard />
      </div>
    </div>
  );
};

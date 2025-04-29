// src/app/auth/tiktok/page.tsx
"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

/**
 * 📦 TikTok OAuth Callback Page
 * Página encargada de recibir el `code`, intercambiarlo por el `access_token` y mostrar resultados en consola.
 */
export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const exchangeCodeForToken = async () => {
      const code = searchParams.get("code");

      // Validar que tenemos el `code`
      if (!code) {
        console.error("❌ No se recibió el code en la URL");
        return;
      }

      // Recuperar el `code_verifier` que guardamos en sessionStorage
      const codeVerifier = sessionStorage.getItem("tiktok_code_verifier");
      if (!codeVerifier) {
        console.error("❌ No se encontró code_verifier en sessionStorage");
        return;
      }

      try {
        // Llamar a la API de TikTok para obtener access_token
        const response = await fetch(
          "https://open.tiktokapis.com/v2/oauth/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              client_key: process.env.NEXT_PUBLIC_TIKTOK_CLIENT_ID!,
              client_secret: process.env.NEXT_PUBLIC_TIKTOK_CLIENT_SECRET!,
              code,
              grant_type: "authorization_code",
              redirect_uri: `${window.location.origin}/auth/tiktok`,
              code_verifier: codeVerifier,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          console.error("❌ Error al intercambiar code:", data);
          return;
        }

        console.log("✅ Access Token recibido:", data.access_token);
        console.log("🆔 OpenID:", data.open_id);
        console.log("🔁 Refresh Token:", data.refresh_token);

        // Si quieres hacer otra llamada para obtener más info del user, puedes hacerlo aquí
        // pero por ahora solo vamos a mostrar el token
      } catch (err) {
        console.error("❌ Error inesperado:", err);
      }
    };

    exchangeCodeForToken();
  }, [searchParams, router]);

  return <div className="text-center mt-10">Conectando con TikTok...</div>;
}

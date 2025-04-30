"use client";

import { useEffect } from "react";

/**
 * 📦 TikTokAuthPage
 * Callback visual que intercambia `code` por `tokenData`, hace postMessage y cierra.
 */
export default function TikTokAuthPage() {
  useEffect(() => {
    const handleTikTokCallback = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");

      if (!code) {
        console.warn("⚠️ No se recibió el parámetro 'code' en la URL.");
        return;
      }

      try {
        const res = await fetch(`/auth/tiktok?code=${code}`);

        const result = await res.json();

        if (!res.ok || !result.success) {
          console.error("❌ Fallo en el login con TikTok:", result);
          return;
        }

        const payload = {
          ...result.tokenData, // contiene access_token, open_id, etc.
          timestamp: Date.now(),
        };

        // ✅ Notificar al opener
        window.opener?.postMessage(
          { type: "oauth-success", provider: "tiktok", payload },
          window.location.origin
        );

        window.close(); // 🚪 cerrar popup
      } catch (err) {
        console.error("❌ Error inesperado:", err);
      }
    };

    handleTikTokCallback();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-lg font-bold mb-2">Conectando con TikTok...</h1>
      <p className="text-sm text-gray-500">Esta ventana se cerrará sola.</p>
    </div>
  );
}

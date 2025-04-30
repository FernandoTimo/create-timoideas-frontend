"use client";

import { useEffect } from "react";

/**
 * 🔐 decodeOAuthData
 * Decodifica un string Base64 seguro y parsea el JSON.
 */
function decodeOAuthData(encoded: string): unknown | null {
  try {
    const decoded = atob(encoded);
    return JSON.parse(decoded);
  } catch (err) {
    console.error("❌ Error decodificando `data`:", err);
    return null;
  }
}

/**
 * 📦 TikTokAuthPage
 * Página de callback de TikTok: recibe `data` codificada, la decodifica y la envía al opener.
 */
export default function TikTokAuthPage() {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const encodedData = searchParams.get("data");

    if (!encodedData) {
      console.warn("⚠️ No se recibió el parámetro `data`.");
      return;
    }

    const payload = decodeOAuthData(encodedData);

    if (!payload || typeof payload !== "object") {
      console.warn("⚠️ Los datos recibidos no son válidos.");
      return;
    }

    // ✅ Enviar al opener
    window.opener?.postMessage(
      {
        type: "oauth-success",
        provider: "tiktok",
        payload: { ...payload, timestamp: Date.now() },
      },
      window.location.origin
    );

    window.close(); // 🚪 cerrar el popup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-lg font-bold mb-2">Procesando login con TikTok...</h1>
      <p className="text-sm text-gray-500">
        Esta ventana se cerrará automáticamente.
      </p>
    </div>
  );
}

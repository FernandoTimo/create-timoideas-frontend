// app/auth/tiktok/route.ts

import { NextRequest, NextResponse } from "next/server";

/**
 * 🔄 TikTok OAuth Callback – obtiene token + perfil en una sola llamada
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { success: false, message: "No se recibió el code." },
      { status: 400 }
    );
  }

  try {
    console.log("🎯 Intercambiando code por token...");

    const tokenRes = await fetch(
      "https://open.tiktokapis.com/v2/oauth/token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Cache-Control": "no-cache",
        },
        body: new URLSearchParams({
          client_key: process.env.TIKTOK_CLIENT_KEY!,
          client_secret: process.env.TIKTOK_CLIENT_SECRET!,
          code,
          grant_type: "authorization_code",
          redirect_uri:
            "https://create-timoideas-frontend.vercel.app/auth/tiktok",
        }),
      }
    );

    const tokenData = await tokenRes.json();
    console.log("📥 Token Response:", tokenData);

    if (!tokenRes.ok) {
      console.error("❌ Error en tokenRes:", tokenRes.status);
      return NextResponse.json(
        { success: false, step: "token", data: tokenData },
        { status: 500 }
      );
    }

    const { access_token, open_id } = tokenData;

    const response = await fetch(
      "https://open.tiktokapis.com/v2/user/info/?fields=open_id,username,avatar_url",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const userData = await response.json();
    if (!response.ok) {
      console.error(
        "❌ Error al obtener la información del usuario:",
        userData
      );
    } else {
      console.log("✅ Información del usuario obtenida:", userData);
    }
    console.log("📥 User Info Response:", userData);

    return NextResponse.json({
      success: true,
      tokens: {
        access_token,
        refresh_token: tokenData.refresh_token,
        expires_in: tokenData.expires_in,
        open_id,
        scope: tokenData.scope,
      },
    });
  } catch (err) {
    console.error("❌ EXCEPCIÓN:", err?.message || err);
    return NextResponse.json(
      { success: false, message: "Error inesperado", error: err?.message },
      { status: 500 }
    );
  }
}

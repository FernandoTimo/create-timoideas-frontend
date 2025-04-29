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
    // 1️⃣ Intercambiar code por token
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

    if (!tokenRes.ok) {
      console.error("❌ Error al obtener token:", tokenData);
      return NextResponse.json(
        { success: false, step: "token", data: tokenData },
        { status: 500 }
      );
    }

    const { access_token, open_id } = tokenData;

    // 2️⃣ Obtener perfil con token
    const userInfoRes = await fetch(
      "https://open.tiktokapis.com/v2/user/info/",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          open_id,
          fields: ["open_id", "username", "avatar_url"],
        }),
      }
    );

    const userInfoData = await userInfoRes.json();

    if (!userInfoRes.ok) {
      console.error("❌ Error al obtener perfil TikTok:", userInfoData);
      return NextResponse.json(
        { success: false, step: "user", data: userInfoData },
        { status: 500 }
      );
    }

    const user = userInfoData.data?.user;

    // 3️⃣ Respuesta final: token + perfil
    return NextResponse.json({
      success: true,
      tokens: {
        access_token,
        refresh_token: tokenData.refresh_token,
        expires_in: tokenData.expires_in,
        open_id,
        scope: tokenData.scope,
      },
      user,
    });
  } catch (err) {
    console.error("❌ Error inesperado:", err);
    return NextResponse.json(
      { success: false, message: "Error inesperado" },
      { status: 500 }
    );
  }
}

// app/auth/tiktok/route.ts

import { NextRequest, NextResponse } from "next/server";
function toBase64(obj: unknown) {
  return Buffer.from(JSON.stringify(obj)).toString("base64url");
}
/**
 * 🔄 TikTok OAuth Callback – Intercambia code por access_token y devuelve tokenData.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { success: false, message: "No se recibió el parámetro 'code'." },
      { status: 400 }
    );
  }

  try {
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
      console.error("❌ Error al obtener token:", tokenRes.status, tokenData);
      return NextResponse.json(
        { success: false, step: "token", error: tokenData },
        { status: 500 }
      );
    }

    const encoded = toBase64(tokenData);
    return NextResponse.redirect(
      `http://localhost:3000/auth/tiktok/callback?data=${encoded}`
    );
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    console.error("❌ Error inesperado:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error inesperado al procesar callback de TikTok.",
        error,
      },
      { status: 500 }
    );
  }
}

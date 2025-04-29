// app/api/auth/tiktok/callback/route.ts

import { NextRequest, NextResponse } from "next/server";

/**
 * 📦 Intercambio de code por access_token desde TikTok OAuth
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

    const data = await tokenRes.json();

    if (!tokenRes.ok) {
      console.error("❌ Falló el intercambio de token:", data);
      return NextResponse.json(
        {
          success: false,
          message: "No se pudo obtener access_token.",
          data,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("❌ Error inesperado al intercambiar token:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Error inesperado.",
        data: err,
      },
      { status: 500 }
    );
  }
}

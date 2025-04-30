import {
  TIKTOK_OAUTH_FIELDS,
  TIKTOK_OAUTH_USERINFO_URL,
} from "@/features/auth/constants/oauth";
import { NextRequest, NextResponse } from "next/server";

/**
 * 📥 /auth/tiktok/user
 * Usa access_token y open_id para obtener el perfil del usuario TikTok
 */
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const access_token = url.searchParams.get("access_token");
  const open_id = url.searchParams.get("open_id");

  if (!access_token || !open_id) {
    return NextResponse.json(
      { success: false, message: "Faltan access_token u open_id." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${TIKTOK_OAUTH_USERINFO_URL}?${TIKTOK_OAUTH_FIELDS}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const userData = await response.json();

    if (!response.ok) {
      console.error("❌ Error desde TikTok:", userData);
      return NextResponse.json(
        {
          success: false,
          message: "Error al obtener datos del usuario",
          data: userData,
        },
        { status: 500 }
      );
    }

    console.log("✅ Perfil de usuario TikTok:", userData);

    return NextResponse.json({ success: true, data: userData });
  } catch (error) {
    console.error("❌ Error inesperado:", error);
    return NextResponse.json(
      { success: false, message: "Error inesperado", error: String(error) },
      { status: 500 }
    );
  }
}

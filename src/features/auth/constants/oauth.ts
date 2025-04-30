export const POPUP_SIZE = "width=500,height=600";
export const TIKTOK_OAUTH_USERINFO_URL =
  "https://open.tiktokapis.com/v2/user/info/";
export const TIKTOK_OAUTH_TOKEN_URL =
  "https://open.tiktokapis.com/v2/oauth/token/";
export const TIKTOK_OAUTH_FIELDS =
  "fields=open_id,avatar_url,username,display_name,bio_description";
export const TIKTOK_INTERNAL_REDIRECT_URL = "http://localhost:3000/auth/tiktok";
// export const TIKTOK_INTERNAL_REDIRECT_URL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:3000/auth/tiktok/callback"
//     : "https://create-timoideas-frontend.vercel.app/auth/tiktok";
// export const TIKTOK_EXTERNAL_REDIRECT_URL =
//   process.env.NODE_ENV === "development"
//     ? "https://create-timoideas-frontend.vercel.app/auth/callback"
//     : window.location.origin + "/auth/callback";
export const TIKTOK_EXTERNAL_REDIRECT_URL =
  "https://create-timoideas-frontend.vercel.app/auth/callback";

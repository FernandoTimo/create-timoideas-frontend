// 📁 src/app/layout.tsx
import "./globals.css";
import { getDefaultTheme } from "@/features/theme/utils/getDefaultTheme";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // SSR: Leemos la cookie y aplicamos la clase al <html>
  const defaultTheme = await getDefaultTheme();

  return (
    <html lang="en" className={defaultTheme}>
      <body>{children}</body>
    </html>
  );
}

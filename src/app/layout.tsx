// src/app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/features/theme";
import { getDefaultTheme } from "@/features/theme/utils/getDefaultTheme";
import { geistSans, geistMono } from "@/fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Solo UNA línea para pillar el tema
  const defaultTheme = await getDefaultTheme();

  return (
    <html lang="en" className={defaultTheme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme={defaultTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}

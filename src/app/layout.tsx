import "./globals.css";
import { Providers } from "@/providers";
import { getTheme } from "@/features/theme/utils/getTheme";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={await getTheme()}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

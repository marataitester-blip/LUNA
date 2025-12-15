import type { Metadata, Viewport } from "next";
import { Inter, Cinzel } from "next/font/google"; // Подключаем шрифты
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: "LUNA",
  description: "Aura Heritage Messenger",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LUNA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${cinzel.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}

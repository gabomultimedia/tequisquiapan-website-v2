import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Club de Golf Tequisquiapan | 50+ años de tradición golfística",
    template: "%s | Club de Golf Tequisquiapan",
  },
  description:
    "Club de Golf Tequisquiapan - Campo de 18 hoyos diseñado por Joe Finger. Golf, restaurante, tenis, pádel y membresías en el corazón de Tequisquiapan, Querétaro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
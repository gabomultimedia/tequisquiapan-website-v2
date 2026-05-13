import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/blocks/navbar";
import { Footer } from "@/components/blocks/footer";

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
  keywords: [
    "club de golf tequisquiapan",
    "campo de golf querétaro",
    "green fees tequisquiapan",
    "membresías golf",
    "restaurante tequisquiapan",
    "tenis pádel",
  ],
  authors: [{ name: "Club de Golf Tequisquiapan" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://clubtequisquiapan.com.mx",
    siteName: "Club de Golf Tequisquiapan",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Club de Golf Tequisquiapan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Club de Golf Tequisquiapan",
    description: "50+ años de tradición golfística en Tequisquiapan, Querétaro.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
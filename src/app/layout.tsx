import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Primrose Ever Care | Home Care Services in Kent",
  description:
    "Compassionate domiciliary home care across North Kent — Dartford, Gravesend, Medway, Maidstone and Swale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

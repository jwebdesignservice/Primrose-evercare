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
  metadataBase: new URL("https://primrose-ever-care.vercel.app"),
  title: {
    default: "Primrose Ever Care | Home Care Services in Kent",
    template: "%s | Primrose Ever Care",
  },
  description:
    "Compassionate domiciliary home care across North Kent — Dartford, Gravesend, Medway, Maidstone and Swale.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Primrose Ever Care",
    title: "Primrose Ever Care | Home Care Services in Kent",
    description:
      "Compassionate domiciliary home care across North Kent — Dartford, Gravesend, Medway, Maidstone and Swale.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Primrose Ever Care — compassionate home care in North Kent",
      },
    ],
  },
  alternates: {
    canonical: "https://primrose-ever-care.vercel.app",
  },
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

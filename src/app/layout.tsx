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
    "Primrose Ever Care provides compassionate, person-centred home care services across North Kent. Personal care, dementia support, companionship and more in Dartford, Gravesend, Medway, Maidstone and Swale. Contact us for a free care assessment.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Primrose Ever Care",
    title: "Primrose Ever Care | Home Care Services in Kent",
    description:
      "Primrose Ever Care provides compassionate, person-centred home care services across North Kent. Personal care, dementia support, companionship and more in Dartford, Gravesend, Medway, Maidstone and Swale. Contact us for a free care assessment.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Primrose Ever Care , compassionate home care in North Kent",
      },
    ],
  },
  alternates: {
    canonical: "https://primrose-ever-care.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Primrose Ever Care",
  description:
    "Compassionate domiciliary home care services across Medway and North Kent, provided by Primrose Ever Care LTD.",
  url: "https://primrose-ever-care.vercel.app",
  logo: "https://primrose-ever-care.vercel.app/logo.png",
  image: "https://primrose-ever-care.vercel.app/images/hero.jpg",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kent",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "Place", name: "Medway" },
    { "@type": "Place", name: "North Kent" },
    { "@type": "Place", name: "Dartford" },
    { "@type": "Place", name: "Gravesend" },
    { "@type": "Place", name: "Maidstone" },
    { "@type": "Place", name: "Swale" },
  ],
  serviceType: "Domiciliary home care",
  priceRange: "££",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

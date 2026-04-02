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
  metadataBase: new URL("https://www.primroseevercare.co.uk"),
  title: {
    default: "Primrose Ever Care | Home Care Services in Kent",
    template: "%s | Primrose Ever Care",
  },
  description:
    "Compassionate home care services across Kent. Personal care, dementia support, companionship and live-in care in Dartford, Gravesend, Medway, Maidstone and Swale. Book a free care assessment today.",
  keywords: [
    "home care Kent",
    "domiciliary care Medway",
    "personal care Dartford",
    "dementia care Gravesend",
    "live-in care Kent",
    "companionship care Maidstone",
    "home care services Swale",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Primrose Ever Care",
    title: "Primrose Ever Care | Home Care Services in Kent",
    description:
      "Compassionate home care services across Kent. Personal care, dementia support, companionship and live-in care in Dartford, Gravesend, Medway, Maidstone and Swale. Book a free care assessment today.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Primrose Ever Care - compassionate home care in Kent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primrose Ever Care | Home Care Services in Kent",
    description:
      "Compassionate home care services across Kent. Personal care, dementia support, companionship and live-in care.",
  },
  alternates: {
    canonical: "https://www.primroseevercare.co.uk",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Primrose Ever Care",
  description:
    "Compassionate domiciliary home care services across Medway and North Kent, provided by Primrose Ever Care LTD.",
  url: "https://www.primroseevercare.co.uk",
  logo: "https://www.primroseevercare.co.uk/logo.png",
  image: "https://www.primroseevercare.co.uk/images/hero.jpg",
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

import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookiesPolicyPage from '@/components/CookiesPolicyPage';

export const metadata: Metadata = {
  title: 'Cookies Policy',
  description: 'Information about how Primrose Ever Care uses cookies on our website.',
  openGraph: {
    title: 'Cookies Policy | Primrose Ever Care',
    description: 'Information about how Primrose Ever Care uses cookies on our website.',
    url: 'https://primrose-ever-care.vercel.app/cookies-policy',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Primrose Ever Care — cookies policy',
      },
    ],
  },
  alternates: {
    canonical: 'https://primrose-ever-care.vercel.app/cookies-policy',
  },
};

export default function CookiesPolicy() {
  return (
    <>
      <Navbar />
      <main>
        <CookiesPolicyPage />
      </main>
      <Footer />
    </>
  );
}

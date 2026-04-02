import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Primrose Ever Care collects, uses and protects your personal information.',
  openGraph: {
    title: 'Privacy Policy | Primrose Ever Care',
    description:
      'How Primrose Ever Care collects, uses and protects your personal information.',
    url: 'https://primrose-ever-care.vercel.app/privacy-policy',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Primrose Ever Care , privacy policy',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.primroseevercare.co.uk/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main>
        <PrivacyPolicyPage />
      </main>
      <Footer />
    </>
  );
}

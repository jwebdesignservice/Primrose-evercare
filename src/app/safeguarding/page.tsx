import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SafeguardingPage from '@/components/SafeguardingPage';

export const metadata: Metadata = {
  title: 'Safeguarding Policy',
  description:
    'Our safeguarding policy , protecting vulnerable adults in our care from abuse, neglect and harm.',
  openGraph: {
    title: 'Safeguarding Policy | Primrose Ever Care',
    description:
      'Our safeguarding policy , protecting vulnerable adults in our care from abuse, neglect and harm.',
    url: 'https://www.primroseevercare.co.uk/safeguarding',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Primrose Ever Care , safeguarding policy',
      },
    ],
  },
  alternates: {
    canonical: 'https://primrose-ever-care.vercel.app/safeguarding',
  },
};

export default function Safeguarding() {
  return (
    <>
      <Navbar />
      <main>
        <SafeguardingPage />
      </main>
      <Footer />
    </>
  );
}

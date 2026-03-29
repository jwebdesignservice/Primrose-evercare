import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AreasWeCoverPage from '@/components/AreasWeCoverPage';

export const metadata: Metadata = {
  title: 'Areas We Cover',
  description:
    'Primrose Ever Care provides home care services across North Kent — including Dartford, Gravesend, Medway, Maidstone and Swale.',
  openGraph: {
    title: 'Areas We Cover | Primrose Ever Care',
    description:
      'Primrose Ever Care provides home care services across North Kent — including Dartford, Gravesend, Medway, Maidstone and Swale.',
    url: 'https://primrose-ever-care.vercel.app/areas-we-cover',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Primrose Ever Care — home care across North Kent',
      },
    ],
  },
  alternates: {
    canonical: 'https://primrose-ever-care.vercel.app/areas-we-cover',
  },
};

export default function AreasWeCover() {
  return (
    <>
      <Navbar />
      <main>
        <AreasWeCoverPage />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComplaintsPage from '@/components/ComplaintsPage';

export const metadata: Metadata = {
  title: 'Complaints Procedure',
  description:
    'Our formal complaints procedure — how to raise a concern or complaint about Primrose Ever Care services.',
  openGraph: {
    title: 'Complaints Procedure | Primrose Ever Care',
    description:
      'Our formal complaints procedure — how to raise a concern or complaint about Primrose Ever Care services.',
    url: 'https://primrose-ever-care.vercel.app/complaints',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Primrose Ever Care — complaints procedure',
      },
    ],
  },
  alternates: {
    canonical: 'https://primrose-ever-care.vercel.app/complaints',
  },
};

export default function Complaints() {
  return (
    <>
      <Navbar />
      <main>
        <ComplaintsPage />
      </main>
      <Footer />
    </>
  );
}

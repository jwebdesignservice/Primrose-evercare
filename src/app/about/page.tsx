import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutPage from '@/components/AboutPage';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Primrose Ever Care , a family-founded domiciliary care provider serving North Kent. Meet our founder Aminah Carew and discover our values.',
  openGraph: {
    title: 'About Us | Primrose Ever Care',
    description:
      'Learn about Primrose Ever Care , a family-founded domiciliary care provider serving North Kent. Meet our founder Aminah Carew and discover our values.',
    url: 'https://www.primroseevercare.co.uk/about',
    images: [
      {
        url: '/images/about-lady.jpg',
        width: 1200,
        height: 630,
        alt: 'Primrose Ever Care , about our care team',
      },
    ],
  },
  alternates: {
    canonical: 'https://primrose-ever-care.vercel.app/about',
  },
};

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}

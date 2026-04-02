import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesPage from '@/components/ServicesPage';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Discover our full range of home care services in Kent , from personal care and dementia support to meal preparation, respite care and more.',
  openGraph: {
    title: 'Our Services | Primrose Ever Care',
    description:
      'Discover our full range of home care services in Kent , from personal care and dementia support to meal preparation, respite care and more.',
    url: 'https://www.primroseevercare.co.uk/services',
    images: [
      {
        url: '/images/care.jpg',
        width: 1200,
        height: 630,
        alt: 'Primrose Ever Care , home care services in Kent',
      },
    ],
  },
  alternates: {
    canonical: 'https://primrose-ever-care.vercel.app/services',
  },
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}

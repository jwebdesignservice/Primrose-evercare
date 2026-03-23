import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesPage from '@/components/ServicesPage';

export const metadata: Metadata = {
  title: 'Our Services | Primrose Ever Care',
  description:
    'Discover our full range of home care services in Kent — from personal care and dementia support to meal preparation, respite care and more.',
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

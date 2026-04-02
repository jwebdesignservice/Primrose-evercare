import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Primrose Ever Care. Book a free care assessment or enquire about our home care services in Medway.',
  openGraph: {
    title: 'Contact Us | Primrose Ever Care',
    description: 'Get in touch with Primrose Ever Care. Book a free care assessment or enquire about our home care services in Kent.',
    url: 'https://www.primroseevercare.co.uk/contact',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Primrose Ever Care',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.primroseevercare.co.uk/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us | Primrose Ever Care',
  description: 'Get in touch with Primrose Ever Care. Book a free care assessment or enquire about our home care services in Medway.',
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

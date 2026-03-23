import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutPage from '@/components/AboutPage';

export const metadata: Metadata = {
  title: 'About Us | Primrose Ever Care',
  description:
    'Learn about Primrose Ever Care — a Medway-based domiciliary care provider committed to compassionate, dignity-first home care in Rochester, Chatham, Gillingham, Strood and Rainham.',
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

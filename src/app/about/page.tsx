import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutPage from '@/components/AboutPage';

export const metadata: Metadata = {
  title: 'About Us | Primrose Ever Care',
  description:
    'Learn about Primrose Ever Care — a family-founded domiciliary care provider serving North Kent. Meet our founder Aminah Carew and discover our values.',
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

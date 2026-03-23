import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookiesPolicyPage from '@/components/CookiesPolicyPage';

export const metadata: Metadata = {
  title: 'Cookies Policy | Primrose Ever Care',
  description: 'Information about how Primrose Ever Care uses cookies on our website.',
};

export default function CookiesPolicy() {
  return (
    <>
      <Navbar />
      <main>
        <CookiesPolicyPage />
      </main>
      <Footer />
    </>
  );
}

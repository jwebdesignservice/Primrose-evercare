import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AreasWeCoverPage from '@/components/AreasWeCoverPage';

export const metadata: Metadata = {
  title: 'Areas We Cover | Primrose Ever Care',
  description:
    'Primrose Ever Care provides home care services across North Kent — including Dartford, Gravesend, Medway, Maidstone and Swale.',
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

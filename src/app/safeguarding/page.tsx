import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SafeguardingPage from '@/components/SafeguardingPage';

export const metadata: Metadata = {
  title: 'Safeguarding Policy | Primrose Ever Care',
  description:
    'Our safeguarding policy — protecting vulnerable adults in our care from abuse, neglect and harm.',
};

export default function Safeguarding() {
  return (
    <>
      <Navbar />
      <main>
        <SafeguardingPage />
      </main>
      <Footer />
    </>
  );
}

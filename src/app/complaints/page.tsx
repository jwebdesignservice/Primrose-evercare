import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComplaintsPage from '@/components/ComplaintsPage';

export const metadata: Metadata = {
  title: 'Complaints Procedure | Primrose Ever Care',
  description:
    'Our formal complaints procedure — how to raise a concern or complaint about Primrose Ever Care services.',
};

export default function Complaints() {
  return (
    <>
      <Navbar />
      <main>
        <ComplaintsPage />
      </main>
      <Footer />
    </>
  );
}

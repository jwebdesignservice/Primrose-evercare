import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Primrose Ever Care',
  description:
    'How Primrose Ever Care collects, uses and protects your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main>
        <PrivacyPolicyPage />
      </main>
      <Footer />
    </>
  );
}

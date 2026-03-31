'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-semibold text-[#1E293B] mb-3">{title}</h2>
      <div className="space-y-3 text-[#1E293B]/70 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-heading text-lg font-semibold text-[#1E293B] mb-2">{title}</h3>
      <div className="space-y-2 text-[#1E293B]/70 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#E8A4A0]/15 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-5">
              Legal
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[#1E293B] mb-4 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-[#1E293B]/55 text-base">Last updated: March 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10"
        >

          <Section title="1. Who We Are">
            <p>
              Primrose Ever Care (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a domiciliary home care provider
              operating in North Kent, England. We are the data controller for the personal
              information we collect about you.
            </p>
            <p>
              <strong>Contact:</strong>{' '}
              <a href="mailto:enquires@primroseevercare.co.uk" className="text-[#4A7FA5] hover:text-[#D4887F] transition-colors">
                enquires@primroseevercare.co.uk
              </a>{' '}
              | <a href="tel:07852559816" className="text-[#4A7FA5] hover:text-[#D4887F] transition-colors">07852 559816</a>
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <Sub title="2.1 Information you give us">
              <p>When you contact us, book an assessment, or use our services, we may collect:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Name, address, phone number and email address</li>
                <li>Details of care needs and medical history (for service users)</li>
                <li>Emergency contact information</li>
                <li>Next of kin and family details</li>
                <li>Financial information where relevant to care funding</li>
              </ul>
            </Sub>
            <Sub title="2.2 Information we collect automatically">
              <p>When you visit our website we may collect:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website</li>
              </ul>
              <p>See our <Link href="/cookies-policy" className="text-[#4A7FA5] underline underline-offset-2 hover:text-[#D4887F] transition-colors">Cookies Policy</Link> for more detail.</p>
            </Sub>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use your personal information to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Provide and manage home care services</li>
              <li>Communicate with you about your care or enquiry</li>
              <li>Maintain care records and care plans</li>
              <li>Comply with legal and regulatory obligations (including CQC requirements)</li>
              <li>Respond to complaints or concerns</li>
              <li>Improve our website and services</li>
            </ul>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <p>We process your personal data on the following legal bases:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Contract:</strong> to fulfil our service agreement with you</li>
              <li><strong>Legal obligation:</strong> to comply with care regulations and safeguarding law</li>
              <li><strong>Legitimate interests:</strong> to manage and improve our service</li>
              <li><strong>Consent:</strong> where you have given explicit consent (e.g. marketing communications)</li>
              <li><strong>Vital interests:</strong> to protect the health and safety of a service user</li>
            </ul>
            <p>
              Where we process special category data (such as health information), we rely on
              Article 9(2)(h) of the UK GDPR, processing necessary for the provision of social care.
            </p>
          </Section>

          <Section title="5. Who We Share Your Information With">
            <p>
              We do not sell, rent or trade your personal information. We may share it with:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Healthcare professionals involved in your care (GPs, hospitals, district nurses)</li>
              <li>Local authority social services where relevant to your care funding or safeguarding</li>
              <li>The Care Quality Commission (CQC) for regulatory purposes</li>
              <li>Our staff and carers, on a need-to-know basis</li>
              <li>IT service providers who help us operate our systems (under data processing agreements)</li>
            </ul>
            <p>
              We will only share the minimum information necessary and always in accordance with this policy.
            </p>
          </Section>

          <Section title="6. How Long We Keep Your Information">
            <p>
              We retain personal data for as long as necessary to provide our services and comply
              with our legal obligations. For care records, this is generally:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Adult care records: minimum 8 years after the last entry</li>
              <li>Financial records: 7 years for tax purposes</li>
              <li>Enquiry and contact data: up to 2 years if no service commenced</li>
            </ul>
            <p>After these periods, data is securely deleted or anonymised.</p>
          </Section>

          <Section title="7. Your Rights">
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Access:</strong> request a copy of the personal data we hold about you</li>
              <li><strong>Rectification:</strong> ask us to correct inaccurate information</li>
              <li><strong>Erasure:</strong> request deletion of your data (subject to legal obligations)</li>
              <li><strong>Restriction:</strong> ask us to limit how we use your data</li>
              <li><strong>Portability:</strong> receive your data in a structured, machine-readable format</li>
              <li><strong>Object:</strong> object to processing based on legitimate interests</li>
              <li><strong>Withdraw consent:</strong> where processing is based on consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:enquires@primroseevercare.co.uk" className="text-[#4A7FA5] hover:text-[#D4887F] transition-colors">
                enquires@primroseevercare.co.uk
              </a>.
              We will respond within one month.
            </p>
          </Section>

          <Section title="8. Data Security">
            <p>
              We take appropriate technical and organisational measures to protect your personal
              information against unauthorised access, loss or misuse. All staff are trained in
              data protection and confidentiality as part of their induction.
            </p>
          </Section>

          <Section title="9. Complaints to the ICO">
            <p>
              If you are unhappy with how we have handled your personal data, you have the right
              to lodge a complaint with the Information Commissioner&apos;s Office (ICO):
            </p>
            <ul className="list-none space-y-1">
              <li><strong>Website:</strong>{' '}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#4A7FA5] underline underline-offset-2 hover:text-[#D4887F] transition-colors">ico.org.uk</a>
              </li>
              <li><strong>Phone:</strong> 0303 123 1113</li>
            </ul>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated &ldquo;last updated&rdquo; date. We encourage you to review this
              policy periodically.
            </p>
          </Section>

          <div className="pt-4 border-t border-gray-100 flex gap-6">
            <Link href="/" className="text-[#4A7FA5] text-sm hover:text-[#D4887F] transition-colors">
              ← Back to home
            </Link>
            <Link href="/cookies-policy" className="text-[#4A7FA5] text-sm hover:text-[#D4887F] transition-colors">
              Cookies Policy →
            </Link>
          </div>

        </motion.div>
      </section>
    </>
  );
}

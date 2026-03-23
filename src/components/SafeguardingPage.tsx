'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ShieldCheck, AlertTriangle, Phone, CheckCircle2 } from 'lucide-react';
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

const typesOfAbuse = [
  'Physical abuse',
  'Emotional or psychological abuse',
  'Sexual abuse',
  'Financial or material abuse',
  'Neglect and acts of omission',
  'Discriminatory abuse',
  'Organisational or institutional abuse',
  'Domestic abuse',
  'Modern slavery',
  'Self-neglect',
];

const commitments = [
  'Treat every person with dignity, respect and compassion',
  'Create an environment where people feel safe to raise concerns',
  'Ensure all staff complete safeguarding training before working with clients',
  'Conduct DBS (Disclosure and Barring Service) checks on all staff',
  'Follow robust safer recruitment procedures',
  'Respond promptly to any safeguarding concern or allegation',
  'Work in partnership with the local authority, CQC and other statutory bodies',
  'Maintain confidential and accurate records of all safeguarding concerns',
];

export default function SafeguardingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#E8A4A0]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full bg-[#4A7FA5]/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-5">
              Legal
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[#1E293B] mb-4 leading-tight">
              Safeguarding Policy
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

          {/* Statement */}
          <div className="bg-[#EBF4FB] border border-[#4A7FA5]/20 rounded-2xl p-7 flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#4A7FA5]/15 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6 text-[#4A7FA5]" strokeWidth={1.8} />
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-[#1E293B] mb-2">Our Safeguarding Statement</h2>
              <p className="text-[#1E293B]/70 text-sm leading-relaxed">
                Primrose Ever Care is committed to safeguarding and promoting the welfare of all
                adults in our care. We believe that every person has the right to live free from
                abuse, neglect and exploitation. Safeguarding is everyone&apos;s responsibility — not
                just a policy on paper.
              </p>
            </div>
          </div>

          <Section title="1. Purpose of This Policy">
            <p>
              This policy sets out our approach to safeguarding adults at risk. It applies to all
              staff, volunteers and anyone acting on behalf of Primrose Ever Care. It is reviewed
              annually or following any significant safeguarding incident.
            </p>
          </Section>

          <Section title="2. Legal Framework">
            <p>This policy is underpinned by the following legislation and guidance:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>The Care Act 2014</li>
              <li>The Mental Capacity Act 2005</li>
              <li>The Human Rights Act 1998</li>
              <li>The Equality Act 2010</li>
              <li>The Health and Social Care Act 2008 (Regulated Activities) Regulations 2014</li>
              <li>CQC Fundamental Standards</li>
              <li>Local Safeguarding Adults Board (SAB) procedures for Kent</li>
            </ul>
          </Section>

          <Section title="3. What Is Abuse?">
            <p>
              Abuse is a violation of an individual&apos;s human and civil rights by any other person or
              persons. It can take many forms, including:
            </p>
            <div className="grid grid-cols-2 gap-2 mt-3">
              {typesOfAbuse.map((type) => (
                <div key={type} className="flex items-center gap-2 text-sm text-[#1E293B]/70">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-[#D4887F]" strokeWidth={2} />
                  {type}
                </div>
              ))}
            </div>
          </Section>

          <Section title="4. Our Commitments">
            <p>To fulfil our safeguarding duty, Primrose Ever Care will:</p>
            <ul className="mt-2 space-y-2">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1E293B]/70">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#4A7FA5]" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="5. Recognising Signs of Abuse">
            <p>
              Staff are trained to recognise indicators of potential abuse, including but not
              limited to: unexplained injuries, sudden changes in behaviour, withdrawal, fearfulness,
              unexplained financial transactions, or poor living conditions.
            </p>
            <p>
              Any concern — however small — will be taken seriously and documented.
            </p>
          </Section>

          <Section title="6. Reporting a Concern">
            <p>
              If a member of staff, a client or a family member has a safeguarding concern, it
              must be reported immediately. We have a designated safeguarding lead who is responsible
              for receiving and acting on concerns.
            </p>
            <p>
              <strong>Internal reporting:</strong> Contact the safeguarding lead at Primrose Ever Care
              immediately by phone or in writing.
            </p>
            <p>
              <strong>External reporting:</strong> Where there is immediate risk of harm, contact the
              emergency services (999). Concerns about an adult at risk in Kent should also be
              reported to Kent Adult Social Services.
            </p>
            <div className="mt-4 bg-[#FEF3F2] border border-[#E8A4A0]/30 rounded-xl p-5 space-y-2">
              <p className="font-semibold text-[#1E293B] text-sm">Key Contacts</p>
              <ul className="space-y-1 text-sm text-[#1E293B]/70">
                <li><strong>Emergency:</strong> 999</li>
                <li><strong>Kent Adult Social Services:</strong> 03000 41 61 61</li>
                <li>
                  <strong>Primrose Ever Care:</strong>{' '}
                  <a href="tel:07852559816" className="text-[#4A7FA5] hover:text-[#D4887F] transition-colors">07852 559816</a>
                  {' '}|{' '}
                  <a href="mailto:enquires@primroseevercare.co.uk" className="text-[#4A7FA5] hover:text-[#D4887F] transition-colors">
                    enquires@primroseevercare.co.uk
                  </a>
                </li>
                <li>
                  <strong>CQC (to report concerns about a provider):</strong>{' '}
                  <a href="https://www.cqc.org.uk/give-feedback-on-care" target="_blank" rel="noopener noreferrer" className="text-[#4A7FA5] underline underline-offset-2 hover:text-[#D4887F] transition-colors">
                    cqc.org.uk
                  </a>{' '}| 03000 616161
                </li>
              </ul>
            </div>
          </Section>

          <Section title="7. Confidentiality and Information Sharing">
            <p>
              Safeguarding concerns are handled with appropriate confidentiality. However,
              the safety and welfare of the individual will always take precedence over
              confidentiality. We will share information with relevant authorities where there
              is a safeguarding risk, even without the individual&apos;s consent if necessary.
            </p>
          </Section>

          <Section title="8. Mental Capacity and Consent">
            <p>
              We respect the right of adults to make their own decisions. Where a person lacks
              capacity to make a specific decision, we will act in their best interests in
              accordance with the Mental Capacity Act 2005 and involve appropriate parties
              (family, advocates, or the Court of Protection where required).
            </p>
          </Section>

          <Section title="9. Staff Training and Responsibilities">
            <p>
              All Primrose Ever Care staff must:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Complete safeguarding adults training before working unsupervised with clients</li>
              <li>Refresh safeguarding training annually</li>
              <li>Report any concern immediately — never ignore a suspicion</li>
              <li>Not investigate allegations themselves — this is the role of the statutory agencies</li>
              <li>Maintain accurate, contemporaneous records of any concerns observed</li>
            </ul>
          </Section>

          <Section title="10. Policy Review">
            <p>
              This policy will be reviewed annually or sooner if there are changes to legislation,
              guidance or following a significant safeguarding event. All staff will be notified
              of any updates.
            </p>
          </Section>

          {/* Emergency banner */}
          <div className="bg-[#FEF3F2] border-l-4 border-[#D4887F] rounded-xl p-5 flex gap-4">
            <Phone className="w-5 h-5 text-[#D4887F] shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <p className="font-semibold text-[#1E293B] text-sm mb-1">In an emergency, always call 999 first.</p>
              <p className="text-[#1E293B]/60 text-xs leading-relaxed">
                For non-emergency safeguarding concerns, contact Kent Adult Social Services on{' '}
                <a href="tel:03000416161" className="text-[#4A7FA5] hover:text-[#D4887F] transition-colors">03000 41 61 61</a>{' '}
                or Primrose Ever Care directly.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex gap-6">
            <Link href="/" className="text-[#4A7FA5] text-sm hover:text-[#D4887F] transition-colors">
              ← Back to home
            </Link>
            <Link href="/complaints" className="text-[#4A7FA5] text-sm hover:text-[#D4887F] transition-colors">
              Complaints Procedure →
            </Link>
          </div>

        </motion.div>
      </section>
    </>
  );
}

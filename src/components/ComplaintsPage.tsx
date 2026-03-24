'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MessageSquare, Phone, Mail, ClipboardList, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const steps = [
  {
    step: '01',
    title: 'Raise Your Concern Informally',
    icon: MessageSquare,
    color: 'text-[#D4887F]',
    bg: 'bg-[#FEF3F2]',
    description:
      'In the first instance, we encourage you to raise your concern directly with your care manager or the member of staff involved. Many concerns can be resolved quickly and informally at this stage.',
    timeframe: 'Aim: resolved within 2 working days',
  },
  {
    step: '02',
    title: 'Submit a Formal Complaint',
    icon: ClipboardList,
    color: 'text-[#4A7FA5]',
    bg: 'bg-[#EBF4FB]',
    description:
      'If your concern is not resolved informally, or if you prefer to make a formal complaint, please contact us in writing by email or post, or by calling us directly. Please include your name, contact details, the nature of your complaint, and any relevant dates.',
    timeframe: 'Acknowledgement: within 2 working days of receipt',
  },
  {
    step: '03',
    title: 'Investigation',
    icon: AlertCircle,
    color: 'text-[#9B7EC8]',
    bg: 'bg-[#F3EEF8]',
    description:
      'Your complaint will be investigated thoroughly and impartially by a senior member of the Primrose Ever Care team. We may need to contact you for further information during this process. You will be kept informed of progress.',
    timeframe: 'Full response: within 20 working days',
  },
  {
    step: '04',
    title: 'Resolution & Response',
    icon: CheckCircle2,
    color: 'text-[#7B9E7B]',
    bg: 'bg-[#EEF5EE]',
    description:
      'Once the investigation is complete, we will provide you with a full written response detailing our findings, any actions taken, and any changes we will make as a result of your complaint. We take all feedback seriously as an opportunity to improve.',
    timeframe: 'Written response provided with outcome',
  },
];

export default function ComplaintsPage() {
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
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[#1E293B] mb-5 leading-tight">
              Complaints Procedure
            </h1>
            <p className="text-[#1E293B]/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We are committed to providing the highest standard of care. If you are unhappy with
              any aspect of our service, we want to hear from you so we can put it right.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-[#FEF3F2] border border-[#E8A4A0]/30 rounded-2xl p-7"
          >
            <h2 className="font-heading text-2xl font-semibold text-[#1E293B] mb-3">Our Commitment to You</h2>
            <p className="text-[#1E293B]/65 text-sm leading-relaxed">
              At Primrose Ever Care, we treat every complaint seriously and with the respect it deserves.
              We will always:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                'Acknowledge your complaint promptly',
                'Investigate fully, fairly and impartially',
                'Keep you informed throughout the process',
                'Provide a clear written response with our findings',
                'Use complaints as an opportunity to learn and improve',
                'Treat you with courtesy and without prejudice at every stage',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1E293B]/70">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#D4887F]" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-4">
              The Process
            </span>
            <h2 className="font-heading text-4xl font-semibold text-[#1E293B]">
              How to Make a Complaint
            </h2>
          </motion.div>

          <div className="space-y-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 flex gap-6"
                >
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${s.color}`} strokeWidth={1.8} />
                    </div>
                    <span className={`font-heading text-xs font-bold ${s.color}`}>{s.step}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#1E293B] mb-2">{s.title}</h3>
                    <p className="text-[#1E293B]/65 text-sm leading-relaxed mb-3">{s.description}</p>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F0F7FF] text-[#4A7FA5]">
                      {s.timeframe}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact to complain */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-3xl font-semibold text-[#1E293B] mb-8 text-center">
              How to Contact Us
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: Phone,
                  label: 'By Phone',
                  value: '07852 559816',
                  href: 'tel:07852559816',
                  color: 'text-[#D4887F]',
                  bg: 'bg-[#FEF3F2]',
                },
                {
                  icon: Mail,
                  label: 'By Email',
                  value: 'enquires@primroseevercare.co.uk',
                  href: 'mailto:enquires@primroseevercare.co.uk',
                  color: 'text-[#4A7FA5]',
                  bg: 'bg-[#EBF4FB]',
                },
                {
                  icon: ClipboardList,
                  label: 'Online Form',
                  value: 'Use our contact form',
                  href: '/contact',
                  color: 'text-[#7B9E7B]',
                  bg: 'bg-[#EEF5EE]',
                },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex flex-col items-center text-center gap-3 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${c.color}`} strokeWidth={1.8} />
                    </div>
                    <p className="font-semibold text-[#1E293B] text-sm">{c.label}</p>
                    <p className={`text-xs ${c.color} break-all`}>{c.value}</p>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Escalation */}
      <section className="py-16 bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8 text-[#1E293B]/70 text-sm leading-relaxed"
          >
            <div>
              <h2 className="font-heading text-2xl font-semibold text-[#1E293B] mb-3">
                If You Are Not Satisfied
              </h2>
              <p>
                If you are not satisfied with the outcome of your complaint, or if you feel your
                complaint has not been handled appropriately, you have the right to escalate
                your concern to an external body.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#1E293B] mb-1">
                  Care Quality Commission (CQC)
                </h3>
                <p>
                  The CQC is the independent regulator of health and social care in England.
                  You can contact them to raise a concern about a regulated care provider.
                </p>
                <ul className="mt-2 space-y-1">
                  <li><strong>Website:</strong>{' '}
                    <a href="https://www.cqc.org.uk/give-feedback-on-care" target="_blank" rel="noopener noreferrer" className="text-[#4A7FA5] underline underline-offset-2 hover:text-[#D4887F] transition-colors">
                      cqc.org.uk/give-feedback-on-care
                    </a>
                  </li>
                  <li><strong>Phone:</strong> 03000 616161</li>
                </ul>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-heading text-lg font-semibold text-[#1E293B] mb-1">
                  Kent County Council Adult Safeguarding Team
                </h3>
                <p>
                  If your concern involves a safeguarding matter or potential abuse or neglect,
                  you can contact the Kent County Council Adult Safeguarding Team directly.
                </p>
                <ul className="mt-2 space-y-1">
                  <li><strong>Phone:</strong> 03000 41 61 61</li>
                  <li><strong>Emergency (out of hours):</strong> 03000 41 91 91</li>
                  <li><strong>Website:</strong>{' '}
                    <a href="https://www.kent.gov.uk/social-care-and-health/adult-social-care/report-a-concern-about-an-adult" target="_blank" rel="noopener noreferrer" className="text-[#4A7FA5] underline underline-offset-2 hover:text-[#D4887F] transition-colors">
                      kent.gov.uk
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-[#1E293B] mb-3">
                Confidentiality
              </h2>
              <p>
                All complaints are handled in strict confidence. Information will only be shared
                with those who need to know in order to investigate and respond to your complaint.
                Making a complaint will not affect the care you or your loved one receives.
              </p>
              <p className="mt-3">
                All information provided during the complaints process will be managed in accordance
                with the <strong>UK GDPR</strong> and the <strong>Data Protection Act 2018</strong>.
                Please see our{' '}
                <a href="/privacy-policy" className="text-[#4A7FA5] underline underline-offset-2 hover:text-[#D4887F] transition-colors">
                  Privacy Policy
                </a>{' '}
                for further details.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex gap-6">
              <Link href="/" className="text-[#4A7FA5] text-sm hover:text-[#D4887F] transition-colors">
                ← Back to home
              </Link>
              <Link href="/contact" className="text-[#4A7FA5] text-sm hover:text-[#D4887F] transition-colors">
                Contact us →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

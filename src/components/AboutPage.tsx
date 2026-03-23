'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  Shield,
  Star,
  Users,
  CheckCircle2,
  Award,
  Clock,
  Handshake,
} from 'lucide-react';
import Link from 'next/link';
import type { Variants } from 'framer-motion';

/* ─── Animations ───────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

/* ─── Values ───────────────────────────────────────────── */

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    color: 'text-[#D4887F]',
    bg: 'bg-[#FEF3F2]',
    description:
      'We genuinely care about the people we support. Every visit is carried out with warmth, patience and a real commitment to wellbeing.',
  },
  {
    icon: Shield,
    title: 'Dignity',
    color: 'text-[#4A7FA5]',
    bg: 'bg-[#EBF4FB]',
    description:
      'We treat everyone we care for as an individual — not a task list. Privacy, respect and personal choice are never compromised.',
  },
  {
    icon: Star,
    title: 'Quality',
    color: 'text-[#C0863A]',
    bg: 'bg-[#FEF6EE]',
    description:
      'High standards aren\'t a selling point — they\'re a baseline. We recruit carefully, train thoroughly and hold ourselves accountable.',
  },
  {
    icon: Handshake,
    title: 'Reliability',
    color: 'text-[#7B9E7B]',
    bg: 'bg-[#EEF5EE]',
    description:
      'Our clients and their families depend on us. We show up when we say we will, do what we say we\'ll do, and communicate clearly.',
  },
];

/* ─── Why home care points ─────────────────────────────── */

const whyHomeCare = [
  'Stay in familiar surroundings — your own home, your own routines',
  'One-to-one attention that a care home simply cannot replicate',
  'Flexible support — from a single visit a week to full live-in care',
  'Family stays close and involved in the care process',
  'Independence is supported, not replaced',
  'Significantly reduces the risk of hospital readmission',
];

/* ─── Stats ────────────────────────────────────────────── */

const stats = [
  { icon: Users, value: 'Person-centred', label: 'care plans for every client' },
  { icon: Clock, value: 'Flexible hours', label: 'from 1 hour to live-in' },
  { icon: Award, value: 'CQC registered', label: 'regulated provider' },
  { icon: CheckCircle2, value: 'Medway-based', label: 'local team, local knowledge' },
];

/* ─── Component ────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#E8A4A0]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full bg-[#4A7FA5]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-5">
              Our Story
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[#1E293B] mb-5 leading-tight">
              About Primrose Ever Care
            </h1>
            <p className="text-[#1E293B]/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A Medway-based home care provider built on the belief that everyone deserves to grow older
              with dignity, comfort and genuine human connection — in the place they call home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#EBF4FB] text-[#4A7FA5] mb-5">
                Who We Are
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] mb-6 leading-tight">
                Care built on trust, not just training
              </h2>
              <div className="space-y-4 text-[#1E293B]/65 text-base leading-relaxed">
                <p>
                  Primrose Ever Care was founded with a clear purpose: to provide the kind of home care
                  that families can genuinely rely on — attentive, consistent and delivered with real heart.
                </p>
                <p>
                  We work with individuals and families across Medway, including Rochester, Chatham,
                  Gillingham, Strood and Rainham. Whether someone needs a few hours of support a week
                  or round-the-clock live-in care, we build a plan around their life — not a standard template.
                </p>
                <p>
                  Our carers are carefully selected, fully trained and genuinely invested in the people
                  they support. We don&apos;t just fill rotas — we build relationships.
                </p>
              </div>
            </motion.div>

            {/* Stats panel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
              className="grid grid-cols-2 gap-5"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    className="bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF] rounded-2xl p-6 flex flex-col gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E8A4A0]/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#D4887F]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="font-heading text-lg font-semibold text-[#1E293B] leading-tight">
                        {stat.value}
                      </p>
                      <p className="text-sm text-[#1E293B]/55 mt-0.5">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-4">
              What We Stand For
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] leading-tight">
              Our values
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${v.color}`} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#1E293B] mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-[#1E293B]/60 leading-relaxed">{v.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why home care */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Points */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
              className="order-2 lg:order-1 flex flex-col gap-4"
            >
              {whyHomeCare.map((point) => (
                <motion.div
                  key={point}
                  variants={fadeUp}
                  className="flex items-start gap-4 bg-[#FAFAFA] rounded-xl px-5 py-4 border border-gray-100"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-[#D4887F] mt-0.5 shrink-0"
                    strokeWidth={2}
                  />
                  <p className="text-sm text-[#1E293B]/70 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#EEF5EE] text-[#7B9E7B] mb-5">
                Why Home Care
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] mb-5 leading-tight">
                Better outcomes start at home
              </h2>
              <p className="text-[#1E293B]/60 text-base leading-relaxed">
                Research consistently shows that people recover faster, stay healthier and live longer
                when they remain in a familiar environment. Home care isn&apos;t a compromise — for most
                people, it&apos;s the better option. We&apos;re here to make it possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CQC */}
      <section className="py-16 bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 lg:px-8"
        >
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-7">
            <div className="w-14 h-14 rounded-2xl bg-[#EBF4FB] flex items-center justify-center shrink-0">
              <Award className="w-7 h-7 text-[#4A7FA5]" strokeWidth={1.7} />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold text-[#1E293B] mb-2">
                Regulated by the CQC
              </h3>
              <p className="text-[#1E293B]/60 text-base leading-relaxed">
                Primrose Ever Care is registered with the Care Quality Commission (CQC) — the independent
                regulator of health and social care in England. This means our services are subject to
                regular inspection and must meet nationally set standards for safety and quality.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] mb-5">
            Ready to find out more?
          </h2>
          <p className="text-[#1E293B]/60 text-lg mb-8">
            We offer a free, no-obligation care assessment. We&apos;ll come to you, listen, and recommend
            exactly the right level of support — no pressure, no jargon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold text-white
              bg-gradient-to-r from-[#E8A4A0] to-[#D4887F] shadow-sm
              hover:shadow-[0_0_28px_rgba(232,164,160,0.55)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a Free Care Assessment
          </Link>
        </motion.div>
      </section>
    </>
  );
}

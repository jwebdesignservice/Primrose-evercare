'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Heart, ShieldCheck, Users, Star, CheckCircle2, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

/* ─── Animations ─────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const pillVariant: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

/* ─── Data ───────────────────────────────────────────── */

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description:
      'We treat every person in our care with genuine warmth and kindness. Care is not just a job to us — it is a calling.',
    color: 'text-[#D4887F]',
    bg: 'bg-[#FEF3F2]',
  },
  {
    icon: ShieldCheck,
    title: 'Dignity & Respect',
    description:
      'Every individual deserves to feel valued. We protect privacy, honour choices, and uphold the dignity of those we serve.',
    color: 'text-[#4A7FA5]',
    bg: 'bg-[#EBF4FB]',
  },
  {
    icon: Users,
    title: 'Person-Centred Care',
    description:
      'No two people are the same. We listen carefully and build care plans that truly reflect the needs and wishes of each individual.',
    color: 'text-[#7B9E7B]',
    bg: 'bg-[#EEF5EE]',
  },
  {
    icon: Star,
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards — from the quality of care we deliver to the way we communicate with families.',
    color: 'text-[#9B7EC8]',
    bg: 'bg-[#F3EEF8]',
  },
];

const commitments = [
  'DBS checked carers — every member of our team',
  'Fully insured and operating to CQC standards',
  'Regular carer check-ins and quality reviews',
  'Open, honest communication with families at all times',
  'Emergency on-call support when you need it',
  'Consistent carers so your loved one builds trust',
];

const stats = [
  { value: '9', label: 'Services Offered' },
  { value: '11+', label: 'Areas Across Kent' },
  { value: 'CQC', label: 'Registration In Progress' },
  { value: '100%', label: 'Compassionate Care' },
];

/* ─── Component ──────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#E8A4A0]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full bg-[#4A7FA5]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-5">
              Who We Are
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[#1E293B] mb-5 leading-tight">
              About Primrose Ever Care
            </h1>
            <p className="text-[#1E293B]/60 text-lg md:text-xl leading-relaxed">
              A family-founded home care provider built on compassion, integrity and an unwavering
              commitment to helping people live well at home — in North Kent and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-[#E8A4A0]/10 blur-2xl scale-105" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#E8A4A0]/20">
                <Image
                  src="/images/about-lady.jpg"
                  alt="Aminah Carew — Founder of Primrose Ever Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/15 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#E8A4A0]/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#D4887F]" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1E293B]">Founded with Purpose</p>
                  <p className="text-[10px] text-[#1E293B]/50">Care from the heart</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] mb-6 leading-tight">
                Care That Comes<br />From the Heart
              </h2>
              <div className="space-y-4 text-[#1E293B]/65 text-base leading-relaxed">
                <p>
                  Primrose Ever Care was founded by <strong className="text-[#1E293B]">Aminah Carew</strong> with a simple but powerful belief:
                  everyone deserves to grow older with dignity, in the place they call home.
                </p>
                <p>
                  Having seen first-hand the difference that truly compassionate, consistent care can make —
                  and equally, the harm that poor care can cause — Aminah set out to create a service that
                  puts people genuinely first. Not on paper. In practice, every day.
                </p>
                <p>
                  Based in North Kent, we serve communities across the region — from Dartford and Gravesend
                  to the Medway Towns, Maidstone and Swale. Every carer we work with shares our values,
                  and every care plan we create is built around the individual — their routines, their
                  preferences, their life.
                </p>
                <p>
                  We are currently working towards full CQC registration and are committed to operating
                  to the highest regulated standards from day one.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-[#E8A4A0] via-[#c08aa0] to-[#4A7FA5]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <p className="font-heading text-6xl md:text-7xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-white/75 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Our Values ───────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-4">
              What Drives Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] mb-4">
              Our Values
            </h2>
            <p className="text-[#1E293B]/60 text-lg max-w-xl mx-auto">
              These are not just words on a wall. They are the principles that guide every interaction,
              every visit and every decision we make.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={pillVariant}
                  whileHover={{ y: -6 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-7 flex flex-col gap-4
                    border-t-4 border-t-transparent hover:border-t-[#E8A4A0] transition-all duration-300 hover:shadow-xl"
                >
                  <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${v.color}`} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#1E293B] mb-2">{v.title}</h3>
                    <p className="text-[#1E293B]/60 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Our Commitments ──────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-4">
                Our Promise
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] mb-6 leading-tight">
                What You Can<br />Always Expect
              </h2>
              <p className="text-[#1E293B]/60 text-base leading-relaxed mb-8">
                When you choose Primrose Ever Care, you are not just choosing a service —
                you are choosing a team that takes your trust seriously. Here is what we commit to, every time.
              </p>
              <ul className="space-y-4">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1E293B]/70 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#D4887F]" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-[#4A7FA5]/10 blur-2xl scale-105" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#4A7FA5]/10">
                <Image
                  src="/images/about-carer.jpg"
                  alt="Our commitment to quality care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/10 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#4A7FA5]/15 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#4A7FA5]" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1E293B]">DBS Checked</p>
                  <p className="text-[10px] text-[#1E293B]/50">All staff, every time</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #E8A4A0 0%, #c08aa0 40%, #4A7FA5 100%)' }}
        />
        {[
          { size: 200, top: '-60px', left: '-80px', delay: 0, duration: 6 },
          { size: 300, top: '40px', right: '-100px', delay: 1, duration: 8 },
          { size: 150, bottom: '-40px', left: '30%', delay: 0.5, duration: 7 },
        ].map((c, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/10 pointer-events-none"
            style={{ width: c.size, height: c.size, top: c.top, left: (c as {left?: string}).left, right: (c as {right?: string}).right, bottom: (c as {bottom?: string}).bottom }}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: c.duration, repeat: Infinity, ease: 'easeInOut', delay: c.delay }}
          />
        ))}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight">
            Ready to Talk?
          </h2>
          <p className="text-white/85 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto">
            We would love to learn about your situation and discuss how we can help.
            Our free care assessment is a relaxed, no-obligation conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1E293B] font-semibold
                px-8 py-4 rounded-full hover:bg-[#FEF3F2] transition-colors duration-200 text-sm shadow-md"
            >
              Book Free Assessment
            </Link>
            <a
              href="tel:07852559816"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold
                px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200 text-sm"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              Call 07852 559816
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

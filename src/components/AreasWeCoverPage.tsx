'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, Phone, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const pillVariant: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

/* ─── Area data ─────────────────────────────────────── */

const areaGroups = [
  {
    region: 'Dartford & Gravesham',
    color: 'text-[#D4887F]',
    bg: 'bg-[#FEF3F2]',
    accent: '#D4887F',
    towns: [
      { name: 'Dartford', detail: 'Town centre and surrounding areas' },
      { name: 'Gravesend', detail: 'Including Northfleet and Gravesham' },
    ],
  },
  {
    region: 'Medway Towns',
    color: 'text-[#4A7FA5]',
    bg: 'bg-[#EBF4FB]',
    accent: '#4A7FA5',
    towns: [
      { name: 'Rochester', detail: 'Including surrounding villages' },
      { name: 'Strood', detail: 'West Medway' },
      { name: 'Chatham', detail: 'Town centre and surrounding streets' },
      { name: 'Gillingham', detail: 'Including Rainham Road corridor' },
      { name: 'Rainham', detail: 'Including Lower and Upper Rainham' },
    ],
  },
  {
    region: 'Maidstone',
    color: 'text-[#7B9E7B]',
    bg: 'bg-[#EEF5EE]',
    accent: '#7B9E7B',
    towns: [
      { name: 'Maidstone', detail: 'Town centre and borough' },
    ],
  },
  {
    region: 'Swale',
    color: 'text-[#9B7EC8]',
    bg: 'bg-[#F3EEF8]',
    accent: '#9B7EC8',
    towns: [
      { name: 'Sittingbourne', detail: 'Including Milton Regis' },
      { name: 'Isle of Sheppey', detail: 'Including Sheerness and Minster' },
    ],
  },
];

const allTowns = areaGroups.flatMap((g) => g.towns.map((t) => t.name));

const whyLocal = [
  'We know the roads and communities intimately',
  'Shorter travel times mean more time spent caring',
  'Local knowledge helps us connect clients to community resources',
  'We recruit carers who live in the areas we serve',
  'Fast response when urgent cover is needed',
];

export default function AreasWeCoverPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#E8A4A0]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full bg-[#4A7FA5]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-5">
              Where We Work
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[#1E293B] mb-5 leading-tight">
              Areas We Cover
            </h1>
            <p className="text-[#1E293B]/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We provide home care services across North Kent, from Dartford in the west to
              Swale in the east. If you&apos;re not sure whether we cover your area, just give us a call.
            </p>
          </motion.div>

          {/* All town pills */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {allTowns.map((town) => (
              <motion.span
                key={town}
                variants={pillVariant}
                className="flex items-center gap-2 bg-white border-2 border-[#E8A4A0] text-[#1E293B]
                  rounded-full px-5 py-2.5 font-medium text-sm shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D4887F] shrink-0" strokeWidth={2} />
                {town}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Map ──────────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-[#E8A4A0]/20 w-full h-[460px]"
          >
            <iframe
              title="Primrose Ever Care Service Area, North Kent"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126720!2d0.5600!3d51.3700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d8c5e0b0a5a5%3A0x1a2b3c4d5e6f7g8h!2sNorth%20Kent%2C%20UK!5e0!3m2!1sen!2suk!4v1710000000001!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Area groups ──────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-4">
              By Region
            </span>
            <h2 className="font-heading text-4xl font-semibold text-[#1E293B]">
              Coverage by Area
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {areaGroups.map((group, i) => (
              <motion.div
                key={group.region}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${group.bg} flex items-center justify-center`}>
                    <MapPin className={`w-5 h-5 ${group.color}`} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#1E293B]">{group.region}</h3>
                </div>
                <ul className="space-y-3">
                  {group.towns.map((town) => (
                    <li key={town.name} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: group.accent }}
                      />
                      <div>
                        <span className="font-semibold text-[#1E293B] text-sm">{town.name}</span>
                        <span className="text-[#1E293B]/50 text-xs ml-2">{town.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why local matters ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-4">
                Why It Matters
              </span>
              <h2 className="font-heading text-4xl font-semibold text-[#1E293B] mb-6 leading-tight">
                The Benefits of<br />Local Care
              </h2>
              <p className="text-[#1E293B]/60 text-base leading-relaxed mb-6">
                Choosing a truly local care provider makes a real difference, not just for logistics,
                but for the quality and consistency of the care your loved one receives.
              </p>
              <ul className="space-y-3">
                {whyLocal.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1E293B]/70 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#D4887F]" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not sure panel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gradient-to-br from-[#FDF6F5] to-[#F0F7FF] rounded-2xl p-8 border border-[#E8A4A0]/20"
            >
              <h3 className="font-heading text-2xl font-semibold text-[#1E293B] mb-3">
                Not sure if we cover your area?
              </h3>
              <p className="text-[#1E293B]/60 text-sm leading-relaxed mb-6">
                Our coverage map is growing. Even if your town isn&apos;t listed, please get in touch.
                We may still be able to help, or refer you to a trusted local provider.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:07852559816"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white
                    bg-gradient-to-r from-[#E8A4A0] to-[#D4887F]
                    hover:shadow-[0_0_18px_rgba(232,164,160,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" strokeWidth={2} />
                  Call 07852 559816
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#1E293B]
                    border-2 border-[#E8A4A0]/50 hover:border-[#D4887F] hover:text-[#D4887F] transition-all duration-200"
                >
                  Send Us a Message
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────── */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #E8A4A0 0%, #c08aa0 40%, #4A7FA5 100%)' }}
        />
        {[
          { size: 200, top: '-60px', left: '-80px', delay: 0, duration: 6 },
          { size: 300, top: '40px', right: '-100px', delay: 1, duration: 8 },
        ].map((c, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/10 pointer-events-none"
            style={{ width: c.size, height: c.size, top: c.top, left: (c as {left?: string}).left, right: (c as {right?: string}).right }}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: c.duration, repeat: Infinity, ease: 'easeInOut', delay: c.delay }}
          />
        ))}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-2xl mx-auto px-6 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Book a free, no-obligation care assessment at home. We&apos;ll come to you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-[#1E293B]
              bg-white hover:bg-[#FEF3F2] shadow-md transition-all duration-200"
          >
            Book a Free Assessment
          </Link>
        </motion.div>
      </section>
    </>
  );
}

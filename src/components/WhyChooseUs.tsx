'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'Person-Centred Approach',
    description: 'Care tailored to individual needs and preferences.',
  },
  {
    title: 'Dignity and Respect Always',
    description: 'We treat every person with the care and respect they deserve.',
  },
  {
    title: 'Regulated and Compliant',
    description: 'Working towards full CQC registration, fully insured, DBS checked.',
  },
  {
    title: 'Local Medway Team',
    description: 'We know and serve our community with pride.',
  },
];

const stats = [
  { value: '5+', label: 'Areas Served' },
  { value: 'CQC', label: 'Registration Pending' },
  { value: '100%', label: 'Compassionate Care' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] mb-10 leading-tight">
              Care You Can Trust,<br />Every Single Day
            </h2>

            {/* Feature list */}
            <ul className="space-y-6">
              {features.map((feature, i) => (
                <motion.li
                  key={feature.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <CheckCircle
                    className="w-6 h-6 text-[#D4887F] flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <div>
                    <p className="font-semibold text-[#1E293B] mb-1">{feature.title}</p>
                    <p className="text-[#1E293B]/65 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Stats row */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-100 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-[#4A7FA5] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#1E293B]/55 leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — care image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Pink soft bg blob */}
            <div className="absolute inset-0 rounded-3xl bg-[#E8A4A0]/10 blur-2xl scale-105" />

            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-xl border border-[#E8A4A0]/20">
              <Image
                src="/images/care.jpg"
                alt="Caring for loved ones at home"
                fill
                className="object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/10 to-transparent" />
            </div>

            {/* Floating dots for decoration */}
            <motion.span
              className="absolute -top-4 -right-4 w-5 h-5 rounded-full bg-[#E8A4A0]/50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-[#4A7FA5]/20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

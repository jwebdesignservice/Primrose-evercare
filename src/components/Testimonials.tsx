'use client';

import { motion, Variants } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'The team at Primrose Ever Care have been absolutely wonderful with my mother. She looks forward to their visits and has so much more confidence now.',
    name: 'Sarah M.',
    location: 'Rochester',
  },
  {
    quote:
      'Professional, caring and always on time. We finally feel our dad is safe and happy at home. Cannot recommend highly enough.',
    name: 'David T.',
    location: 'Chatham',
  },
  {
    quote:
      'Finding good home care felt overwhelming until we found Primrose. From the first call they made us feel at ease.',
    name: 'Linda K.',
    location: 'Gillingham',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#FDF8F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] mb-4">
            What Families Say About Us
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5"
            >
              {/* Quote mark */}
              <span
                className="font-heading text-7xl leading-none text-[#E8A4A0] select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 -mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[#1E293B]/70 text-sm leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-[#1E293B] text-sm">{t.name}</p>
                <p className="text-[#D4887F] text-xs mt-0.5">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

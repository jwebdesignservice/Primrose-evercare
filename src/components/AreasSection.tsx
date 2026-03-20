'use client';

import { motion, Variants } from 'framer-motion';
import { MapPin } from 'lucide-react';

const areas = ['Rochester', 'Chatham', 'Gillingham', 'Strood', 'Rainham'];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function AreasSection() {
  return (
    <section className="py-20 bg-[#F0F7FF]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] mb-4">
            Serving Families Across Medway
          </h2>
          <p className="text-[#1E293B]/65 text-lg max-w-xl mx-auto">
            Based in Medway, we provide reliable home care across the local area
          </p>
        </motion.div>

        {/* Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {areas.map((area) => (
            <motion.div
              key={area}
              variants={pillVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: '#E8A4A0',
                color: '#fff',
              }}
              className="flex items-center gap-2 bg-white border-2 border-[#E8A4A0] text-[#1E293B]
                rounded-full px-6 py-3 font-medium text-sm shadow-sm cursor-default
                transition-colors duration-200"
            >
              <MapPin className="w-4 h-4 text-[#D4887F]" strokeWidth={2} />
              {area}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

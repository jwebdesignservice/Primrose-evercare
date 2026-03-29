'use client';

import { motion, Variants } from 'framer-motion';
import { MapPin } from 'lucide-react';

const areas = [
  { label: 'Dartford' },
  { label: 'Gravesend' },
  { label: 'Strood' },
  { label: 'Rochester' },
  { label: 'Chatham' },
  { label: 'Gillingham' },
  { label: 'Rainham' },
  { label: 'Maidstone' },
  { label: 'Sittingbourne' },
  { label: 'Isle of Sheppey' },
];

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
            Serving Families Across Kent
          </h2>
          <p className="text-[#1E293B]/65 text-lg max-w-xl mx-auto">
            We provide reliable home care across North Kent, from Dartford to Swale
          </p>
        </motion.div>

        {/* Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {areas.map((area) => (
            <motion.div
              key={area.label}
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
              <MapPin className="w-4 h-4 text-[#D4887F] shrink-0" strokeWidth={2} />
              {area.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-md border border-[#E8A4A0]/20 w-full h-[420px]"
        >
          <iframe
            title="Primrose Ever Care Service Area — North Kent"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161000!2d0.5200!3d51.3700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d8c5e0b0a5a5%3A0x1a2b3c4d5e6f7g8h!2sNorth%20Kent%2C%20UK!5e0!3m2!1sen!2suk!4v1710000000001!5m2!1sen!2suk"
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
  );
}

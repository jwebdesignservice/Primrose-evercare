'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const floatingCircles = [
  { size: 200, top: '-60px', left: '-80px', delay: 0, duration: 6 },
  { size: 300, top: '40px', right: '-100px', delay: 1, duration: 8 },
  { size: 150, bottom: '-40px', left: '30%', delay: 0.5, duration: 7 },
  { size: 100, top: '50%', left: '20%', delay: 1.5, duration: 5 },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Diagonal gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #E8A4A0 0%, #c08aa0 40%, #4A7FA5 100%)',
        }}
      />

      {/* Floating circles */}
      {floatingCircles.map((circle, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/10 pointer-events-none"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: (circle as { left?: string }).left,
            right: (circle as { right?: string }).right,
            bottom: (circle as { bottom?: string }).bottom,
          }}
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: circle.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="font-heading text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Get Started?
        </motion.h2>

        <motion.p
          className="text-white/85 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Book a free, no-obligation care assessment today. We will work with you to
          create a personalised care plan.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Primary button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#1E293B] font-semibold
              px-8 py-4 rounded-full hover:bg-[#FEF3F2] transition-colors duration-200 text-sm shadow-md"
          >
            Book Free Assessment
          </Link>

          {/* Secondary outlined button */}
          <a
            href="tel:07852559816"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold
              px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200 text-sm"
          >
            <Phone className="w-4 h-4" strokeWidth={2} />
            Call 07852 559816
          </a>
        </motion.div>
      </div>
    </section>
  );
}

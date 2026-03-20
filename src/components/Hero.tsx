"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Background ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft ambient glows */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E8A4A0]/10 blur-3xl" />
        <div className="absolute bottom-20 -left-24 w-80 h-80 rounded-full bg-[#5B8FB9]/8 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-[#E8A4A0]/6 blur-2xl" />

        {/* Minimal geometric shapes */}
        {/* Top-left corner ring */}
        <div className="absolute top-24 left-10 w-16 h-16 rounded-full border border-[#E8A4A0]/25" />
        <div className="absolute top-28 left-14 w-8 h-8 rounded-full border border-[#E8A4A0]/15" />

        {/* Scattered small dots */}
        <div className="absolute top-40 left-1/4 w-2 h-2 rounded-full bg-[#E8A4A0]/30" />
        <div className="absolute top-60 left-[18%] w-1.5 h-1.5 rounded-full bg-[#5B8FB9]/25" />
        <div className="absolute top-1/2 left-12 w-3 h-3 rounded-full bg-[#E8A4A0]/20" />

        {/* Thin cross / plus shapes */}
        <svg className="absolute top-36 right-1/3 w-8 h-8 text-[#E8A4A0]/20" viewBox="0 0 32 32" fill="none">
          <line x1="16" y1="2" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="2" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <svg className="absolute bottom-32 left-1/3 w-6 h-6 text-[#5B8FB9]/20" viewBox="0 0 32 32" fill="none">
          <line x1="16" y1="2" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="2" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>

        {/* Small diamond shapes */}
        <svg className="absolute top-1/4 left-8 w-5 h-5 text-[#D4887F]/20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 0 L20 10 L10 20 L0 10 Z" />
        </svg>
        <svg className="absolute bottom-40 right-1/4 w-4 h-4 text-[#5B8FB9]/20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 0 L20 10 L10 20 L0 10 Z" />
        </svg>

        {/* Thin arc / partial ring */}
        <svg className="absolute bottom-20 left-1/4 w-20 h-20 text-[#E8A4A0]/15" viewBox="0 0 80 80" fill="none">
          <path d="M10 70 Q40 10 70 70" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        <svg className="absolute top-32 right-16 w-24 h-24 text-[#5B8FB9]/12" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8"/>
        </svg>

        {/* Tiny scattered squares (rotated 45°) */}
        <div className="absolute top-1/3 right-1/3 w-3 h-3 border border-[#E8A4A0]/25 rotate-45" />
        <div className="absolute top-2/3 left-1/5 w-2.5 h-2.5 border border-[#5B8FB9]/20 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8 pb-16 lg:pt-10 lg:pb-24">
          {/* ── Left: Content ── */}
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/15 text-[#D4887F] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4887F] inline-block" />
                Compassionate Care in Medway
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-bold text-[#1E293B] leading-[1.1] mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Compassionate{" "}
              <span className="text-[#E8A4A0]">Home Care</span>{" "}
              In Medway
            </motion.h1>

            <motion.p
              className="text-lg text-[#1E293B]/65 leading-relaxed mb-9 max-w-[480px]"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Helping your loved ones stay safe, dignified, and independent at
              home. Professional, person-centred care you can truly rely on.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-[#4A7FA5] to-[#5B8FB9] shadow-md hover:shadow-[0_0_28px_rgba(74,127,165,0.45)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Free Care Assessment
              </a>
              <a
                href="tel:07852559816"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-sm border-2 border-[#4A7FA5] text-[#4A7FA5] hover:bg-[#4A7FA5]/6 transition-all duration-300"
              >
                Call Us: 07852 559816
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              className="mt-10 flex items-center gap-5"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            >
              <div className="flex -space-x-2.5">
                {["S", "J", "L"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{
                      background: `linear-gradient(135deg, #E8A4A0 0%, #D4887F 100%)`,
                    }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-[#E8A4A0] text-sm mb-0.5">
                  {"★★★★★"}
                </div>
                <p className="text-xs text-[#1E293B]/55 font-medium">
                  Trusted by families across Medway
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Hero Image ── */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[460px]">
              {/* Decorative ring behind circle */}
              <div className="absolute inset-0 rounded-full border-2 border-[#E8A4A0]/25 scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#5B8FB9]/15 scale-125" />

              {/* Pink soft glow */}
              <div className="absolute inset-0 rounded-full bg-[#E8A4A0]/10 blur-2xl scale-110" />

              {/* Circle image */}
              <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/hero.jpg"
                  alt="Compassionate home care in Medway"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badge: DBS Checked */}
              <motion.div
                className="absolute top-6 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2.5"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 rounded-full bg-[#5B8FB9]/15 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#4A7FA5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#1E293B]">DBS Checked</p>
                  <p className="text-[9px] text-[#1E293B]/50">All Staff</p>
                </div>
              </motion.div>

              {/* Floating badge: Person-Centred */}
              <motion.div
                className="absolute bottom-10 -right-2 bg-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2.5"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <div className="w-8 h-8 rounded-full bg-[#E8A4A0]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#D4887F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#1E293B]">Person-Centred</p>
                  <p className="text-[9px] text-[#1E293B]/50">Always</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Curved SVG Divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          className="w-full block"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,72 L0,36 C200,72 400,8 720,36 C1040,64 1240,10 1440,36 L1440,72 Z"
            fill="#5B8FB9"
          />
        </svg>
      </div>
    </section>
  );
}



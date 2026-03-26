'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

const COOKIE_KEY = 'pec-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no decision has been made yet
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Small delay so banner doesn't flash on very first paint
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[9999]"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-[#E8A4A0]/20 p-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FEF3F2] flex items-center justify-center shrink-0">
                  <Cookie className="w-5 h-5 text-[#D4887F]" strokeWidth={1.8} />
                </div>
                <h2 className="font-heading text-lg font-semibold text-[#1E293B]">
                  We use cookies
                </h2>
              </div>
              <button
                onClick={decline}
                aria-label="Close cookie banner"
                className="text-[#1E293B]/40 hover:text-[#1E293B]/70 transition-colors mt-0.5"
              >
                <X className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
              </button>
            </div>

            {/* Body */}
            <p className="text-[#1E293B]/60 text-sm leading-relaxed mb-4">
              We use essential cookies to keep the site working, and optional analytics cookies
              to help us improve. You can read more in our{' '}
              <Link
                href="/cookies-policy"
                className="text-[#4A7FA5] underline underline-offset-2 hover:text-[#D4887F] transition-colors"
              >
                Cookies Policy
              </Link>
              .
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="flex-1 py-2.5 rounded-full text-sm font-semibold text-white
                  bg-gradient-to-r from-[#E8A4A0] to-[#D4887F]
                  hover:shadow-[0_0_18px_rgba(232,164,160,0.5)] hover:-translate-y-0.5
                  transition-all duration-200"
              >
                Accept all
              </button>
              <button
                onClick={decline}
                className="flex-1 py-2.5 rounded-full text-sm font-semibold text-[#1E293B]
                  border-2 border-[#E8A4A0]/50 hover:border-[#D4887F] hover:text-[#D4887F]
                  transition-all duration-200"
              >
                Essential only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

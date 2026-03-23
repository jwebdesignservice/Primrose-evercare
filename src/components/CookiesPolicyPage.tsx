'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function CookiesPolicyPage() {
  function resetConsent() {
    localStorage.removeItem('pec-cookie-consent');
    window.location.reload();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#E8A4A0]/15 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-5">
              Legal
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[#1E293B] mb-4 leading-tight">
              Cookies Policy
            </h1>
            <p className="text-[#1E293B]/55 text-base">
              Last updated: March 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-slate prose-lg max-w-none"
        >
          {/* Override prose styles with Tailwind */}
          <div className="space-y-10 text-[#1E293B]/70 text-base leading-relaxed">

            <div>
              <h2 className="font-heading text-2xl font-semibold text-[#1E293B] mb-3">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a website.
                They are widely used to make websites work more efficiently, to improve the user
                experience, and to provide information to the website operator.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-[#1E293B] mb-3">How We Use Cookies</h2>
              <p>
                Primrose Ever Care (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses cookies on our website{' '}
                <strong>primroseevercare.co.uk</strong>. We use them in the following ways:
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-[#1E293B] mb-3">1. Strictly Necessary Cookies</h3>
              <p>
                These cookies are essential for the website to function correctly. They enable core
                features such as page navigation, security and accessibility. Without these cookies,
                the website cannot operate properly. These cookies do not require your consent and
                cannot be switched off.
              </p>
              <table className="w-full mt-4 text-sm border-collapse">
                <thead>
                  <tr className="bg-[#FEF3F2]">
                    <th className="text-left p-3 border border-[#E8A4A0]/20 font-semibold text-[#1E293B]">Cookie Name</th>
                    <th className="text-left p-3 border border-[#E8A4A0]/20 font-semibold text-[#1E293B]">Purpose</th>
                    <th className="text-left p-3 border border-[#E8A4A0]/20 font-semibold text-[#1E293B]">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-[#E8A4A0]/20 font-mono text-xs">pec-cookie-consent</td>
                    <td className="p-3 border border-[#E8A4A0]/20">Stores your cookie preference</td>
                    <td className="p-3 border border-[#E8A4A0]/20">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-[#1E293B] mb-3">2. Analytics Cookies</h3>
              <p>
                With your consent, we may use analytics cookies to understand how visitors interact
                with our website — for example, which pages are visited most often and whether users
                encounter any errors. This helps us improve our website and your experience.
              </p>
              <p className="mt-3">
                At present, we do not use third-party analytics tools such as Google Analytics.
                If this changes, we will update this policy and refresh your consent where required.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-[#1E293B] mb-3">3. Third-Party Cookies</h3>
              <p>
                Our website embeds a Google Maps iframe on certain pages to display our service area.
                Google may set cookies in connection with this embed. We do not control these cookies.
                You can read Google&apos;s privacy policy at{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A7FA5] underline underline-offset-2 hover:text-[#D4887F] transition-colors"
                >
                  policies.google.com/privacy
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-[#1E293B] mb-3">Managing Your Cookie Preferences</h2>
              <p>
                You can manage or withdraw your consent at any time by clicking the button below.
                You can also configure your browser to block or delete cookies — please refer to your
                browser&apos;s help documentation for instructions.
              </p>
              <p className="mt-3">
                Please note that restricting cookies may affect the functionality of our website.
              </p>
              <div className="mt-5">
                <button
                  onClick={resetConsent}
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-white
                    bg-gradient-to-r from-[#E8A4A0] to-[#D4887F]
                    hover:shadow-[0_0_18px_rgba(232,164,160,0.5)] hover:-translate-y-0.5
                    transition-all duration-200"
                >
                  Update My Cookie Preferences
                </button>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-[#1E293B] mb-3">Changes to This Policy</h2>
              <p>
                We may update this Cookies Policy from time to time to reflect changes in technology,
                legislation or our business practices. Any changes will be posted on this page with
                an updated &ldquo;last updated&rdquo; date. We encourage you to check this page periodically.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-[#1E293B] mb-3">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us:
              </p>
              <ul className="mt-3 space-y-1">
                <li><strong>Email:</strong>{' '}
                  <a href="mailto:enquires@primroseevercare.co.uk" className="text-[#4A7FA5] hover:text-[#D4887F] transition-colors">
                    enquires@primroseevercare.co.uk
                  </a>
                </li>
                <li><strong>Phone:</strong>{' '}
                  <a href="tel:07852559816" className="text-[#4A7FA5] hover:text-[#D4887F] transition-colors">
                    07852 559816
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/"
                className="text-[#4A7FA5] text-sm hover:text-[#D4887F] transition-colors"
              >
                ← Back to home
              </Link>
            </div>

          </div>
        </motion.div>
      </section>
    </>
  );
}

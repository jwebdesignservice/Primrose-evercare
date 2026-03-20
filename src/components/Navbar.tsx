"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#areas", label: "Areas We Cover" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#FDF8F6]/95 shadow-sm border-b border-[#E8A4A0]/15"
          : "bg-[#FDF8F6]/90 border-b border-[#E8A4A0]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Primrose Ever Care Logo"
              width={52}
              height={52}
              className="object-contain"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="font-heading text-[1.5rem] font-semibold text-[#1E293B] tracking-wide leading-none">
                Primrose
              </span>
              <span className="text-[0.6rem] font-bold tracking-[0.22em] text-[#4A7FA5] uppercase mt-0.5">
                Ever Care
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1E293B] hover:text-[#4A7FA5] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#E8A4A0] to-[#D4887F] shadow-sm hover:shadow-[0_0_22px_rgba(232,164,160,0.55)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Free Assessment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#1E293B] hover:bg-black/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/96 backdrop-blur-md border-t border-gray-100"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2.5 px-2 text-sm font-medium text-[#1E293B] hover:text-[#4A7FA5] transition-colors rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#E8A4A0] to-[#D4887F]"
                onClick={() => setIsOpen(false)}
              >
                Book Free Assessment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

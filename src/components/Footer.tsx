import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Areas We Cover', href: '/areas-we-cover' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  'Personal Care',
  'Dementia Care',
  'Companionship',
  'Medication Support',
];

const bottomLinks = [
  { label: 'Complaints Procedure', href: '/complaints' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookies Policy', href: '/cookies-policy' },
  { label: 'Safeguarding Policy', href: '/safeguarding' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Primrose Ever Care Logo"
                width={52}
                height={52}
                className="object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-bold text-white tracking-wide leading-none">
                  Primrose
                </span>
                <span className="text-[0.6rem] font-bold tracking-[0.22em] text-[#E8A4A0] uppercase mt-0.5">
                  Ever Care
                </span>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">
              Trusted home care across North Kent
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="text-[#E8A4A0] font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/65 text-sm hover:text-[#E8A4A0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Our Services */}
          <div>
            <h3 className="text-[#E8A4A0] font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-white/65 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-[#E8A4A0] font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:07852559816"
                  className="flex items-center gap-3 text-white/65 text-sm hover:text-[#E8A4A0] transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-[#E8A4A0] flex-shrink-0" strokeWidth={1.8} />
                  07852 559816
                </a>
              </li>
              <li>
                <a
                  href="mailto:enquires@primroseevercare.co.uk"
                  className="flex items-start gap-3 text-white/65 text-sm hover:text-[#E8A4A0] transition-colors duration-200 break-all"
                >
                  <Mail className="w-4 h-4 text-[#E8A4A0] flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                  enquires@primroseevercare.co.uk
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E8A4A0] flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                  <span className="text-white/65 text-sm leading-relaxed">
                    Dartford, Gravesend, Medway,<br />Maidstone, Swale &amp; beyond
                  </span>
                </div>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/primroseevercare?igsh=MWN4dW5sYW1jdjlycA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Primrose Ever Care on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E8A4A0]/30 flex items-center justify-center transition-colors duration-200"
              >
                <InstagramIcon className="w-4 h-4 text-[#E8A4A0]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576445211717&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Primrose Ever Care on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4A7FA5]/40 flex items-center justify-center transition-colors duration-200"
              >
                <FacebookIcon className="w-4 h-4 text-[#4A7FA5]" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© 2025 Primrose Ever Care. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {bottomLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#E8A4A0] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

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

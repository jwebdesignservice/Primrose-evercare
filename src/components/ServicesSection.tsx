'use client';

import { motion, Variants } from 'framer-motion';
import { Heart, Brain, Users, Pill } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const services: { icon: LucideIcon; title: string; description: string; color: string; bg: string; border: string }[] = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Bathing, dressing, grooming and personal hygiene support delivered with dignity.',
    color: 'text-[#D4887F]',
    bg: 'bg-[#FEF3F2]',
    border: 'hover:border-t-[#D4887F]',
  },
  {
    icon: Brain,
    title: 'Dementia Care',
    description: 'Specialist support for those living with dementia, creating safe and familiar routines.',
    color: 'text-[#4A7FA5]',
    bg: 'bg-[#EBF4FB]',
    border: 'hover:border-t-[#4A7FA5]',
  },
  {
    icon: Users,
    title: 'Companionship',
    description: 'Social visits, conversation, and activities to reduce loneliness and isolation.',
    color: 'text-[#7B9E7B]',
    bg: 'bg-[#EEF5EE]',
    border: 'hover:border-t-[#7B9E7B]',
  },
  {
    icon: Pill,
    title: 'Medication Support',
    description: 'Prompting and assisting with medication to ensure health and safety.',
    color: 'text-[#9B7EC8]',
    bg: 'bg-[#F3EEF8]',
    border: 'hover:border-t-[#9B7EC8]',
  },

];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function ServicesSection() {
  const topRow = services.slice(0, 2);
  const bottomRow = services.slice(2);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large soft blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#E8A4A0]/12 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#4A7FA5]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#9B7EC8]/6 blur-3xl" />

        {/* Decorative dots grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#1E293B" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Accent arcs */}
        <svg className="absolute top-10 right-24 w-32 h-32 text-[#E8A4A0]/20" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6"/>
        </svg>
        <svg className="absolute bottom-16 left-16 w-20 h-20 text-[#4A7FA5]/20" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-4">
            What We Offer
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] mb-4">
            Our Care Services
          </h2>
          <p className="text-[#1E293B]/60 text-lg max-w-xl mx-auto">
            Tailored support to help your loved one thrive at home
          </p>
        </motion.div>

        {/* Row 1: 2 cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {topRow.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        {/* Row 2: 2 cards centred */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {bottomRow.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: { icon: LucideIcon; title: string; description: string; color: string; bg: string; border: string };
}) {
  const Icon = service.icon;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-7 flex flex-col gap-4 w-full
        transition-all duration-300 hover:shadow-xl hover:bg-white
        border-t-4 border-t-transparent ${service.border} cursor-default`}
    >
      <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
        <Icon className={`w-6 h-6 ${service.color}`} strokeWidth={1.8} />
      </div>
      <div>
        <h3 className={`font-heading text-xl font-semibold text-[#1E293B] mb-2 group-hover:${service.color} transition-colors duration-300`}>
          {service.title}
        </h3>
        <p className="text-[#1E293B]/60 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

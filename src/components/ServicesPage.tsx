'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  Brain,
  Users,
  Pill,
  UtensilsCrossed,
  Home,
  PersonStanding,
  RefreshCcw,
  BedDouble,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Data ─────────────────────────────────────────────── */

const services = [
  {
    id: 'personal-care',
    icon: Heart,
    title: 'Personal Care',
    tagline: 'Dignity-first support with everyday living',
    color: 'text-[#D4887F]',
    bg: 'bg-[#FEF3F2]',
    accent: '#D4887F',
    description:
      'Our personal care service provides compassionate, hands-on support with the daily tasks that keep your loved one feeling comfortable, clean and confident. Every visit is carried out with the utmost respect for privacy and dignity.',
    benefits: [
      'Maintains personal hygiene and appearance',
      'Reduces risk of skin infections and pressure sores',
      'Promotes self-esteem and emotional wellbeing',
      'Gives family members peace of mind',
    ],
    included: [
      'Bathing, showering and washing',
      'Dressing and undressing',
      'Hair care and grooming',
      'Oral hygiene',
      'Continence care',
      'Skin care and moisturising',
    ],
  },
  {
    id: 'dementia-care',
    icon: Brain,
    title: 'Dementia Care',
    tagline: 'Specialist support for memory and cognitive conditions',
    color: 'text-[#4A7FA5]',
    bg: 'bg-[#EBF4FB]',
    accent: '#4A7FA5',
    description:
      'Living with dementia brings unique challenges for individuals and families alike. Our carers are trained to provide sensitive, structured support that helps reduce anxiety, maintain familiar routines and preserve quality of life at home.',
    benefits: [
      'Reduces confusion and agitation through routine',
      'Allows the person to stay in a familiar environment',
      'Specialist communication techniques',
      'Ongoing family liaison and updates',
    ],
    included: [
      'Structured daily routines',
      'Orientation and cognitive prompting',
      'Safe supervision and monitoring',
      'Personal care with dementia sensitivity',
      'Meaningful activities and engagement',
      'Family support and communication',
    ],
  },
  {
    id: 'companionship',
    icon: Users,
    title: 'Companionship',
    tagline: 'Friendly visits that make a real difference',
    color: 'text-[#7B9E7B]',
    bg: 'bg-[#EEF5EE]',
    accent: '#7B9E7B',
    description:
      'Loneliness and social isolation can have a serious impact on mental and physical health. Our companionship service provides warm, consistent visits from a friendly face — someone to talk to, laugh with, and enjoy time alongside.',
    benefits: [
      'Reduces loneliness and social isolation',
      'Improves mood and mental wellbeing',
      'Encourages light activity and engagement',
      'Provides a trusted, consistent presence',
    ],
    included: [
      'Regular social visits and conversation',
      'Accompanying to appointments or outings',
      'Shared hobbies and activities',
      'Reading, puzzles and games',
      'Light support around the home',
      'Help with correspondence or technology',
    ],
  },
  {
    id: 'medication-support',
    icon: Pill,
    title: 'Medication Support',
    tagline: 'Safe prompting and assistance with medicines',
    color: 'text-[#9B7EC8]',
    bg: 'bg-[#F3EEF8]',
    accent: '#9B7EC8',
    description:
      'Getting medication right is critical to health and safety. Our carers provide reliable prompting and practical assistance to ensure medications are taken correctly, at the right time, every day.',
    benefits: [
      'Reduces the risk of missed or double doses',
      'Supports complex medication schedules',
      'Gives families confidence in safe management',
      'Clear records kept for GP or healthcare review',
    ],
    included: [
      'Medication prompting and reminders',
      'Assisting with prescribed medicines',
      'Recording medication administration',
      'Monitoring for side effects or concerns',
      'Liaison with GP or pharmacy when needed',
      'Support with eye drops, patches or topicals',
    ],
  },
  {
    id: 'meal-preparation',
    icon: UtensilsCrossed,
    title: 'Meal Preparation',
    tagline: 'Nutritious home-cooked meals tailored to your needs',
    color: 'text-[#C0863A]',
    bg: 'bg-[#FEF6EE]',
    accent: '#C0863A',
    description:
      'Good nutrition is the foundation of good health. Our carers prepare fresh, balanced meals that meet individual dietary requirements and personal tastes — making mealtimes something to look forward to.',
    benefits: [
      'Ensures regular, nutritious meals are eaten',
      'Supports weight management and hydration',
      'Caters for dietary needs and preferences',
      'Reduces the burden on family carers',
    ],
    included: [
      'Breakfast, lunch and dinner preparation',
      'Snack preparation and hydration support',
      'Menu planning and grocery assistance',
      'Catering for allergies and dietary needs',
      'Kitchen safety and hygiene',
      'Clearing up after meals',
    ],
  },
  {
    id: 'household-tasks',
    icon: Home,
    title: 'Household Tasks',
    tagline: 'Keeping the home safe, tidy and comfortable',
    color: 'text-[#4A7FA5]',
    bg: 'bg-[#EBF4FB]',
    accent: '#4A7FA5',
    description:
      'A clean, organised home is essential for both physical safety and emotional wellbeing. Our carers help with everyday household chores so the home remains a comfortable, hazard-free environment.',
    benefits: [
      'Reduces fall and accident risks',
      'Supports a healthy, hygienic environment',
      'Relieves stress for individuals and families',
      'Helps maintain a sense of pride and normality',
    ],
    included: [
      'Light cleaning and vacuuming',
      'Laundry and ironing',
      'Washing up and kitchen tidying',
      'Changing bed linen',
      'Taking out bins',
      'Shopping assistance',
    ],
  },
  {
    id: 'mobility-assistance',
    icon: PersonStanding,
    title: 'Mobility Assistance',
    tagline: 'Safe support for moving and getting around',
    color: 'text-[#7B9E7B]',
    bg: 'bg-[#EEF5EE]',
    accent: '#7B9E7B',
    description:
      'Maintaining mobility and independence is vital for quality of life. Our trained carers provide safe, patient support with movement and transfers, always encouraging as much independence as the individual is able to manage.',
    benefits: [
      'Reduces the risk of falls and injury',
      'Supports independence and confidence',
      'Maintains muscle strength and joint health',
      'Trained in correct moving and handling',
    ],
    included: [
      'Safe assistance with getting up and sitting down',
      'Support with walking and balance',
      'Transfers between bed, chair and wheelchair',
      'Use of walking aids and mobility equipment',
      'Accompaniment on short walks outdoors',
      'Fall prevention strategies',
    ],
  },
  {
    id: 'respite-care',
    icon: RefreshCcw,
    title: 'Respite Care',
    tagline: 'A well-earned break for family carers',
    color: 'text-[#D4887F]',
    bg: 'bg-[#FEF3F2]',
    accent: '#D4887F',
    description:
      'Caring for a loved one is one of the most rewarding things you can do — but it can also be exhausting. Our respite care service steps in to give family carers the time and space they need to rest and recharge, safe in the knowledge that their loved one is in good hands.',
    benefits: [
      'Prevents carer burnout and exhaustion',
      'Maintains the quality of family care long-term',
      'Gives family carers time for their own health',
      'Flexible — from a few hours to several days',
    ],
    included: [
      'Full care coverage during your absence',
      'All personal care and daily living support',
      'Medication management',
      'Companionship and activities',
      'Detailed handover notes for family',
      'Emergency on-call support',
    ],
  },
  {
    id: 'live-in-care',
    icon: BedDouble,
    title: 'Live-in Care',
    tagline: '24-hour care in the comfort of home',
    color: 'text-[#9B7EC8]',
    bg: 'bg-[#F3EEF8]',
    accent: '#9B7EC8',
    description:
      'For those who need round-the-clock support, live-in care offers a full-time carer who lives in the home. It is often the ideal alternative to a care home, allowing your loved one to remain in familiar surroundings with one-to-one, consistent care.',
    benefits: [
      'One-to-one, continuous care and support',
      'Avoids the upheaval of a care home move',
      'Particularly suited to complex care needs',
      'Consistent carer builds a trusted relationship',
    ],
    included: [
      'Full personal care and daily living support',
      'Medication management',
      'Meal preparation and housekeeping',
      'Overnight monitoring and night care',
      'Companionship and emotional support',
      'Liaison with healthcare professionals',
    ],
  },
];

/* ─── Animations ───────────────────────────────────────── */

import type { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
};

/* ─── Component ────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#E8A4A0]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full bg-[#4A7FA5]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Text + nav */}
            <motion.div
              className="flex-1 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-5">
                What We Offer
              </span>
              <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[#1E293B] mb-5 leading-tight">
                Our Care Services
              </h1>
              <p className="text-[#1E293B]/60 text-lg md:text-xl leading-relaxed mb-10">
                Every person is different. We offer a full range of home care services, from a few hours of support
                a week to round-the-clock live-in care, all tailored to what your loved one actually needs.
              </p>

              {/* Jump nav */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-3"
              >
                {services.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="px-4 py-2 rounded-full text-xs font-semibold border-2 border-[#E8A4A0]/50 text-[#1E293B]/70
                      hover:border-[#D4887F] hover:text-[#D4887F] transition-all duration-200"
                  >
                    {s.title}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Video */}
            <motion.div
              className="w-full lg:w-[480px] shrink-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8A4A0]/20">
                <video
                  src="/videos/service-hero.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Service sections */}
      <section className="bg-white">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isEven = i % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`py-20 scroll-mt-24 ${isEven ? 'bg-white' : 'bg-[#FAFAFA]'}`}
            >
              <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                  {/* Icon + tagline panel */}
                  <motion.div
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={fadeUp}
                    className="lg:w-80 shrink-0 flex flex-col items-start gap-5"
                  >
                    <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center shadow-sm`}>
                      <Icon className={`w-8 h-8 ${service.color}`} strokeWidth={1.7} />
                    </div>
                    <div>
                      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#1E293B] mb-2">
                        {service.title}
                      </h2>
                      <p className={`text-sm font-semibold uppercase tracking-widest ${service.color}`}>
                        {service.tagline}
                      </p>
                    </div>
                    <p className="text-[#1E293B]/65 text-base leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-2 inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-white
                        bg-gradient-to-r from-[#E8A4A0] to-[#D4887F] shadow-sm
                        hover:shadow-[0_0_22px_rgba(232,164,160,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Enquire About This Service
                    </Link>
                  </motion.div>

                  {/* Benefits + Included */}
                  <div className="flex-1 grid sm:grid-cols-2 gap-8">
                    {/* Benefits */}
                    <motion.div
                      custom={1}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-60px' }}
                      variants={fadeUp}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
                    >
                      <h3 className="font-heading text-lg font-semibold text-[#1E293B] mb-5">
                        Key Benefits
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm text-[#1E293B]/70 leading-relaxed">
                            <CheckCircle2
                              className="w-4 h-4 mt-0.5 shrink-0"
                              style={{ color: service.accent }}
                              strokeWidth={2}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* What's included */}
                    <motion.div
                      custom={2}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-60px' }}
                      variants={fadeUp}
                      className={`rounded-2xl p-7 ${service.bg}`}
                    >
                      <h3 className="font-heading text-lg font-semibold text-[#1E293B] mb-5">
                        What&apos;s Included
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {service.included.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-[#1E293B]/70 leading-relaxed">
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: service.accent }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] mb-5">
            Not sure which service is right?
          </h2>
          <p className="text-[#1E293B]/60 text-lg mb-8">
            We offer a free, no-obligation care assessment. We&apos;ll visit you at home, listen carefully,
            and recommend exactly the right level of support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold text-white
              bg-gradient-to-r from-[#E8A4A0] to-[#D4887F] shadow-sm
              hover:shadow-[0_0_28px_rgba(232,164,160,0.55)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a Free Assessment
          </Link>
        </motion.div>
      </section>
    </>
  );
}

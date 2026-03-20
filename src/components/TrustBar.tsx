"use client";

import { motion } from "framer-motion";
import { Shield, Award, Heart, Clock } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    label: "DBS Checked Staff",
    desc: "Every carer fully vetted",
  },
  {
    icon: Award,
    label: "Fully Insured",
    desc: "Complete peace of mind",
  },
  {
    icon: Heart,
    label: "Person-Centred Care",
    desc: "Tailored to every individual",
  },
  {
    icon: Clock,
    label: "CQC Registration",
    desc: "In progress",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#5B8FB9] pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">
                    {item.label}
                  </p>
                  <p className="text-white/70 text-xs mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

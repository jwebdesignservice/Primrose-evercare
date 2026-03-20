"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Award, Heart, Clock } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "DBS Checked Staff", desc: "Every carer fully vetted" },
  { icon: Award, label: "Fully Insured", desc: "Complete peace of mind" },
  { icon: Heart, label: "Person-Centred Care", desc: "Tailored to every individual" },
  { icon: Clock, label: "CQC Registration", desc: "In progress" },
];

export default function TrustBar() {
  const isDev = process.env.NODE_ENV === "development";
  const [debug, setDebug] = useState(false);

  return (
    <section className="bg-[#5B8FB9] relative z-10">

      {/* Dev toggle — only visible in dev */}
      {isDev && (
        <button
          onClick={() => setDebug((d) => !d)}
          className="absolute top-2 right-2 z-50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow"
          style={{ background: debug ? "#f97316" : "#1E293B", color: "white" }}
        >
          {debug ? "✕ Hide guides" : "⊞ Show guides"}
        </button>
      )}

      {/* Visual guide: wave zone */}
      {debug && (
        <div className="absolute top-0 left-0 right-0 pointer-events-none z-40">
          <div className="bg-yellow-400/30 border-b-2 border-dashed border-yellow-500 h-[72px] flex items-center justify-center">
            <span className="text-yellow-900 text-xs font-bold bg-yellow-300/80 px-2 py-0.5 rounded">
              ↕ Wave zone — 72px
            </span>
          </div>
        </div>
      )}

      {/* Wave at top */}
      <div className="w-full leading-none -mt-px relative">
        {debug && (
          <div className="absolute inset-0 bg-blue-400/20 border border-dashed border-blue-400 z-40 pointer-events-none flex items-center justify-center">
            <span className="text-blue-900 text-xs font-bold bg-blue-200/80 px-2 py-0.5 rounded">SVG wave element</span>
          </div>
        )}
        <svg
          viewBox="0 0 1440 72"
          className="w-full block"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L0,36 C200,72 400,8 720,36 C1040,64 1240,10 1440,36 L1440,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Content */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-[50px] relative ${debug ? "outline outline-2 outline-dashed outline-green-400" : ""}`}>
        {debug && (
          <div className="absolute -top-5 left-4 text-green-200 text-xs font-bold bg-green-700/80 px-2 py-0.5 rounded">
            Content area — py-10 (40px top + bottom)
          </div>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className={`flex items-center gap-3 ${debug ? "outline outline-1 outline-dashed outline-pink-300" : ""}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{item.label}</p>
                  <p className="text-white/70 text-xs mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {debug && (
          <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-white/80 border-t border-white/20 pt-3">
            <div>📐 <strong>Section bg:</strong> #5B8FB9</div>
            <div>📐 <strong>Wave height:</strong> 72px viewBox</div>
            <div>📐 <strong>Content padding:</strong> py-10 (2.5rem)</div>
          </div>
        )}
      </div>
    </section>
  );
}

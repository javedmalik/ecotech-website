"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10,000+", label: "Tonnes Recycled" },
  { value: "500+", label: "Corporate Clients" },
  { value: "99.9%", label: "Recovery Rate" },
  { value: "Pan India", label: "Coverage" },
  { value: "100%", label: "Eco-Compliant" },
  { value: "24/7", label: "Support" },
  { value: "DPIIT", label: "Recognized" },
  { value: "MSME", label: "Registered" },
];

export default function StatsTicker() {
  const doubled = [...stats, ...stats];

  return (
    <div className="relative bg-gradient-to-r from-eco-dark via-[#0d2e18] to-eco-dark py-5 overflow-hidden border-y border-primary-500/20">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-eco-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-eco-dark to-transparent z-10" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {doubled.map((stat, i) => (
          <div key={i} className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-xl text-primary-400">{stat.value}</span>
              <span className="text-white/50 text-sm">{stat.label}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500/50" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

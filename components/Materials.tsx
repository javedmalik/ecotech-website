"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { materialsContent } from "@/content/process";

const colorMap: Record<string, string> = {
  blue: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  yellow: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
  green: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  teal: "from-teal-500/20 to-cyan-500/20 border-teal-500/30",
};

const dotColorMap: Record<string, string> = {
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
  teal: "bg-teal-500",
};

export default function Materials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="materials" className="relative section-padding bg-gray-50 dark:bg-[#0d1f10] overflow-hidden">
      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-500 font-semibold tracking-widest uppercase text-sm mb-3">
            {materialsContent.tagline}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
            {materialsContent.heading}
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {materialsContent.categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                active === i
                  ? "bg-primary-500 text-white shadow-eco-glow scale-105"
                  : "bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-primary-500/50"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`rounded-3xl p-8 bg-gradient-to-br ${colorMap[materialsContent.categories[active].color]} border backdrop-blur-sm`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">{materialsContent.categories[active].icon}</div>
              <div>
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                  {materialsContent.categories[active].name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {materialsContent.categories[active].items.length} material types accepted
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {materialsContent.categories[active].items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-white/50 dark:bg-white/5 rounded-xl px-4 py-3"
                >
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColorMap[materialsContent.categories[active].color]}`} />
                  <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Banner */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-center p-6 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20"
        >
          <p className="text-gray-700 dark:text-gray-200 mb-3 text-lg font-medium">
            Not sure if we accept your material?
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-primary inline-flex"
          >
            Ask Us — It&apos;s Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}

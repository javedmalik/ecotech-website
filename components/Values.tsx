"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { valuesContent } from "@/content/values";

export default function Values() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const colorMap: Record<string, string> = {
    "eco-blue": "from-blue-500 to-cyan-500",
    "eco-green": "from-green-500 to-emerald-500",
    "eco-teal": "from-teal-500 to-green-500",
    "eco-lime": "from-lime-500 to-green-400",
  };

  return (
    <section id="values" className="relative section-padding bg-gray-50 dark:bg-[#0d1f10] overflow-hidden">
      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-semibold tracking-widest uppercase text-sm mb-3">
            {valuesContent.tagline}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
            {valuesContent.heading}
          </h2>
        </motion.div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {valuesContent.values.map((val, i) => (
            <motion.div
              key={val.id}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="relative bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl p-6 text-center group overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[val.color]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon circle */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorMap[val.color]} flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {val.icon}
              </div>

              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3">
                {val.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Us Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white">
              Why Businesses Choose Us
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valuesContent.whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ x: -20, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl p-5 hover:border-primary-500/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

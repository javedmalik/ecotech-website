"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { servicesContent } from "@/content/services";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const card = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="services" className="relative section-padding bg-white dark:bg-[#0b1a0e] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30 dark:opacity-10" />

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-semibold tracking-widest uppercase text-sm mb-3">
            {servicesContent.tagline}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {servicesContent.heading}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {servicesContent.subheading}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesContent.services.map((service) => (
            <motion.div
              key={service.id}
              variants={card}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl p-6 overflow-hidden cursor-default"
            >
              {/* Gradient hover bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Arrow */}
              <div className="mt-5 flex items-center gap-1 text-primary-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

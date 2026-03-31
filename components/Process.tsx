"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processContent } from "@/content/process";

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative section-padding bg-white dark:bg-[#0b1a0e] overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-semibold tracking-widest uppercase text-sm mb-3">
            {processContent.tagline}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
            {processContent.heading}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {processContent.steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl p-6 text-center hover:border-primary-500/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-500 text-white text-xs font-black flex items-center justify-center shadow-eco-glow">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 mt-2 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Text */}
                  <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (except last) */}
                {i < processContent.steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center">
                    <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

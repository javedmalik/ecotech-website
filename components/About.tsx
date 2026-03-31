"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutContent } from "@/content/about";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative section-padding bg-gray-50 dark:bg-[#0d1f10] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border-2 border-primary-500" />
        <div className="absolute top-40 right-40 w-64 h-64 rounded-full border-2 border-primary-500" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full border-2 border-accent-500" />
      </div>

      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left — Text */}
          <div>
            <motion.p variants={item} className="text-primary-500 font-semibold tracking-widest uppercase text-sm mb-3">
              {aboutContent.tagline}
            </motion.p>
            <motion.h2 variants={item} className="font-display text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              {aboutContent.heading}
            </motion.h2>

            {aboutContent.description.map((para, i) => (
              <motion.p key={i} variants={item} className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-lg">
                {para}
              </motion.p>
            ))}

            {/* Vision */}
            <motion.div
              variants={item}
              className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20"
            >
              <div className="text-primary-500 font-bold text-sm mb-1">{aboutContent.vision.title}</div>
              <p className="text-gray-700 dark:text-gray-200 italic leading-relaxed">
                &ldquo;{aboutContent.vision.text}&rdquo;
              </p>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              {aboutContent.certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm"
                >
                  <span>{cert.icon}</span>
                  <span>{cert.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Stats + Visual */}
          <div className="relative">
            {/* Main visual card */}
            <motion.div
              variants={item}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-eco-dark to-[#0a2e18] p-8 text-white shadow-2xl"
            >
              {/* Decorative ring */}
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-primary-500/20" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full border border-primary-500/10" />

              <div className="relative z-10">
                <div className="text-6xl mb-4">♻️</div>
                <h3 className="font-display text-3xl font-bold mb-2">
                  Circular Economy
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  We transform waste streams into valuable resources, closing the loop for a sustainable future.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {aboutContent.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
                    >
                      <div className="font-display text-2xl font-black text-primary-400">
                        {stat.value}
                      </div>
                      <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="absolute -top-6 -left-6 bg-primary-500 text-white rounded-2xl px-4 py-3 shadow-eco-glow"
            >
              <div className="font-display font-black text-2xl">100%</div>
              <div className="text-xs text-white/80">Eco-Compliant</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

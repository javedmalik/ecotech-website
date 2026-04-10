"use client";

import { motion } from "framer-motion";
import { processContent } from "@/content/process";

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{processContent.tagline}</span>
          <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">Simple steps for quick collection</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {processContent.steps.map((step, i) => (
            <motion.div key={step.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-[28px] border border-slate-200 bg-[#f9fbf7] p-6 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">{step.icon}</div>
              <div className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-primary-600">Step {step.step}</div>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

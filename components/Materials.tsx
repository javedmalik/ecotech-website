"use client";

import { motion } from "framer-motion";
import { materialsContent } from "@/content/process";

export default function Materials() {
  return (
    <section
      id="materials"
      className="relative overflow-hidden bg-[#f5f5f5] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute left-0 top-0 hidden h-28 w-28 bg-[radial-gradient(#111827_1.7px,transparent_1.7px)] [background-size:12px_12px] lg:block" />
      <div className="absolute right-[8%] top-16 hidden h-36 w-36 rounded-full bg-[radial-gradient(#111827_1.7px,transparent_1.7px)] [background-size:12px_12px] lg:block" />

      <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 xl:px-0">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <div className="text-[15px] font-semibold text-primary-500">
              {materialsContent.tagline}
            </div>

            <h2 className="mt-5 max-w-[760px] font-serif text-4xl font-bold leading-[0.96] tracking-tight text-slate-900 sm:text-5xl xl:text-[60px]">
              {materialsContent.heading}
            </h2>

            <div className="mt-7 space-y-5 text-[17px] leading-8 text-slate-600">
              {materialsContent.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9">
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex min-h-[56px] items-center justify-center rounded-md bg-primary-500 px-10 text-[16px] font-bold text-white shadow-[0_18px_40px_rgba(104,198,59,0.28)] transition hover:bg-primary-600"
              >
                Book Collection
              </button>
            </div>
          </motion.div>

          {/* Right cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {materialsContent.categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-2xl">
                  {cat.icon}
                </div>

                <h3 className="mt-5 text-[22px] font-bold leading-tight text-slate-900">
                  {cat.name}
                </h3>

                <ul className="mt-4 space-y-2 text-[15px] leading-7 text-slate-600">
                  {cat.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[2px] text-primary-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
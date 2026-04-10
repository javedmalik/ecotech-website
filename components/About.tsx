"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { aboutContent } from "@/content/about";

export default function About() {
  const highlights =
    aboutContent.certifications?.length > 0
      ? aboutContent.certifications.map((item) => item.label)
      : [
          "DPIIT Recognized Startup",
          "MSME Registered",
          "Precious Metal Recovery",
        ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f5f5] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative dots */}
      <div className="absolute left-0 top-0 hidden h-28 w-28 bg-[radial-gradient(#111827_1.7px,transparent_1.7px)] [background-size:12px_12px] lg:block" />
      <div className="absolute right-[16%] top-14 hidden h-36 w-36 rounded-full bg-[radial-gradient(#111827_1.7px,transparent_1.7px)] [background-size:12px_12px] lg:block" />

      <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 xl:px-0">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="relative z-10"
          >
            <div className="text-[15px] font-semibold text-primary-500">
              {aboutContent.tagline}
            </div>

            <h2 className="mt-5 max-w-[720px] font-serif text-4xl font-bold leading-[0.96] tracking-tight text-slate-900 sm:text-5xl xl:text-[64px]">
              {aboutContent.heading}
            </h2>

            <div className="mt-7 max-w-[720px] space-y-4 text-[18px] leading-8 text-slate-600">
              {aboutContent.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 fill-primary-500 text-white" />
                  <span className="text-[18px] font-medium text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex min-h-[58px] items-center justify-center rounded-md bg-primary-500 px-10 text-[17px] font-bold text-white shadow-[0_18px_40px_rgba(104,198,59,0.28)] transition hover:bg-primary-600"
              >
                Contact Us
              </button>

              <div className="inline-flex min-h-[58px] items-center rounded-md border border-primary-200 bg-white px-6 text-[15px] font-semibold text-primary-600">
                {aboutContent.stats?.[0]?.value || "2026"} •{" "}
                {aboutContent.stats?.[0]?.label || "Incorporated"}
              </div>
            </div>
          </motion.div>

          {/* Right Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative h-[520px] w-full sm:h-[580px] lg:h-[620px]">
              {/* Main image */}
              <div className="absolute right-0 top-0 h-[78%] w-[78%] overflow-hidden rounded-[26px] bg-slate-200">
                <Image
                  src="/images/about/about-1.jpg"
                  alt="Industrial waste recycling and metal recovery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Top floating image */}
              <div className="absolute left-0 top-[22%] rounded-[22px] bg-white p-4 shadow-[0_22px_45px_rgba(15,23,42,0.10)]">
                <div className="relative h-[160px] w-[160px] overflow-hidden rounded-[16px] sm:h-[175px] sm:w-[175px]">
                  <Image
                    src="/images/about/about-3.jpg"
                    alt="Scrap collection and responsible disposal"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>
              </div>

              {/* Bottom floating image */}
              <div className="absolute left-[4%] bottom-[8%] rounded-[22px] bg-white p-4 shadow-[0_22px_45px_rgba(15,23,42,0.12)]">
                <div className="relative h-[150px] w-[260px] overflow-hidden rounded-[16px] sm:h-[165px] sm:w-[300px]">
                  <Image
                    src="/images/about/about-2.jpg"
                    alt="Sustainable recycling operations"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
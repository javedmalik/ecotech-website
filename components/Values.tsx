"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall, Truck, Trash2 } from "lucide-react";
import { valuesContent } from "@/content/values";

export default function Values() {
  const whyUs = valuesContent.whyUs.slice(0, 2);

  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1220px] items-center gap-14 px-5 sm:px-6 xl:grid-cols-[0.96fr_1.04fr] xl:px-0">
        {/* Left Visual */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="relative h-[520px] w-full sm:h-[620px] lg:h-[700px]">
            <Image
              src="/images/inspired/chooseus-1.png"
              alt="Why choose Ecotech Recyclers"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>

          {/* recycle icon */}
          <div className="absolute right-[8%] top-[22%] hidden lg:block">
            <div className="relative flex h-24 w-24 items-center justify-center text-primary-500">
              <svg viewBox="0 0 72 72" className="h-20 w-20 fill-current" aria-hidden="true">
                <path d="M31.7 8.3c1.1-1.8 3.6-2.4 5.4-1.2l9.1 5.6-3.7 2.1 4.5 7.9-6.1 3.5-4.5-7.9-3.8 2.2-.9-10.7Z" />
                <path d="M60.2 28.4c1.8 1.1 2.4 3.6 1.2 5.4l-5.6 9.1-2.1-3.7-7.9 4.5-3.5-6.1 7.9-4.5-2.2-3.8 10.2-.9Z" />
                <path d="M20 55.3c-1.8 1.1-4.3.6-5.4-1.2L9 45l4.3.1.1-9.1h7l-.1 9.1h4.4L20 55.3Z" />
                <path d="M14.5 26.7 22 14.2c1.4-2.4 4-3.8 6.8-3.8h10.6v7H28.8l-7.5 12.3-6.8-3Z" />
                <path d="M57.7 44.7 50.3 57c-1.4 2.4-4 3.8-6.8 3.8H32.8v-7h10.7L51 41.5l6.7 3.2Z" />
                <path d="M18.6 52.1H4.9c-2.8 0-5.4-1.5-6.8-3.8L-7 38.9l6.1-3.5 5.3 9.1h14.2v7.6Z" transform="translate(7 0)" />
              </svg>
            </div>
          </div>

          {/* dotted pattern */}
          <div className="absolute right-0 top-[30%] hidden h-36 w-36 bg-[radial-gradient(#111827_1.7px,transparent_1.7px)] [background-size:12px_12px] lg:block" />

          {/* emergency card */}
          <div className="absolute bottom-[14%] left-0 rounded-[22px] bg-white px-6 py-5 shadow-[0_24px_50px_rgba(15,23,42,0.10)] sm:px-7 sm:py-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                <PhoneCall className="h-8 w-8" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[16px] font-semibold text-primary-500">
                  For Emergency
                </div>
                <div className="mt-1 text-[24px] font-black tracking-tight text-slate-900 sm:text-[28px]">
                  1-800-400-70400
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="relative z-10"
        >
          <div className="text-[15px] font-semibold text-primary-500">
            Why Choose Us
          </div>

          <h2 className="mt-5 max-w-[720px] font-serif text-4xl font-bold leading-[0.96] tracking-tight text-slate-900 sm:text-5xl xl:text-[64px]">
            Why choose our waste disposal services
          </h2>

          <p className="mt-6 max-w-[720px] text-[18px] leading-8 text-slate-600">
            {valuesContent.description ||
              "Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia eu id in. Quisque porttitor tortor blandit nunc sed ac id. Mattis in nunc libero viverra. Consectetur leo nibh ac at amet."}
          </p>

          <div className="mt-10 space-y-7">
            {whyUs.map((item, i) => {
              const Icon = i === 0 ? Truck : Trash2;

              return (
                <div key={item.title} className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-500 sm:h-18 sm:w-18">
                    <Icon className="h-8 w-8" strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-[28px] font-bold leading-tight tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[560px] text-[17px] leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex min-h-[56px] items-center justify-center rounded-md bg-primary-500 px-10 text-[16px] font-bold text-white shadow-[0_18px_40px_rgba(104,198,59,0.28)] transition hover:bg-primary-600"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
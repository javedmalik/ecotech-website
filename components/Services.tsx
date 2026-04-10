"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Recycle, Trash2, Truck } from "lucide-react";
import { servicesContent } from "@/content/services";

const serviceIcons = [Trash2, Truck, Recycle];

export default function Services() {
  const top = servicesContent.services.slice(0, 3);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f3f7f4] py-20 sm:py-24 lg:py-28"
    >
      {/* soft texture / overlay */}
      <div className="absolute inset-0 opacity-[0.18] [background:radial-gradient(circle_at_20%_20%,rgba(15,23,42,0.05),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(15,23,42,0.05),transparent_26%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(15,23,42,0.35)_0.7px,transparent_0.7px)] [background-size:22px_22px]" />

      {/* right decorative dots */}
      <div className="absolute right-0 top-10 hidden h-[320px] w-[240px] opacity-20 lg:block">
        <div className="h-full w-full bg-[radial-gradient(#94a3b8_1.7px,transparent_1.7px)] [background-size:16px_16px]" />
      </div>

      <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 xl:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-[15px] font-semibold text-primary-500">
            {servicesContent.tagline}
          </div>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-[0.98] tracking-tight text-slate-900 sm:text-5xl xl:text-[64px]">
            {servicesContent.heading}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-8 text-slate-600">
            {servicesContent.subheading}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {top.map((service, i) => {
            const Icon = serviceIcons[i] || Recycle;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative mx-auto flex w-full max-w-[380px] flex-col overflow-visible rounded-[22px] bg-white px-7 pb-14 pt-7 text-center shadow-[0_20px_45px_rgba(15,23,42,0.06)]"
                style={{
                  borderRadius: "22px 22px 56px 56px",
                }}
              >
                {/* image area */}
                <div className="relative overflow-hidden rounded-[18px] rounded-b-[90px]">
                  <div className="relative h-[220px] w-full bg-slate-200">
                    <Image
                      src={service.image || "/images/services/service-1.jpg"}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 380px"
                    />
                  </div>
                </div>

                {/* bucket badge */}
                <div className="relative z-10 -mt-10 flex justify-center">
                  <div
                    className="flex h-[92px] w-[92px] items-center justify-center bg-white shadow-[0_16px_28px_rgba(15,23,42,0.08)]"
                    style={{
                      clipPath: "polygon(14% 0%, 86% 0%, 76% 100%, 24% 100%)",
                      borderRadius: "14px",
                    }}
                  >
                    <Icon
                      className="h-10 w-10 text-primary-500"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                <h3 className="mt-7 text-[22px] font-bold tracking-tight text-slate-900 sm:text-[24px]">
                  {service.title}
                </h3>

                <p className="mt-4 text-[16px] leading-8 text-slate-600">
                  {service.description}
                </p>

                {/* bottom circle arrow */}
                <button
                  aria-label={`Open ${service.title}`}
                  className="absolute bottom-[-32px] left-1/2 inline-flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-[#f3f3f3] text-slate-900 shadow-sm transition hover:bg-primary-500 hover:text-white"
                >
                  <ArrowRight className="h-7 w-7" strokeWidth={1.8} />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

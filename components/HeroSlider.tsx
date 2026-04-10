"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Trash2, Truck } from "lucide-react";
import { heroSlides } from "@/content/hero";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  const go = (href?: string) => {
    if (!href) return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const bottomCards = [
    {
      icon: <Trash2 className="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 text-primary-500" strokeWidth={1.8} />,
      title: "E-Waste & Scrap",
      text: "Electronic, industrial, metal, and recyclable scrap handling.",
    },
    {
      icon: <Truck className="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 text-primary-500" strokeWidth={1.8} />,
      title: "Collection & Recycling",
      text: "Pickup, segregation, dismantling, recycling, and disposal.",
    },
    {
      icon: <CalendarDays className="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 text-primary-500" strokeWidth={1.8} />,
      title: "Metal Recovery",
      text: "Recovery of Platinum, Palladium, and Rhodium from industrial waste.",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#eef3ef] pt-[86px] xl:pt-[134px]"
    >
      <div className="relative lg:min-h-[860px]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(137,201,126,0.23),transparent_38%),linear-gradient(90deg,#edf5ee_0%,#f2f1ec_45%,#eceaf5_100%)]" />

        {/* Dotted decorations */}
        <div className="absolute left-[58px] top-[78px] hidden h-24 w-24 bg-[radial-gradient(#1f2937_1.7px,transparent_1.7px)] [background-size:12px_12px] lg:block" />
        <div className="absolute right-[230px] top-[165px] hidden h-36 w-36 rounded-full bg-[radial-gradient(#111827_1.7px,transparent_1.7px)] [background-size:12px_12px] lg:block" />
        <div className="absolute left-0 bottom-[10px] hidden h-24 w-24 bg-[radial-gradient(#111827_1.7px,transparent_1.7px)] [background-size:12px_12px] lg:block" />

        {/* Decorative line icons */}
        <div className="pointer-events-none absolute left-[80px] top-[470px] hidden text-white/80 lg:block">
          <svg width="76" height="92" viewBox="0 0 76 92" fill="none">
            <path d="M18 20h32l-4 48H22L18 20Z" stroke="currentColor" strokeWidth="2" />
            <path d="M14 20h40" stroke="currentColor" strokeWidth="2" />
            <path d="M26 20c0-8 4-12 8-12s8 4 8 12" stroke="currentColor" strokeWidth="2" />
            <path d="M10 8 64 80" stroke="currentColor" strokeWidth="2" />
            <path d="M64 8 10 80" stroke="currentColor" strokeWidth="2" />
            <circle cx="24" cy="76" r="3" stroke="currentColor" strokeWidth="2" />
            <circle cx="44" cy="76" r="3" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[110px] hidden -translate-x-1/2 text-white/70 lg:block">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            <path d="M33 4 45 18l-7 2 6 11c2 4 0 9-4 11l-7 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M64 39 57 56l-7-5-6 11c-2 4-7 6-11 4l-8-3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 29 24 17l2 8h13c5 0 9 3 10 8l1 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Desktop arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-5 top-[42%] z-20 hidden h-14 w-14 items-center justify-center rounded-md bg-white text-slate-900 shadow-sm transition hover:bg-primary-500 hover:text-white lg:inline-flex"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>

        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-5 top-[42%] z-20 hidden h-14 w-14 items-center justify-center rounded-md bg-white text-slate-900 shadow-sm transition hover:bg-primary-500 hover:text-white lg:inline-flex"
        >
          <ArrowRight className="h-6 w-6" />
        </button>

        <div className="mx-auto w-full max-w-[1820px] px-4 sm:px-6 xl:px-10">
          <div className="grid items-center gap-8 pt-8 pb-10 sm:pt-10 sm:pb-12 lg:min-h-[620px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pt-16 lg:pb-48">
            {/* Left content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${slide.id}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.45 }}
                className="relative z-10 mx-auto w-full max-w-[620px] lg:ml-auto lg:mr-0"
              >
                <div className="text-sm sm:text-[16px] font-semibold text-primary-500">
                  {slide.badge || "Waste Pickup"}
                </div>

                <h1 className="mt-3 sm:mt-4 max-w-[540px] font-serif text-[38px] leading-[0.98] font-bold text-slate-900 sm:text-5xl md:text-6xl xl:text-[72px]">
                  {slide.headline} <span className="block">{slide.headlineAccent}</span>
                </h1>

                <p className="mt-4 sm:mt-5 max-w-[520px] text-[16px] leading-7 text-slate-600 sm:text-[18px] sm:leading-8 lg:text-[20px]">
                  {slide.subheadline}
                </p>

                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => go(slide.cta?.href)}
                    className="inline-flex min-h-[50px] sm:min-h-[56px] items-center justify-center rounded-md bg-primary-500 px-6 sm:px-10 text-[15px] sm:text-[16px] font-bold text-white transition hover:bg-primary-600"
                  >
                    {slide.cta?.label || "Read More"}
                  </button>

                  {slide.ctaSecondary?.href && (
                    <button
                      onClick={() => go(slide.ctaSecondary?.href)}
                      className="inline-flex min-h-[50px] sm:min-h-[56px] items-center justify-center rounded-md border border-slate-300 bg-white px-6 sm:px-8 text-[15px] sm:text-[16px] font-semibold text-slate-800 transition hover:border-primary-500 hover:text-primary-600"
                    >
                      {slide.ctaSecondary?.label || "Learn More"}
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${slide.id}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45 }}
                className="relative z-10 mx-auto flex w-full max-w-[760px] items-center justify-center"
              >
                <div className="relative h-[240px] w-full sm:h-[320px] md:h-[380px] lg:h-[520px]">
                  <Image
                    src={slide.image}
                    alt={slide.headline}
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile arrows */}
            <div className="flex items-center justify-center gap-3 lg:hidden">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-md bg-white text-slate-900 shadow-sm"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-md bg-white text-slate-900 shadow-sm"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom white curved band - desktop only */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[175px] bg-white [clip-path:ellipse(80%_100%_at_50%_100%)] lg:block" />

        {/* Bottom cards */}
        <div className="relative z-20 px-4 pb-10 sm:px-5 sm:pb-12 lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-0 lg:pb-0 lg:translate-y-[24%]">
          <div className="mx-auto grid w-full max-w-[980px] gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6">
            {bottomCards.map((card) => (
              <div
                key={card.title}
                className="relative mx-auto flex min-h-[220px] sm:min-h-[240px] lg:min-h-[320px] w-full max-w-[320px] flex-col items-center justify-center overflow-hidden bg-white px-5 sm:px-6 lg:px-7 pt-8 sm:pt-9 lg:pt-10 pb-6 sm:pb-7 lg:pb-8 text-center shadow-[0_20px_35px_rgba(15,23,42,0.10)]"
                style={{
                  borderRadius: "18px 18px 34px 34px / 12px 12px 34px 34px",
                  clipPath: "polygon(8% 0%, 92% 0%, 100% 14%, 92% 100%, 8% 100%, 0% 14%)",
                }}
              >
                <div className="absolute inset-x-4 top-0 h-4 rounded-b-[20px] bg-[#f4f4f4]" />
                <div className="mb-4 sm:mb-5 lg:mb-6">{card.icon}</div>
                <h3 className="text-[20px] sm:text-[21px] lg:text-[22px] font-bold tracking-tight text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-3 sm:mt-4 max-w-[220px] text-[14px] sm:text-[15px] lg:text-[16px] leading-6 sm:leading-7 text-slate-600">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
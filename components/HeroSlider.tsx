"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/content/hero";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
}));

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const textVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.3 + i * 0.15, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Slides */}
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`}
        >
          {/* Animated mesh overlay */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="g1" cx="20%" cy="30%" r="50%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <radialGradient id="g2" cx="80%" cy="70%" r="50%">
                  <stop offset="0%" stopColor="#1a75c4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#g1)" />
              <rect width="100%" height="100%" fill="url(#g2)" />
            </svg>
          </div>

          {/* Dot pattern */}
          <div className="absolute inset-0 dot-pattern opacity-20" />

          {/* Floating Particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-primary-400/40"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Large decorative circle */}
          <motion.div
            className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-8 rounded-full border border-white/5" />
            <div className="absolute inset-16 rounded-full border border-primary-500/10" />
          </motion.div>

          {/* Recycling symbol large watermark */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[300px] opacity-[0.03] select-none pointer-events-none font-display font-black">
            ♻
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <div key={`content-${slide.id}`}>
                {/* Badge */}
                <motion.div
                  custom={0}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse-slow" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">
                    {slide.badge}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-3"
                >
                  {slide.headline}
                  <br />
                  <span className="eco-gradient-text">{slide.headlineAccent}</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-white/70 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
                >
                  {slide.subheadline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  custom={3}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-4 items-center"
                >
                  <a
                    href={slide.cta.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(slide.cta.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-primary text-base"
                  >
                    {slide.cta.label}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href={slide.ctaSecondary.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(slide.ctaSecondary.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-outline text-base"
                  >
                    {slide.ctaSecondary.label}
                  </a>
                </motion.div>

                {/* Stat Badge */}
                <motion.div
                  custom={4}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-10 inline-flex items-center gap-3 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3"
                >
                  <div className="text-3xl font-display font-black text-primary-400">
                    {slide.stat.value}
                  </div>
                  <div className="text-white/60 text-sm leading-tight">
                    {slide.stat.label}
                  </div>
                </motion.div>
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? "w-8 h-2 bg-primary-400"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        onClick={() => { setDirection(-1); setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hidden sm:flex"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hidden sm:flex"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-1 text-white/40 hidden md:flex"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

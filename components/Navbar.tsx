"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Search,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { siteConfig } from "@/content/site";

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7.7v3h2.6v8h3.2Z" />
    </svg>
  );
}

function TwitterIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.53 3H20.6l-6.7 7.66L21.8 21h-6.18l-4.84-6.32L5.25 21H2.17l7.16-8.18L1.8 3h6.33l4.38 5.77L17.53 3Zm-1.08 16.2h1.7L7.2 4.7H5.38l11.07 14.5Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM5.5 9.75h2.88V19H5.5V9.75Zm4.69 0h2.76V11h.04c.38-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.82 3.47 4.2V19h-2.88v-4.68c0-1.12-.02-2.56-1.65-2.56-1.65 0-1.9 1.2-1.9 2.47V19H10.2V9.75Z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (href: string) => {
    setOpen(false);

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.location.href = href;
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        {/* Top Bar */}
        <div className="hidden xl:block bg-[#0C2454] text-white">
          <div className="mx-auto flex h-12 w-full max-w-[1820px] items-center justify-between px-6 2xl:px-10">
            <div className="flex items-center gap-6 2xl:gap-8 text-[14px]">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Clock3 className="h-4 w-4 text-[#2FB41F]" />
                <span className="text-white/90">
                  Open Hours:{" "}
                  <strong className="font-semibold text-white">Mon–Fri 8:00 am–6:00 pm</strong>
                </span>
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <Mail className="h-4 w-4 text-[#2FB41F]" />
                <span className="text-white/90">
                  Email: <strong className="font-semibold text-white">info@example.com</strong>
                </span>
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <MapPin className="h-4 w-4 text-[#2FB41F]" />
                <span className="text-white/90">
                  Address: <strong className="font-semibold text-white">8302 Preston Rd. Maine 9380</strong>
                </span>
              </div>
            </div>

            <div className="flex h-full items-center">
              <button className="px-6 text-[15px] font-semibold text-white transition hover:text-[#2FB41F]">
                Login
              </button>

              <div className="flex h-full items-center border-l border-white/15 pl-3">
                <a
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center text-white transition hover:text-[#2FB41F]"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center text-white transition hover:text-[#2FB41F]"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center text-white transition hover:text-[#2FB41F]"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`border-b border-slate-200 bg-white transition-all duration-300 ${
            scrolled ? "shadow-[0_10px_35px_rgba(2,6,23,0.08)]" : ""
          }`}
        >
          <div className="mx-auto flex h-[86px] w-full max-w-[1820px] items-center justify-between gap-8 px-6 2xl:px-10">
            {/* Logo */}
            <button
              onClick={() => navigate("/")}
              className="flex shrink-0 items-center gap-3 text-left"
              aria-label="Go to home"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-md">
                <Image
                  src="/logomain.jpeg"
                  alt="Ecotech Recyclers"
                  fill
                  priority
                  sizes="88px"
                  className="object-cover"
                />
              </div>

              <div className="leading-none">
                <div className="text-[22px] font-black tracking-tight text-[#276CF5]">
                  Ecotech Recyclers
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2FB41F]">
                  Waste To Worth
                </div>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden flex-1 items-center justify-center xl:flex">
              <div className="flex items-center gap-10 2xl:gap-12">
                {siteConfig.nav.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => navigate(item.href)}
                    className={`inline-flex items-center gap-1 px-1 text-[17px] font-medium transition ${
                      index === 0
                        ? "text-[#2FB41F]"
                        : "text-slate-800 hover:text-[#2FB41F]"
                    }`}
                  >
                    {item.label}
                    {index === 0 ? <ChevronDown className="h-4 w-4" /> : null}
                  </button>
                ))}
              </div>
            </nav>

            {/* Right Side */}
            <div className="hidden shrink-0 items-center xl:flex">
              <div className="mr-6 flex items-center gap-4 border-l border-r border-slate-200 px-6 2xl:px-7">
                <Phone className="h-5 w-5 text-[#2FB41F]" />
                <span className="whitespace-nowrap text-[18px] font-medium tracking-tight text-slate-800">
                  (239)-543-217-0108
                </span>
              </div>

              <button
                aria-label="Search"
                className="mr-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-[#2FB41F] hover:text-[#2FB41F]"
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                onClick={() => navigate("#contact")}
                className="inline-flex h-[60px] items-center rounded-md bg-[#35A51D] px-8 text-[16px] font-bold text-white transition hover:bg-[#2e9319]"
              >
                Request A Pickup
              </button>
            </div>

            {/* Mobile Button */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800 xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-4 top-24 z-50 rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl xl:hidden"
          >
            <div className="flex flex-col gap-2">
              {siteConfig.nav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => navigate(item.href)}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-green-50 hover:text-[#2FB41F]"
                >
                  {item.label}
                </button>
              ))}

              <div className="mt-2 border-t border-slate-200 pt-3">
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-700">
                  <Phone className="h-4 w-4 text-[#2FB41F]" />
                  <span>(239)-543-217-0108</span>
                </div>

                <button
                  onClick={() => navigate("#contact")}
                  className="w-full rounded-xl bg-[#35A51D] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#2e9319]"
                >
                  Request A Pickup
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
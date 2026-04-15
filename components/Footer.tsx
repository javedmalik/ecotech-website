"use client";

import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  ChevronUp,
} from "lucide-react";

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

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.8A2.95 2.95 0 0 0 4.8 7.75v8.5a2.95 2.95 0 0 0 2.95 2.95h8.5a2.95 2.95 0 0 0 2.95-2.95v-8.5a2.95 2.95 0 0 0-2.95-2.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.6A4.4 4.4 0 1 1 7.6 12 4.4 4.4 0 0 1 12 7.6Zm0 1.8A2.6 2.6 0 1 0 14.6 12 2.6 2.6 0 0 0 12 9.4Z" />
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

export default function Footer() {
  const links = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Materials", href: "#materials" },
    { label: "Request Pickup", href: "#contact" },
    { label: "Contact Us", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#003b2f] text-white"
    >
      {/* layered background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,66,47,0.92),rgba(0,50,38,0.98))]" />
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top_left,rgba(12,99,73,0.45),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(8,88,62,0.42),transparent_34%)]" />
      <div className="absolute inset-0 opacity-20 [background:linear-gradient(165deg,transparent_0%,transparent_32%,rgba(255,255,255,0.06)_33%,transparent_34%,transparent_52%,rgba(255,255,255,0.04)_53%,transparent_54%)]" />

      <div className="relative mx-auto w-full max-w-[1220px] px-5 sm:px-6 xl:px-0">
        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.7fr_0.9fr_1fr] lg:gap-14">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-md">
                <Image
                  src="/logo.jpeg"
                  alt="Ecotech Recyclers"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>

              <div>
                <div className="text-[20px] font-black tracking-tight text-white">
                  Ecotech
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary-300">
                  Waste To Worth
                </div>
              </div>
            </div>

            <div className="mt-7 max-w-[280px] space-y-6 text-[18px] leading-9 text-white/90">
              <p>
                Responsible scrap collection, recycling, and recovery
                solutions for industrial, commercial, and domestic sources.
              </p>
              <p>
                Trusted handling of e-waste, metal scrap, and precious
                metal-bearing materials with transparent service.
              </p>
            </div>
          </div>

          {/* links */}
          <div>
            <h3 className="font-serif text-[28px] font-bold text-white">
              Links
            </h3>

            <div className="mt-7 flex flex-col gap-4 text-[18px] text-white/95">
              {links.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="w-fit text-left transition hover:text-primary-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* hours */}
          <div>
            <h3 className="font-serif text-[28px] font-bold text-white">
              Working Hours
            </h3>

            <p className="mt-7 max-w-[280px] text-[18px] leading-9 text-white/90">
              Monday to Saturday support for pickup coordination, service
              inquiries, and collection scheduling.
            </p>

            <div className="mt-8 space-y-3 text-[18px] text-white">
              <div>Mon – Sat: 9:00AM – 6:00PM</div>
              <div>Sunday: By Appointment</div>
            </div>
          </div>

          {/* contact */}
          <div>
            <h3 className="font-serif text-[28px] font-bold text-white">
              Get In Touch
            </h3>

            <div className="mt-7 space-y-4 text-[18px] text-white/95">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary-400" />
                <span>India</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary-400" />
                <span>ecotechrecyclerspvtltd@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary-400" />
                <span>+91-855-009-8230</span>
                
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary-400" />
               <span>+91-936-810-2217</span>
                
              </div>
              
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary-500"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary-500"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary-500"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary-500"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom strip */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex min-h-[86px] w-full max-w-[1220px] items-center justify-center px-5 text-center text-[18px] font-medium text-white/95 sm:px-6 xl:px-0">
          © 2026 Ecotech Recyclers. All Rights Reserved.
        </div>
      </div>

      {/* scroll top */}
      <button
        onClick={scrollTop}
        aria-label="Scroll to top"
        className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg transition hover:bg-primary-600"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
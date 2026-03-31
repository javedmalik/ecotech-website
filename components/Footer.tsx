"use client";

import Image from "next/image";
import { siteConfig } from "@/content/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eco-dark dark:bg-[#060f07] text-white border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary-500/30">
                <Image
                  src="/logo.jpeg"
                  alt="Ecotech Recyclers"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-display font-bold text-lg">
                  Ecotech Recyclers
                </div>
                <div className="text-primary-400 text-xs font-semibold tracking-widest uppercase">
                  Waste to Worth
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5">
              India&apos;s trusted e-waste and scrap recycling company.
              DPIIT-recognized, MSME-registered, committed to building a
              sustainable circular economy.
            </p>
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {["DPIIT Startup", "MSME Registered", "OPC Pvt. Ltd."].map(
                (b) => (
                  <span
                    key={b}
                    className="bg-primary-500/10 border border-primary-500/20 rounded-full px-3 py-1 text-xs text-primary-400 font-medium"
                  >
                    {b}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white/60 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-primary-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white/60 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "E-Waste Recycling",
                "Precious Metal Recovery",
                "Industrial Scrap",
                "Door-to-Door Pickup",
                "Import & Export",
                "Corporate Solutions",
              ].map((s) => (
                <li key={s}>
                  <span className="text-white/50 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            {siteConfig.footer.copyright.replace(
              "2026",
              currentYear.toString(),
            )}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/20 text-xs">
              {siteConfig.footer.cin}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/30 text-xs">Made with</span>
            <span className="text-primary-400">♻️</span>
            <span className="text-white/30 text-xs">for a greener planet</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

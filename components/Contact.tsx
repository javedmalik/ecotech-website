"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, ShieldCheck, Truck, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 hidden h-24 w-24 bg-[radial-gradient(#166534_1px,transparent_1px)] [background-size:12px_12px] opacity-30 lg:block" />
      <div className="absolute right-[5%] top-12 hidden h-28 w-28 rounded-full bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:12px_12px] opacity-20 lg:block" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-800 shadow-xl">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Left Content */}
            <div className="p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Contact Us
              </div>

              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Schedule pickup & handle your scrap responsibly
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-emerald-100/80">
                Share your scrap type, estimated quantity, and pickup location.
                Our team will help with collection planning, valuation, and
                environmentally sound processing.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <div className="flex items-start gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                      <Truck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Fast Pickup Support
                      </div>
                      <p className="mt-0.5 text-xs text-emerald-100/70">
                        Residential, commercial collection
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <div className="flex items-start gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Trusted Processing
                      </div>
                      <p className="mt-0.5 text-xs text-emerald-100/70">
                        Transparent & responsible recycling
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-emerald-100/80">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-300" />
                  <span className="text-sm">info@ecotechrecyclers.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-300" />
                  <span className="text-sm">+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-300" />
                  <span className="text-sm">Uttar Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-emerald-50 to-white/80">
              {submitted ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Request received!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-gray-500">
                    Thank you. Our team will review your request and contact you
                    regarding pickup scheduling.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-emerald-500 hover:text-emerald-600"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Get in touch
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Fill in your details and tell us about your scrap material.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-700">
                        Full name *
                      </label>
                      <input
                        className="w-full bg-white rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        className="w-full bg-white rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-700">
                      Email address *
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="Enter email address"
                      required
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-700">
                        Material type
                      </label>
                      <input
                        className="w-full bg-white rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        placeholder="E-waste, metal, etc."
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-700">
                        Approx. quantity
                      </label>
                      <input
                        className="w-full bg-white rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        placeholder="Estimated quantity"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-700">
                      Pickup location
                    </label>
                    <input
                      className="w-full bg-white rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="City / area / address"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-white rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="Tell us about scrap type, quantity, preferred pickup time..."
                    />
                  </div>

                  <button
                    className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    type="submit"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
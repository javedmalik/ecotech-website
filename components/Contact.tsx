"use client";

import React, { useMemo, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  ShieldCheck,
  Truck,
  ArrowRight,
  Clock,
  Recycle,
  Factory,
} from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "E-Waste Recycling",
    message: "",
  });

  const contactInfo = useMemo(
    () => [
      {
        icon: <Phone className="h-5 w-5" />,
        title: "Call Us",
        details: "+91-855-009-8230, +91-936-810-2217",
        subtitle: "Pickup support & quick assistance",
      },
      {
        icon: <Mail className="h-5 w-5" />,
        title: "Email",
        details: "ecotechrecyclerspvtltd@gmail.com",
        subtitle: "Response within business hours",
      },
      
    ],
    [],
  );

  const locationInfo = useMemo(
    () => [
      
      {
        icon: <MapPin className="h-5 w-5" />,
        title: "Location",
        details: "Khasra NO. 410 Noornagar, Lisari Road, Lisari Gate, Meerut(UP) - 250002",
        subtitle: "Serving NCR and beyond",
      },
    ],
    [],
  );

  const services = useMemo(
    () => [
      {
        value: "E-Waste Recycling",
        icon: <Recycle className="h-5 w-5" />,
      },
      {
        value: "Scrap Collection",
        icon: <Truck className="h-5 w-5" />,
      },
      {
        value: "Industrial Disposal",
        icon: <Factory className="h-5 w-5" />,
      },
      {
        value: "Pickup Request",
        icon: <ShieldCheck className="h-5 w-5" />,
      },
    ],
    [],
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      service: formData.service.trim(),
      message: formData.message.trim(),
    };

    if (
      !payload.name ||
      !payload.phone ||
      !payload.email ||
      !payload.service ||
      !payload.message
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      setStatus("idle");

      const form = e.currentTarget;

      const res = await fetch(form.action, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (!res.ok) throw new Error("Formspree submit failed");

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "E-Waste Recycling",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white py-14 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(34,197,94,0.28), transparent 60%)",
          }}
        />
        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(26,117,196,0.22), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(250,204,21,0.18), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 shadow-sm">
            <MessageSquare className="h-4 w-4 text-emerald-600" />
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-700">
              Contact Us
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Schedule a{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
              Pickup Request
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Share your scrap material, quantity, and location. Our team will
            help with pickup planning, valuation, and responsible recycling.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-emerald-600">
                    {info.icon}
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-extrabold text-slate-900">
                      {info.title}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-700">
                      {info.details}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {info.subtitle}
                    </div>
                  </div>

                  <div className="mt-4 h-[3px] w-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 opacity-80" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
              {locationInfo.map((info, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-emerald-600">
                    {info.icon}
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-extrabold text-slate-900">
                      {info.title}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-700">
                      {info.details}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {info.subtitle}
                    </div>
                  </div>

                  <div className="mt-4 h-[3px] w-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 opacity-80" />
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                  <Clock className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-900">
                    What you get
                  </div>
                  <div className="text-sm text-slate-600">
                    Fast support, transparent process, and reliable pickup coordination.
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Free pickup consultation",
                  "Scrap type assessment",
                  "Quick response from team",
                  "Transparent handling process",
                  "Trusted recycling workflow",
                  "Business & bulk pickup support",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-extrabold text-slate-900">
                Service areas
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Delhi",
                  "Noida",
                  "Ghaziabad",
                  "Faridabad",
                  "Gurgaon",
                  "NCR",
                  "Pan India",
                ].map((area, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-emerald-500 to-lime-400 opacity-20 blur" />

            <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-lime-500 text-white shadow-sm">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900">
                    Get in touch
                  </div>
                  <div className="text-sm text-slate-600">
                    Fill the form below
                  </div>
                </div>
              </div>

              <form
                action="https://formspree.io/f/mdkzqqwr"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input
                  type="hidden"
                  name="source"
                  value="Ecotech Website - Contact Form"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-bold text-slate-700">
                    Select service *
                  </label>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {services.map((service, idx) => {
                      const active = formData.service === service.value;

                      return (
                        <label
                          key={idx}
                          className={[
                            "group cursor-pointer rounded-2xl border p-4 transition",
                            active
                              ? "border-transparent shadow-sm"
                              : "border-slate-200 hover:border-slate-300",
                          ].join(" ")}
                          style={
                            active
                              ? {
                                  background:
                                    "linear-gradient(180deg, rgba(255,255,255,1), rgba(248,250,252,1))",
                                  boxShadow: "0 14px 40px rgba(2,6,23,0.08)",
                                  border: "1px solid rgba(148,163,184,0.35)",
                                }
                              : undefined
                          }
                        >
                          <input
                            type="radio"
                            name="service"
                            value={service.value}
                            checked={active}
                            onChange={handleChange}
                            className="sr-only"
                            disabled={loading}
                          />

                          <div className="flex items-center gap-3">
                            <div
                              className={[
                                "flex h-10 w-10 items-center justify-center rounded-2xl border",
                                active
                                  ? "border-transparent bg-gradient-to-r from-emerald-600 to-lime-500 text-white"
                                  : "border-slate-200 bg-slate-50 text-slate-600",
                              ].join(" ")}
                            >
                              {service.icon}
                            </div>

                            <div className="flex-1">
                              <div className="text-sm font-extrabold text-slate-900">
                                {service.value}
                              </div>
                              <div className="text-xs text-slate-500">
                                Tap to select
                              </div>
                            </div>

                            <div
                              className={[
                                "flex h-5 w-5 items-center justify-center rounded-full border",
                                active
                                  ? "border-emerald-300 bg-emerald-50"
                                  : "border-slate-200 bg-white",
                              ].join(" ")}
                            >
                              {active ? (
                                <CheckCircle className="h-4 w-4 text-emerald-600" />
                              ) : null}
                            </div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Requirement *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    disabled={loading}
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                    placeholder="Tell us your scrap type, quantity, location, preferred pickup time, and any other details..."
                  />
                </div>

                {status === "success" && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                    ✅ Submitted successfully. Our team will contact you shortly.
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    ❌ Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-lime-500 px-6 py-4 font-extrabold text-white shadow-sm disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/80 border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Request
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>

                <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <p className="text-sm text-slate-700">
                    <span className="font-extrabold">Assured response:</span>{" "}
                    Our team will review your request and reach out with next
                    steps.
                  </p>
                </div>

                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
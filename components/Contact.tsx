"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { contactContent } from "@/content/process";

// Simple sanitization helper
function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  material: string;
  message: string;
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    material: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formState, setFormState] = useState<FormState>("idle");

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim() || formData.name.length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (formData.phone && !/^[\d\s\-+()]{7,15}$/.test(formData.phone)) newErrors.phone = "Please enter a valid phone number";
    if (!formData.message.trim() || formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Limit input length for security
    if (value.length > 1000) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("submitting");

    // Sanitize all inputs before submission
    const sanitizedData = {
      name: sanitize(formData.name),
      email: sanitize(formData.email),
      phone: sanitize(formData.phone),
      material: sanitize(formData.material),
      message: sanitize(formData.message),
    };

    // Simulate API call (replace with your actual endpoint)
    console.log("Form submitted:", sanitizedData);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState("success");
      setFormData({ name: "", email: "", phone: "", material: "", message: "" });
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="relative section-padding bg-white dark:bg-[#0b1a0e] overflow-hidden">
      {/* BG */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-14"
        >
          <p className="text-primary-500 font-semibold tracking-widest uppercase text-sm mb-3">
            {contactContent.tagline}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {contactContent.heading}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {contactContent.subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Details */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Contact Cards */}
            <div className="grid gap-4 mb-8">
              {contactContent.details.map((detail) => (
                <div
                  key={detail.title}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl hover:border-primary-500/40 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-xl flex-shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-0.5">
                      {detail.title}
                    </div>
                    <div className="text-gray-800 dark:text-gray-100 font-medium">
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder / visual */}
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-eco-dark to-[#0a2e18] p-8 text-white relative">
              <div className="absolute inset-0 dot-pattern opacity-20" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="font-display text-2xl font-bold mb-2">Pan India Operations</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We serve residential, commercial, and industrial clients across all major cities and states in India.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Uttar Pradesh"].map((city) => (
                    <span key={city} className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/80">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl p-8"
          >
            {formState === "success" ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="btn-primary"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <div className="space-y-5">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Request a Free Pickup / Quote
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={100}
                    placeholder="Your name"
                    autoComplete="name"
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border ${errors.name ? "border-red-500" : "border-gray-200 dark:border-white/10"} text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-200`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={200}
                      placeholder="your@email.com"
                      autoComplete="email"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border ${errors.email ? "border-red-500" : "border-gray-200 dark:border-white/10"} text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-200`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={15}
                      placeholder="+91 XXXXX XXXXX"
                      autoComplete="tel"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border ${errors.phone ? "border-red-500" : "border-gray-200 dark:border-white/10"} text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-200`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Material */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Scrap Material Type
                  </label>
                  <input
                    type="text"
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    maxLength={200}
                    placeholder="E.g. E-waste, copper, gold scrap..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={1000}
                    rows={4}
                    placeholder="Quantity, location, preferred pickup time..."
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border ${errors.message ? "border-red-500" : "border-gray-200 dark:border-white/10"} text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-200 resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  <p className="text-gray-400 text-xs mt-1 text-right">{formData.message.length}/1000</p>
                </div>

                {formState === "error" && (
                  <p className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 rounded-xl px-4 py-3">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={formState === "submitting"}
                  className="w-full btn-primary justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {formState === "submitting" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  🔒 Your information is secure and will never be shared.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaPaw, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/constants";

interface Form {
  occasion: string;
  date: string;
  petType: string;
  petName: string;
  duration: string;
  name: string;
  phone: string;
}

const empty: Form = {
  occasion: "",
  date: "",
  petType: "",
  petName: "",
  duration: "",
  name: "",
  phone: "",
};

const OCCASIONS = [
  { label: "Wedding", icon: "💒" },
  { label: "Travel", icon: "✈️" },
  { label: "Party", icon: "🎉" },
  { label: "Function", icon: "🪔" },
  { label: "Work", icon: "💼" },
  { label: "Other", icon: "📅" },
];

const PET_TYPES = [
  { label: "Dog", icon: "🐶" },
  { label: "Cat", icon: "🐱" },
  { label: "Rabbit", icon: "🐰" },
  { label: "Bird", icon: "🦜" },
  { label: "Other", icon: "🐾" },
];

const DURATIONS = [
  { label: "Few hours", icon: "⏱" },
  { label: "Half day", icon: "🌤" },
  { label: "Full day", icon: "☀️" },
  { label: "Overnight", icon: "🌙" },
  { label: "Multi-day", icon: "📆" },
];

function Pill({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl border-2 text-base font-semibold transition-all duration-200 hover:scale-[1.03] ${
        active
          ? "border-[#FF6B35] bg-[#FF6B35] text-white shadow-lg shadow-orange-200"
          : "border-gray-200 bg-white text-[#1A1A2E] hover:border-orange-200"
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm">{label}</span>
    </button>
  );
}

export default function BookingSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof Form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const canNext = [
    form.occasion && form.date,
    form.petType && form.duration,
    form.name.trim() && form.phone.replace(/\D/g, "").length >= 10,
  ];

  const go = (n: number) => {
    setStep((s) => s + n);
    setError("");
  };

  const handleSubmit = async () => {
    if (!canNext[2]) {
      setError("Please enter your name and a valid phone number.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];
  const STEPS = ["Your Event", "Your Pet", "Contact"];

  const waMessage = encodeURIComponent(
    `Hi! I'd like to book a pet sitter for my ${form.occasion} on ${form.date}. Pet: ${form.petName || form.petType}, duration: ${form.duration}. Name: ${form.name}, Phone: ${form.phone}`
  );

  return (
    <section id="booking" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-50 rounded-full opacity-50 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-xl mx-auto relative">
        {!hideHeader && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-intro mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-4">
            <FaCalendarAlt className="text-[#FF6B35] text-base" />
            <span className="text-base font-semibold text-[#FF6B35]">Book an Appointment</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-[#1A1A2E] mb-3"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Book in <span className="text-gradient-orange">2 minutes</span>
          </h2>
          <p className="text-lg text-[#4A4A6A]">
            Three quick steps — we&apos;ll call you back within 2 hours.
          </p>
        </motion.div>
        )}

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-white rounded-[28px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="flex flex-col items-center py-14 px-8 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <FaCheckCircle className="text-5xl text-[#48BB78]" />
                </div>
                <h3 className="text-3xl font-extrabold text-[#1A1A2E] mb-2" style={{ fontFamily: "var(--font-nunito)" }}>
                  You&apos;re all set, {form.name.split(" ")[0]}! 🎉
                </h3>
                <p className="text-[#4A4A6A] mb-6">
                  We&apos;ll call you at <strong className="text-[#FF6B35]">{form.phone}</strong> within 2 hours.
                </p>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-green-50 border border-green-200 mb-6">
                  <FaPaw className="text-[#48BB78]" />
                  <span className="text-base font-semibold text-[#48BB78]">
                    {form.petName || form.petType} is in good hands!
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a
                    href={`${WHATSAPP_URL.split("?")[0]}?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-2xl bg-[#25D366] text-white font-bold text-base text-center hover:opacity-90 transition-opacity"
                  >
                    Continue on WhatsApp
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); setForm(empty); setStep(0); }}
                    className="flex-1 py-3 rounded-2xl border-2 border-gray-200 text-[#4A4A6A] font-semibold text-base hover:border-orange-200 transition-colors"
                  >
                    New Booking
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="form" className="p-7 sm:p-8 text-readable">
                {/* Progress bar */}
                <div className="h-1.5 w-full bg-gray-100 rounded-full mb-6 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full gradient-orange"
                    animate={{ width: `${((step + 1) / 3) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Step labels */}
                <div className="flex items-center gap-3 mb-8">
                  {STEPS.map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                          i <= step ? "gradient-orange text-white" : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {i < step ? "✓" : i + 1}
                      </div>
                      <span className={`text-sm font-semibold hidden sm:block ${i === step ? "text-[#1A1A2E]" : "text-gray-400"}`}>
                        {s}
                      </span>
                      {i < 2 && <div className="w-4 h-px bg-gray-200 hidden sm:block" />}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Step 0 — Event */}
                    {step === 0 && (
                      <>
                        <div>
                          <h3 className="text-xl font-bold text-[#1A1A2E] mb-1">What&apos;s the occasion?</h3>
                          <p className="text-base text-[#8888AA]">Pick one and choose your date.</p>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                          {OCCASIONS.map((o) => (
                            <Pill key={o.label} label={o.label} icon={o.icon}
                              active={form.occasion === o.label}
                              onClick={() => set("occasion", o.label)} />
                          ))}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-base font-semibold text-[#1A1A2E]">Event Date</label>
                          <input
                            type="date"
                            min={today}
                            value={form.date}
                            onChange={(e) => set("date", e.target.value)}
                            className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-[#1A1A2E] text-base outline-none focus:ring-2 focus:ring-[#FF6B35]/30 focus:border-[#FF6B35]"
                          />
                        </div>
                      </>
                    )}

                    {/* Step 1 — Pet */}
                    {step === 1 && (
                      <>
                        <div>
                          <h3 className="text-xl font-bold text-[#1A1A2E] mb-1">Tell us about your pet.</h3>
                          <p className="text-base text-[#8888AA]">Helps us find the right sitter.</p>
                        </div>
                        <div>
                          <p className="text-base font-semibold text-[#1A1A2E] mb-2">Pet type</p>
                          <div className="grid grid-cols-5 gap-2">
                            {PET_TYPES.map((p) => (
                              <Pill key={p.label} label={p.label} icon={p.icon}
                                active={form.petType === p.label}
                                onClick={() => set("petType", p.label)} />
                            ))}
                          </div>
                        </div>
                        <input
                          type="text"
                          value={form.petName}
                          onChange={(e) => set("petName", e.target.value)}
                          placeholder="Pet's name (optional)"
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-[#1A1A2E] text-base outline-none focus:ring-2 focus:ring-[#FF6B35]/30 focus:border-[#FF6B35]"
                        />
                        <div>
                          <p className="text-base font-semibold text-[#1A1A2E] mb-2">How long do you need us?</p>
                          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                            {DURATIONS.map((d) => (
                              <Pill key={d.label} label={d.label} icon={d.icon}
                                active={form.duration === d.label}
                                onClick={() => set("duration", d.label)} />
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Step 2 — Contact */}
                    {step === 2 && (
                      <>
                        <div>
                          <h3 className="text-xl font-bold text-[#1A1A2E] mb-1">Where do we reach you?</h3>
                          <p className="text-base text-[#8888AA]">We&apos;ll call you within 2 hours.</p>
                        </div>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-[#1A1A2E] text-base outline-none focus:ring-2 focus:ring-[#FF6B35]/30 focus:border-[#FF6B35]"
                        />
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          placeholder="Mobile number (+91 XXXXX XXXXX)"
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-[#1A1A2E] text-base outline-none focus:ring-2 focus:ring-[#FF6B35]/30 focus:border-[#FF6B35]"
                        />
                        {[form.occasion, form.date, form.petType, form.duration].filter(Boolean).length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {[form.occasion, form.date, form.petType, form.duration].filter(Boolean).map((v) => (
                              <span key={v} className="px-3 py-1 rounded-full text-sm font-semibold bg-orange-50 text-[#FF6B35] border border-orange-100">
                                {v}
                              </span>
                            ))}
                          </div>
                        )}
                        {error && <p className="text-base text-red-500">{error}</p>}
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Nav buttons */}
                <div className={`flex gap-3 mt-8 ${step > 0 ? "justify-between" : "justify-end"}`}>
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      className="px-6 py-3 rounded-2xl border-2 border-gray-200 text-[#4A4A6A] font-semibold text-base hover:border-orange-200 transition-colors"
                    >
                      ← Back
                    </button>
                  )}
                  {step < 2 ? (
                    <button
                      type="button"
                      onClick={() => canNext[step] ? go(1) : setError("Please complete this step first.")}
                      className={`px-8 py-3 rounded-2xl font-bold text-base transition-all duration-200 ${
                        canNext[step]
                          ? "gradient-orange text-white shadow-lg hover:-translate-y-0.5"
                          : "bg-gray-100 text-gray-400 cursor-default"
                      }`}
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="flex items-center gap-2 px-8 py-3 rounded-2xl gradient-orange text-white font-bold text-base shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70"
                    >
                      {submitting ? (
                        <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Booking...</>
                      ) : (
                        <><FaPaw /> Book My Sitter</>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

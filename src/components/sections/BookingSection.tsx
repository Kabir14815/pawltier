"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

export default function BookingSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="booking" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-50 rounded-full opacity-50 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative">
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
              Schedule with <span className="text-gradient-orange">Cal.com</span>
            </h2>
            <p className="text-lg text-[#4A4A6A]">
              Pick a time that works for you and complete the booking directly through the embedded calendar.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-white rounded-[28px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
        >
          <div className="flex flex-col gap-4 border-b border-gray-100 bg-[#FFF9F4] p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-[#1A1A2E]" style={{ fontFamily: "var(--font-nunito)" }}>
                  Reserve your concierge slot
                </h3>
                <p className="text-[#4A4A6A] mt-1">
                  Secure a booking time instantly — no extra form needed.
                </p>
              </div>
              <a
                href="https://cal.com/talya-gartner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Open in new tab
              </a>
            </div>
          </div>

          <div className="min-h-[720px] w-full">
            <iframe
              src="https://cal.com/talya-gartner?embed=true&primary_color=FF6B35"
              title="Book a consultation with Pawcort"
              className="h-[720px] w-full border-0"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

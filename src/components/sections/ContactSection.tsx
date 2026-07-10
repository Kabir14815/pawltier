"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCommentDots,
} from "react-icons/fa";
import { CONTACT_EMAIL, CONTACT_PHONE, INSTAGRAM_URL } from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";

export default function ContactSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const phoneHref = `tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`;
  const smsHref = `sms:${CONTACT_PHONE.replace(/[^d+]/g, "")}?body=${encodeURIComponent("Hi there, I’d like to learn more about your pet concierge services.")}`;

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding gradient-hero relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF6B35] rounded-full opacity-[0.05] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {!hideHeader && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm mb-4">
            <span className="text-xl">📬</span>
            <span className="text-base font-semibold text-[#FF6B35]">
              Get In Touch
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1A2E] mb-4"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Contact{" "}
            <span className="text-gradient-orange">Us</span>
          </h2>
          <p className="text-xl text-[#4A4A6A] max-w-xl mx-auto">
            Have questions or need a custom plan? We'd love to hear from you.
          </p>
        </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info (left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 split-content"
          >
            <div>
              <h3
                className="text-3xl font-bold text-[#1A1A2E] mb-2"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                We're Here to Help 🐾
              </h3>
              <p className="text-[#4A4A6A]">
                Our team is available 9 AM – 9 PM, 7 days a week. Reach out via any channel below.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  description: "Follow updates",
                  href: INSTAGRAM_URL,
                  color: "#E1306C",
                  bg: "from-[#f09433]/15 via-[#e6683c]/15 to-[#bc1888]/15",
                },
                {
                  icon: FaPhone,
                  label: "Call",
                  description: "Talk to the team",
                  href: phoneHref,
                  color: "#FF6B35",
                  bg: "from-[#FF6B35]/15 to-[#FF8C42]/10",
                },
                {
                  icon: FaCommentDots,
                  label: "Message",
                  description: "Open text chat",
                  href: smsHref,
                  color: "#4A90D9",
                  bg: "from-[#4A90D9]/15 to-[#6BA7E8]/10",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br"
                    style={{ backgroundImage: item.bg, color: item.color }}
                  >
                    <item.icon className="text-xl" />
                  </div>
                  <p className="text-base font-semibold text-[#1A1A2E]">{item.label}</p>
                  <p className="mt-1 text-sm text-[#8888AA]">{item.description}</p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Booking Embed (right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-6 text-readable">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-[#1A1A2E]" style={{ fontFamily: "var(--font-nunito)" }}>
                  Book an Appointment
                </h3>
                <p className="text-base text-[#8888AA]">Pick a convenient time via our scheduler below.</p>
              </div>

              <div className="mb-4 flex justify-center">
                <a
                  href="https://cal.com/talya-gartner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-2xl gradient-orange text-white font-bold"
                >
                  Open Scheduler
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[520px]">
                <iframe
                  src="https://cal.com/talya-gartner?embed=true&primary_color=FF6B35"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="Schedule with Pawcort"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

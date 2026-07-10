"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { CONTACT_EMAIL, CONTACT_PHONE, INSTAGRAM_URL } from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";
import { ContactFormData } from "@/types";

const initialForm: ContactFormData = {
  name: "",
  phone: "",
  message: "",
};

export default function ContactSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = () => {
    const errs: Partial<ContactFormData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

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
          {/* Contact Info */}
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

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: FaPhone,
                  label: "Phone",
                  value: CONTACT_PHONE,
                  color: "#FF6B35",
                  href: `tel:${CONTACT_PHONE}`,
                },
                {
                  icon: FaEnvelope,
                  label: "Email",
                  value: CONTACT_EMAIL,
                  color: "#4A90D9",
                  href: `mailto:${CONTACT_EMAIL}`,
                },
                {
                  icon: FaMapMarkerAlt,
                  label: "Location",
                  value: "Mumbai, Maharashtra, India",
                  color: "#E53E3E",
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon
                      className="text-xl"
                      style={{ color: item.color }}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-[#8888AA] font-medium uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#1A1A2E] font-semibold hover:text-[#FF6B35] transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#1A1A2E] font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-bold text-xl shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
              style={{
                background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              }}
            >
              <FaInstagram className="w-6 h-6" />
              Follow @pawcort1 on Instagram
            </a>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823257!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-8 text-readable">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-10 gap-4">
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                    <FaCheckCircle className="text-5xl text-[#48BB78]" />
                  </div>
                  <h3
                    className="text-3xl font-bold text-[#1A1A2E]"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Message Sent! 🎉
                  </h3>
                  <p className="text-[#4A4A6A]">
                    Thank you, <strong>{form.name}</strong>! We'll get back to you within a few hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="px-6 py-2.5 rounded-xl border-2 border-[#FF6B35] text-[#FF6B35] font-semibold hover:bg-orange-50 transition-colors duration-200 text-base"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#1A1A2E] mb-1"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      Send us a Message
                    </h3>
                    <p className="text-base text-[#8888AA]">
                      We typically respond within 2-4 hours.
                    </p>
                  </div>

                  {[
                    { label: "Your Name", name: "name" as const, type: "text", placeholder: "e.g. Rahul Verma" },
                    { label: "Phone Number", name: "phone" as const, type: "tel", placeholder: "Your mobile number" },
                  ].map((field) => (
                    <div key={field.name} className="flex flex-col gap-1.5">
                      <label className="text-base font-semibold text-[#1A1A2E]">
                        {field.label} <span className="text-[#FF6B35]">*</span>
                      </label>
                      <input
                        type={field.type}
                        value={form[field.name]}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, [field.name]: e.target.value }));
                          if (errors[field.name]) setErrors((p) => ({ ...p, [field.name]: "" }));
                        }}
                        placeholder={field.placeholder}
                        className={`w-full px-4 py-3 rounded-2xl border text-[#1A1A2E] placeholder-[#C0C0D0] text-base transition-all duration-200 outline-none focus:ring-2 focus:ring-[#FF6B35]/30 ${
                          errors[field.name]
                            ? "border-red-300"
                            : "border-gray-200 focus:border-[#FF6B35] hover:border-orange-200"
                        }`}
                      />
                      {errors[field.name] && (
                        <p className="text-sm text-red-500">{errors[field.name]}</p>
                      )}
                    </div>
                  ))}

                  <div className="flex flex-col gap-1.5">
                    <label className="text-base font-semibold text-[#1A1A2E]">
                      Message <span className="text-[#FF6B35]">*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, message: e.target.value }));
                        if (errors.message) setErrors((p) => ({ ...p, message: "" }));
                      }}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className={`w-full px-4 py-3 rounded-2xl border text-[#1A1A2E] placeholder-[#C0C0D0] text-base transition-all duration-200 outline-none focus:ring-2 focus:ring-[#FF6B35]/30 resize-none ${
                        errors.message
                          ? "border-red-300"
                          : "border-gray-200 focus:border-[#FF6B35] hover:border-orange-200"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-2xl gradient-orange text-white font-bold text-lg shadow-lg hover:shadow-[0_12px_40px_rgba(255,107,53,0.35)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message ✉️"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

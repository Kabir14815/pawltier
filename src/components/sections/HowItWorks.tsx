"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaCalendarAlt, FaPaw, FaUserCheck, FaGlassCheers } from "react-icons/fa";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const stepIcons = [FaCalendarAlt, FaPaw, FaUserCheck, FaGlassCheers];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HowItWorks({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-60" />

      <div className="max-w-7xl mx-auto relative">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-4">
              <span className="text-base font-semibold text-[#FF6B35]">Simple Process</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1A2E] mb-4"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              How It{" "}
              <span className="text-gradient-orange">Works</span>
            </h2>
            <p className="text-xl text-[#4A4A6A] max-w-2xl mx-auto">
              Getting a trusted sitter for your pet is as easy as 1-2-3-4. We&apos;ve made the process seamless for busy pet parents.
            </p>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = stepIcons[i] ?? FaPaw;

            return (
              <motion.div
                key={step.step}
                variants={cardVariants}
                className="group relative"
              >
                {i < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-[60%] w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent z-0" />
                )}

                <div
                  className={`relative z-10 bg-gradient-to-br ${step.bg} border ${step.border} rounded-3xl overflow-hidden h-full card-hover cursor-default`}
                >
                  {/* Step image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div
                      className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="text-white text-lg" />
                    </div>
                    <span
                      className="absolute top-3 right-3 text-5xl font-black text-white/90 drop-shadow-md"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <div className="p-5 text-readable">
                    <h3
                      className="text-xl font-bold text-[#1A1A2E] mb-2"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-base text-[#4A4A6A] leading-relaxed">
                      {step.description}
                    </p>
                    <div
                      className="mt-4 h-1 rounded-full opacity-30"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const el = document.getElementById("booking");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-orange text-white font-bold text-xl shadow-xl hover:shadow-[0_12px_40px_rgba(255,107,53,0.4)] hover:-translate-y-1 transition-all duration-300"
          >
            Book Now — It&apos;s Easy! 🐾
          </button>
        </motion.div>
      </div>
    </section>
  );
}

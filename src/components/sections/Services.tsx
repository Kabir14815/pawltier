"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0EAE0] rounded-full opacity-40 blur-3xl pointer-events-none" />

      <Container className="relative">
        {!hideHeader && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            wide
            eyebrow="What We Offer"
            title={
              <>
                Our <span className="text-gradient-sage">Services</span>
              </>
            }
            description="From weddings to overnight stays, we have a perfect pet care solution for every occasion and every pet."
          />
        </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group relative rounded-2xl p-7 card-hover cursor-default transition-all duration-300 flex flex-col h-full ${
                service.highlight
                  ? "bg-gradient-to-br from-[#5C4033] to-[#7A5C4D] text-white shadow-[0_20px_60px_rgba(107,133,112,0.3)]"
                  : "surface-card-muted hover:border-[#D4E4D8]"
              }`}
            >
              {/* Badge */}
              {service.badge && (
                <span
                  className={`absolute top-5 right-5 text-sm font-bold px-3 py-1 rounded-full ${
                    service.highlight
                      ? "bg-white/20 text-white"
                      : service.badgeColor
                  }`}
                >
                  {service.badge}
                </span>
              )}

              {/* Emoji icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 ${
                  service.highlight ? "bg-white/20" : "bg-white shadow-md"
                }`}
              >
                {service.emoji}
              </div>

              <h3
                className={`text-xl font-bold mb-3 heading-display !text-xl ${
                  service.highlight ? "text-white" : "text-[#3D2A22]"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-base leading-relaxed mb-2 flex-1 ${
                  service.highlight ? "text-[#F0EAE0]" : "text-[#4A5A50]"
                }`}
              >
                {service.description}
              </p>
              <p className={`text-base font-bold mb-3 ${service.highlight ? "text-white" : "text-[#5C4033]"}`}>
                {service.price}
              </p>

              <Link
                href="/book"
                className={`inline-flex items-center gap-1.5 text-base font-semibold transition-all duration-200 mt-auto ${
                  service.highlight
                    ? "text-white/90 hover:text-white hover:gap-2.5"
                    : "text-[#5C4033] hover:gap-2.5"
                }`}
              >
                Book This Service →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

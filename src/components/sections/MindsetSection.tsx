"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CUSTOMER_MINDSETS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function MindsetSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-[#F7F2EA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#6B8570]/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8B4A0]/20 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            wide
            eyebrow="We Understand You"
            title={
              <>
                Your Wedding Day.{" "}
                <span className="text-gradient-sage">Your Pet Included.</span>
              </>
            }
            description="Every couple arrives with a different hope — we built Pawltier around the three things wedding pet parents tell us matter most."
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {CUSTOMER_MINDSETS.map((mindset, i) => (
            <motion.article
              key={mindset.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className="group relative surface-card p-7 lg:p-8 flex flex-col h-full hover:shadow-[0_16px_48px_rgba(45,59,50,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-[#6B8570] to-[#8FA892] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#F0EBE3] text-2xl mb-5 shrink-0">
                {mindset.emoji}
              </span>

              <p className="text-xs font-bold uppercase tracking-wider text-[#8A9A8E] mb-3">
                Mindset {i + 1}
              </p>

              <blockquote className="text-base text-[#5A6A60] italic leading-relaxed mb-5 border-l-2 border-[#E8B4A0] pl-4 flex-1">
                &ldquo;{mindset.feeling}&rdquo;
              </blockquote>

              <div className="pt-5 border-t border-[#F0EBE3] mt-auto">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6B8570] mb-2">
                  What you want
                </p>
                <p className="text-lg font-extrabold text-[#2D3B32] leading-snug heading-display !text-lg">
                  {mindset.desire}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

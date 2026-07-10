"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WEDDING_PROMISES } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PromisesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-[#FAF6F0] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#5C4033]/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8B4A0]/20 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            wide
            eyebrow="Built for Couples Like You"
            title={
              <>
                Your Whole Family.{" "}
                <span className="text-gradient-sage">One Beautiful Day.</span>
              </>
            }
            description="You shouldn't have to choose between a perfect wedding and the pet who feels like home. Pawcort exists so you can have both — without carrying the worry."
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {WEDDING_PROMISES.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className="group relative surface-card p-7 lg:p-8 flex flex-col h-full hover:shadow-[0_16px_48px_rgba(45,59,50,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-[#5C4033] to-[#7A5C4D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#F0EBE3] text-2xl mb-5 shrink-0">
                {item.emoji}
              </span>

              <h3 className="heading-display text-xl mb-4">{item.title}</h3>

              <blockquote className="text-base text-[#5A6A60] italic leading-relaxed mb-5 border-l-2 border-[#E8B4A0] pl-4">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <p className="text-base text-[#4A5A50] leading-relaxed mt-auto pt-5 border-t border-[#F0EBE3]">
                {item.promise}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

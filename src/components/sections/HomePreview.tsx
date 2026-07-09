"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES, STATS, HOME_MOMENTS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function HomePreview() {
  const previewServices = SERVICES.slice(0, 3);

  return (
    <>
      <section className="py-14 lg:py-16 bg-white border-y border-[#E8E0D4]">
        <Container>
          <p className="text-center text-sm font-bold text-[#8A9A8E] uppercase tracking-widest mb-8">
            Trusted by couples across India
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#6B8570] heading-display">
                  {s.value}
                  {s.suffix}
                </p>
                <p className="text-sm sm:text-base text-[#8A9A8E] font-medium mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#F7F2EA]">
        <Container>
          <SectionHeader
            eyebrow="Where Life Happens"
            title={
              <>
                Every Moment Deserves Your{" "}
                <span className="text-gradient-sage">Full Attention</span>
              </>
            }
            description="Pawltier isn't just a booking service — it's peace of mind for the wedding you've been planning for months."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {HOME_MOMENTS.map((moment, i) => (
              <motion.div
                key={moment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="surface-card p-7 flex flex-col h-full"
              >
                <div className="text-4xl mb-4">{moment.emoji}</div>
                <h3 className="heading-display text-lg mb-3">{moment.title}</h3>
                <p className="text-base text-[#4A5A50] leading-relaxed flex-1">{moment.story}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <SectionHeader
            eyebrow="What We Offer"
            title={
              <>
                Care Tailored to{" "}
                <span className="text-[#C9952E]">Your Occasion</span>
              </>
            }
            description="From wedding day concierge to overnight stays — pick the service that fits your story."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-10">
            {previewServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="surface-card-muted p-7 flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{s.emoji}</div>
                <h3 className="heading-display text-lg mb-3">{s.title}</h3>
                <p className="text-base text-[#4A5A50] mb-4 line-clamp-3 leading-relaxed flex-1">
                  {s.description}
                </p>
                <p className="text-base font-bold text-[#6B8570] mt-auto">{s.price}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-outline text-lg">
              View All Services →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#6B8570] to-[#8FA892]">
        <Container narrow className="text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-[#E8F0E9] mb-3">
            Your Turn
          </p>
          <h2 className="heading-section text-white mb-4 !text-2xl sm:!text-3xl">
            Write the Next Chapter — Without the Worry
          </h2>
          <p className="text-body-lg text-[#E8F0E9] mb-8 leading-relaxed max-w-xl mx-auto">
            Book a verified concierge in 2 minutes. We call you back within 2 hours to confirm
            every detail.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/book"
              className="px-8 py-3.5 rounded-full bg-white text-[#6B8570] text-lg font-bold hover:bg-[#F7F2EA] transition-colors shadow-lg"
            >
              Book a Concierge
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-3.5 rounded-full bg-white/15 text-white text-lg font-bold border border-white/30 hover:bg-white/25 transition-colors"
            >
              How It Works
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

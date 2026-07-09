"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

interface PageHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle: string;
}

export default function PageHero({ badge, title, highlight, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 gradient-hero overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#6B8570]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-[#E8B4A0]/25 rounded-full blur-3xl" />
      </div>
      <Container narrow>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative"
        >
          <span className="eyebrow">{badge}</span>
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mt-5 mb-5">
            {title}{" "}
            {highlight && <span className="text-gradient-sage">{highlight}</span>}
          </h1>
          <p className="text-body-lg text-[#4A5A50] max-w-2xl mx-auto text-pretty">{subtitle}</p>
        </motion.div>
      </Container>
    </section>
  );
}

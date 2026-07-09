"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaHeart, FaPaw, FaGlassCheers } from "react-icons/fa";
import { HOME_STORY, HOME_PROMISE } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const chapterIcons = [FaHeart, FaPaw, FaGlassCheers];

export default function HomeStorySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#E8F0E9] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F0EBE3] rounded-full translate-x-1/3 translate-y-1/3 opacity-60 pointer-events-none" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            wide
            eyebrow={HOME_STORY.eyebrow}
            title={
              <>
                {HOME_STORY.title}{" "}
                <span className="text-gradient-sage">{HOME_STORY.titleHighlight}</span>
              </>
            }
            description={HOME_STORY.intro}
          />
        </motion.div>

        <div className="space-y-8 lg:space-y-12 mb-14 lg:mb-16">
          {HOME_STORY.chapters.map((chapter, i) => {
            const Icon = chapterIcons[i] ?? FaPaw;
            const isEven = i % 2 === 0;

            return (
              <motion.article
                key={chapter.chapter}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                className={`grid gap-6 lg:gap-10 items-center ${
                  isEven ? "lg:grid-cols-[minmax(0,340px)_1fr]" : "lg:grid-cols-[1fr_minmax(0,340px)]"
                }`}
              >
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <span className="block text-xs font-bold tracking-widest uppercase text-[#6B8570] mb-3">
                    Chapter {chapter.chapter}
                  </span>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(45,59,50,0.1)] group">
                    <Image
                      src={chapter.image}
                      alt={chapter.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 340px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div
                      className="absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: chapter.color }}
                    >
                      <Icon className="text-white text-lg" />
                    </div>
                  </div>
                </div>

                <div
                  className={`surface-card-muted p-7 lg:p-8 flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="heading-display text-xl sm:text-2xl mb-4">{chapter.headline}</h3>
                  <p className="text-body-lg text-[#4A5A50] leading-relaxed mb-5">{chapter.body}</p>
                  <p className="text-base font-medium text-[#8A9A8E] italic border-l-2 border-[#E8B4A0] pl-4">
                    &ldquo;{chapter.pullQuote}&rdquo;
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 gradient-orange opacity-95" />
          <div className="relative px-6 sm:px-10 py-12 lg:py-14 text-center text-white max-w-3xl mx-auto">
            <p className="text-sm font-bold tracking-widest uppercase text-[#E8F0E9] mb-3">
              {HOME_PROMISE.eyebrow}
            </p>
            <h3 className="heading-section text-white mb-4 !text-2xl sm:!text-3xl">
              {HOME_PROMISE.title}
            </h3>
            <p className="text-[#E8F0E9] text-body-lg leading-relaxed mb-8">{HOME_PROMISE.body}</p>
            <Link href="/how-it-works" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#6B8570] font-bold text-lg hover:bg-[#F7F2EA] transition-colors shadow-lg">
              See How It Works →
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

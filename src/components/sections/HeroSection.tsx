"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar, FaShieldAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { WHATSAPP_URL, HOME_VIDEO, BRAND_TAGLINE, BRAND_NAME } from "@/lib/constants";
import Container from "@/components/ui/Container";
import PhoneVideoMockup from "@/components/ui/PhoneVideoMockup";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-2rem)] flex items-center overflow-hidden gradient-hero pt-28 pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-[#5C4033] rounded-full opacity-[0.08] blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/4 -right-32 w-80 h-80 bg-[#E8B4A0] rounded-full opacity-[0.15] blur-3xl"
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 max-w-xl lg:max-w-none mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass shadow-md mb-6"
            >
              <FaShieldAlt className="text-[#5C4033] text-sm shrink-0" />
              <span className="text-sm font-semibold text-[#4A5A50]">Wedding Pet Concierge</span>
              <span className="w-2 h-2 rounded-full bg-[#5C4033] animate-pulse shrink-0" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="heading-display text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl mb-6"
            >
              Include Your Pet in{" "}
              <span className="text-gradient-sage">Your Wedding.</span>
              <br />
              <span className="text-[#C9952E]">We Handle the Rest.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body-lg text-[#4A5A50] mb-8 max-w-lg mx-auto lg:mx-0 text-pretty"
            >
              {BRAND_TAGLINE} — {BRAND_NAME} is your wedding-day pet concierge. From aisle
              walks to reception care, we give you{" "}
              <strong className="text-[#5C4033] font-semibold">peace of mind</strong> so
              every guest, furry ones included, enjoys the celebration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link href="/book" className="btn-primary text-lg">
                Book Your Concierge
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#25D366] font-bold text-lg border-2 border-[#25D366] shadow-md hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-5 mt-10 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {["🐶", "🐱", "💒", "🐾"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white border-2 border-[#FAF6F0] shadow-sm flex items-center justify-center text-base"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#C9952E] text-sm" />
                  ))}
                  <span className="font-bold text-[#3D2A22] ml-1">4.9</span>
                </div>
                <span className="text-sm text-[#8A9A8E]">500+ wedding pet families</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <PhoneVideoMockup video={HOME_VIDEO} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

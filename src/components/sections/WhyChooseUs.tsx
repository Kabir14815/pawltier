"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaUserCheck,
  FaCamera,
  FaAmbulance,
  FaClock,
  FaHeart,
  FaDollarSign,
} from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: FaUserCheck,
    title: "Verified Pet Sitters",
    description:
      "Every sitter goes through thorough background checks, identity verification, and pet care training before joining.",
    color: "#5C4033",
    bgColor: "bg-[#F0EAE0]",
    borderColor: "border-[#D4E4D8]",
    iconBg: "bg-[#D4E4D8]",
  },
  {
    icon: FaCamera,
    title: "Live Updates & Photos",
    description:
      "Receive real-time photos and WhatsApp updates throughout the day so you never miss a moment with your pet.",
    color: "#5A7A8A",
    bgColor: "bg-[#EDF3F6]",
    borderColor: "border-[#C8DAE4]",
    iconBg: "bg-[#C8DAE4]",
  },
  {
    icon: FaAmbulance,
    title: "Emergency Support",
    description:
      "24/7 emergency assistance for any unexpected situations. Your pet's safety is our absolute top priority.",
    color: "#E53E3E",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
    iconBg: "bg-red-100",
  },
  {
    icon: FaClock,
    title: "Flexible Booking",
    description:
      "Book by the hour or for the entire day. Last-minute bookings accepted. We work around your schedule.",
    color: "#9B59B6",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    icon: FaHeart,
    title: "Personalized Pet Care",
    description:
      "We tailor every care session to your pet's unique needs, preferences, dietary requirements, and personality.",
    color: "#ED64A6",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-100",
    iconBg: "bg-pink-100",
  },
  {
    icon: FaDollarSign,
    title: "Affordable Pricing",
    description:
      "Premium care at honest prices. No hidden fees, transparent booking — quality pet care for every budget.",
    color: "#C9952E",
    bgColor: "bg-[#FBF5EA]",
    borderColor: "border-[#EDD9B5]",
    iconBg: "bg-[#EDD9B5]",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-us"
      ref={ref}
      className="section-padding gradient-hero relative overflow-hidden"
    >
      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#5C4033]"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`,
              opacity: 0.3 + (i % 4) * 0.1,
            }}
          />
        ))}
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            wide
            eyebrow="Why Couples Love Us"
            title={
              <>
                Why Choose <span className="text-gradient-sage">Pawcort</span>?
              </>
            }
            description="We go above and beyond to make sure both you and your pet have the best wedding day experience."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className={`group relative ${feature.bgColor} ${feature.borderColor} border rounded-2xl p-7 card-hover flex flex-col h-full`}
            >
              <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center">
                <span className="text-[#5C4033] text-base font-bold">✓</span>
              </div>

              <div
                className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shrink-0`}
              >
                <feature.icon className="text-3xl" style={{ color: feature.color }} />
              </div>

              <h3 className="heading-display text-xl mb-3">{feature.title}</h3>
              <p className="text-base text-[#4A5A50] leading-relaxed flex-1">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

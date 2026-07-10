"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    quote:
      "I could enjoy my entire wedding without worrying about Bruno for a single second. The sitter sent photos every 30 minutes and Bruno looked so happy! Best service ever.",
    author: "Jennifer Carter",
    role: "Wedding at The Estate at Piedmont, Atlanta",
    pet: "Bruno — Golden Retriever",
    emoji: "🐶",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Our sitter sent photos every hour and even recorded a cute video of Whiskers playing. I was able to enjoy my sister's birthday party completely stress-free. Highly recommend!",
    author: "Marcus Lewis",
    role: "Birthday Party, Buckhead",
    pet: "Whiskers — Persian Cat",
    emoji: "🐱",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "An absolute lifesaver! We wanted our dog at our wedding but couldn't manage him ourselves. Pawcort arranged a wonderful concierge within hours. Milo was treated like family.",
    author: "Alicia Brooks",
    role: "Family Celebration, Roswell",
    pet: "Milo — Beagle",
    emoji: "🐶",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "We traveled to a weekend event in Savannah and left Biscuit with their overnight care. She was fed on time, given walks, and I received a goodnight photo. 10/10 experience.",
    author: "Derek Morgan",
    role: "Overnight Care, Savannah",
    pet: "Biscuit — Labrador",
    emoji: "🐾",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "My senior dog Max has special medical needs and I was nervous about leaving him. The sitter handled everything perfectly — medications, walks, and lots of cuddles. Truly amazing.",
    author: "Sofia Patel",
    role: "Senior Pet Care, Alpharetta",
    pet: "Max — Senior Labrador",
    emoji: "❤️",
    rating: 5,
  },
];

export default function Testimonials({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-padding gradient-hero relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-[0.05] blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4A90D9] rounded-full opacity-[0.06] blur-3xl pointer-events-none translate-y-1/3" />

      <div className="max-w-5xl mx-auto relative">
        {!hideHeader && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm mb-4">
            <span className="text-xl">💬</span>
            <span className="text-base font-semibold text-[#FF6B35]">
              What Pet Parents Say
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1A2E] mb-4"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Loved by{" "}
            <span className="text-gradient-orange">500+ Families</span>
          </h2>
          <p className="text-xl text-[#4A4A6A]">
            Real stories from pet parents who trusted us with their furry family members.
          </p>
        </motion.div>
        )}

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-gray-100 p-8 sm:p-12 overflow-hidden text-readable">
            {/* Quote icon */}
            <FaQuoteLeft className="text-6xl text-orange-100 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#F59E0B] text-xl" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl sm:text-2xl text-[#1A1A2E] leading-relaxed mb-8 font-medium">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center text-4xl shadow-md">
                    {t.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A2E]">{t.author}</p>
                    <p className="text-base text-[#8888AA]">{t.role}</p>
                    <p className="text-sm text-[#FF6B35] font-semibold mt-0.5">
                      🐾 {t.pet}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all duration-200 hover:-translate-x-0.5"
            >
              <FaChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2.5 bg-[#FF6B35]"
                      : "w-2.5 h-2.5 bg-gray-200 hover:bg-orange-200"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all duration-200 hover:translate-x-0.5"
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
        >
          {[
            { value: "500+", label: "Happy Pets", emoji: "🐾" },
            { value: "150+", label: "Verified Sitters", emoji: "✅" },
            { value: "4.9★", label: "Average Rating", emoji: "⭐" },
            { value: "98%", label: "Satisfaction Rate", emoji: "❤️" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-5 text-center border border-white/60 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl mb-1">{stat.emoji}</div>
              <div className="text-3xl font-extrabold text-[#FF6B35]">
                {stat.value}
              </div>
              <div className="text-sm text-[#8888AA] font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

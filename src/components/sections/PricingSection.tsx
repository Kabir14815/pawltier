"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PRICING } from "@/lib/constants";

export default function PricingSection() {
  return (
    <section className="section-padding bg-[#FFF8F0]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="section-intro mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] mb-3" style={{ fontFamily: "var(--font-nunito)" }}>
            Transparent Pricing
          </h2>
          <p className="text-lg text-[#4A4A6A]">No hidden fees. Final quote confirmed before booking.</p>
        </div>

        <div className="bg-white rounded-3xl border border-orange-50 shadow-sm overflow-hidden text-readable">
          <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-orange-50 text-sm font-bold uppercase tracking-wider text-[#FF6B35] hidden sm:grid">
            <span className="col-span-2">Service</span>
            <span>Duration</span>
            <span>Price</span>
          </div>
          {PRICING.map((row, i) => (
            <motion.div
              key={row.service}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid sm:grid-cols-4 gap-2 sm:gap-4 px-6 py-5 border-t border-orange-50 items-center"
            >
              <div className="sm:col-span-2">
                <p className="font-bold text-[#1A1A2E]">{row.service}</p>
                <p className="text-sm text-[#8888AA] mt-0.5">{row.note}</p>
              </div>
              <p className="text-base text-[#4A4A6A]">{row.duration}</p>
              <p className="text-base font-bold text-[#FF6B35]">{row.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/book" className="inline-flex px-8 py-3.5 rounded-full gradient-orange text-white font-bold hover:opacity-90 transition-opacity">
            Get a Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}

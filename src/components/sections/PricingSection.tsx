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
            Tailored Care Plans
          </h2>
          <p className="text-lg text-[#4A4A6A]">Every booking is customized to your pet, schedule, and celebration. We will confirm the right fit for you.</p>
        </div>

        <div className="bg-white rounded-3xl border border-orange-50 shadow-sm overflow-hidden text-readable">
          <div className="grid gap-4 px-6 py-5 border-t border-orange-50 items-start">
            <div className="space-y-2">
              <p className="font-bold text-[#1A1A2E]">Wedding Pet Concierge</p>
              <p className="text-sm text-[#8888AA]">Ceremony, photos, reception support, and calm care for your pet on the wedding day.</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-[#1A1A2E]">Event & Travel Care</p>
              <p className="text-sm text-[#8888AA]">Flexible support for parties, travel days, family gatherings, and special occasions.</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-[#1A1A2E]">Home & Overnight Care</p>
              <p className="text-sm text-[#8888AA]">At-home visits, overnight support, and extra attention for pets with special needs.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/book" className="inline-flex px-8 py-3.5 rounded-full gradient-orange text-white font-bold hover:opacity-90 transition-opacity">
            Request a Custom Plan →
          </Link>
        </div>
      </div>
    </section>
  );
}

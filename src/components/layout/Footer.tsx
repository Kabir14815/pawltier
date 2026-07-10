"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import BrandLogo from "@/components/ui/BrandLogo";
import Container from "@/components/ui/Container";
import { INSTAGRAM_URL, CONTACT_EMAIL, CONTACT_PHONE, FOOTER_LINKS, BRAND_NAME } from "@/lib/constants";

const socialLinks = [
  { icon: FaInstagram, href: INSTAGRAM_URL, label: "Instagram", color: "hover:text-[#E1306C]", bg: "hover:bg-pink-50" },
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-[#1877F2]", bg: "hover:bg-blue-50" },
];

export default function Footer() {
  return (
    <footer className="bg-[#3D2A22] text-white">
      <div className="bg-gradient-to-r from-[#5C4033] to-[#7A5C4D] py-12 lg:py-14">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-1" style={{ fontFamily: "var(--font-nunito)" }}>
              Ready for your wedding day? 🐾
            </h3>
            <p className="text-[#F0EAE0]">Join 500+ couples who trust {BRAND_NAME}.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/book" className="px-6 py-3 rounded-full bg-white text-[#5C4033] font-bold hover:bg-[#FAF6F0] transition-colors shadow-lg">
              Book Now
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/20 text-white font-bold border border-white/30 hover:bg-white/30 transition-colors"
            >
              Instagram
            </a>
          </div>
        </Container>
      </div>

      <Container className="py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <BrandLogo size="md" href="/" variant="dark" className="mb-4" />
            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-xs">
              Wedding pet concierge — so your whole family, paws included, celebrates together.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gray-400 ${s.color} ${s.bg} transition-all duration-200`}>
                  <s.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-4 text-base uppercase tracking-wider">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 text-base hover:text-[#7A5C4D] transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 text-base text-gray-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#7A5C4D] transition-colors">{CONTACT_EMAIL}</a>
            <a href={`tel:${CONTACT_PHONE}`} className="hover:text-[#7A5C4D] transition-colors">{CONTACT_PHONE}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

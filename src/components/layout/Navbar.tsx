"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiArrowRight } from "react-icons/hi";
import BrandLogo from "@/components/ui/BrandLogo";
import Container from "@/components/ui/Container";
import { NAV_LINKS, INSTAGRAM_URL } from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 pointer-events-none pt-4 sm:pt-5"
      >
        <Container className="pointer-events-auto">
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-500 ease-out ${
              scrolled
                ? "rounded-full px-4 sm:px-5 py-2.5 bg-white/85 backdrop-blur-xl border border-white/70 shadow-[0_8px_40px_rgba(45,59,50,0.08)]"
                : "rounded-2xl px-4 sm:px-6 py-3 bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_4px_24px_rgba(45,59,50,0.04)]"
            }`}
          >
            <BrandLogo size="sm" />

            <nav className="hidden lg:flex items-center gap-1 relative flex-1 justify-center">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 rounded-full ${
                      active ? "text-[#5C4033]" : "text-[#4A5A50] hover:text-[#3D2A22]"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-[#F0EAE0] border border-[#D4E4D8]/80"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold text-[#E1306C] hover:bg-[#E1306C]/10 transition-colors duration-200"
              >
                <FaInstagram className="w-4 h-4" />
                Instagram
              </a>
              <Link href="/book" className="btn-primary text-sm !py-2 !px-4">
                Book Now
                <HiArrowRight className="w-3.5 h-3.5 opacity-90" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-[#3D2A22]/5 hover:bg-[#3D2A22]/10 transition-colors duration-200"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <HiX className="text-xl text-[#3D2A22]" />
              ) : (
                <HiMenuAlt3 className="text-xl text-[#3D2A22]" />
              )}
            </button>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-[#3D2A22]/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[84px] left-4 right-4 sm:left-6 sm:right-6 z-40 lg:hidden max-w-lg mx-auto rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_24px_64px_rgba(45,59,50,0.12)] overflow-hidden"
            >
              <nav className="p-3">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold text-base transition-colors duration-200 ${
                          active
                            ? "bg-[#F0EAE0] text-[#5C4033]"
                            : "text-[#4A5A50] hover:bg-[#FAF6F0] hover:text-[#3D2A22]"
                        }`}
                      >
                        {link.label}
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-[#5C4033]" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="p-4 pt-2 border-t border-[#F0EAE0] flex flex-col gap-2.5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-[0_4px_16px_rgba(225,48,108,0.35)]"
                  style={{
                    background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  }}
                >
                  <FaInstagram className="w-4 h-4" />
                  Follow on Instagram
                </a>
                <Link
                  href="/book"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl gradient-orange text-white font-bold text-base shadow-[0_4px_16px_rgba(107,133,112,0.35)]"
                >
                  Book a Concierge
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

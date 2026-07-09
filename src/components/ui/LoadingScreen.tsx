"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/constants";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gradient-hero"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="shadow-2xl rounded-full"
            >
              <Image
                src="/logo.png"
                alt={`${BRAND_NAME} logo`}
                width={96}
                height={96}
                style={{ width: 96, height: 96 }}
                className="rounded-full"
                priority
              />
            </motion.div>

            <div className="text-center">
              <h1
                className="text-5xl font-extrabold text-gradient-sage"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {BRAND_NAME}
              </h1>
              <p className="text-[#8A9A8E] text-base mt-1 font-medium tracking-wider">
                {BRAND_TAGLINE}
              </p>
            </div>

            <div className="w-48 h-1.5 bg-[#E8F0E9] rounded-full overflow-hidden mt-4">
              <motion.div
                className="h-full gradient-orange rounded-full"
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

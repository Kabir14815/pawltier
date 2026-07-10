"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { INSTAGRAM_URL } from "@/lib/constants";

export default function InstagramButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setShowTooltip(true), 1000);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-gray-100 text-base font-medium text-[#3D2A22] whitespace-nowrap"
              >
                Follow us on Instagram!
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gray-100 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Pawcort on Instagram"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(225,48,108,0.45)] hover:shadow-[0_12px_32px_rgba(225,48,108,0.55)] hover:scale-110 transition-all duration-300"
            style={{
              background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
          >
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{
                background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              }}
            />
            <FaInstagram className="w-7 h-7 text-white relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

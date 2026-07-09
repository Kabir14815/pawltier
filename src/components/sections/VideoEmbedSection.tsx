"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { VideoItem } from "@/types";
import VideoPlayer from "@/components/ui/VideoPlayer";

interface VideoEmbedSectionProps {
  video: VideoItem;
  /** centered = full-width centered block, split = text + video side by side */
  layout?: "centered" | "split";
  bg?: "white" | "cream";
}

export default function VideoEmbedSection({
  video,
  layout = "centered",
  bg = "cream",
}: VideoEmbedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const bgClass = bg === "cream" ? "bg-[#FFF8F0]" : "bg-white";

  if (layout === "split") {
    return (
      <section ref={ref} className={`section-padding ${bgClass}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="split-content"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-[#FF6B35] text-sm font-bold mb-4">
                {video.emoji} {video.category}
              </span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] mb-4"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {video.title}
              </h2>
              <p className="text-[#4A4A6A] leading-relaxed">{video.description}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <VideoPlayer video={video} />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className={`section-padding ${bgClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-[#FF6B35] text-sm font-bold mb-4">
            {video.emoji} {video.category}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] mb-3"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            {video.title}
          </h2>
          <p className="text-[#4A4A6A] max-w-2xl mx-auto">{video.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <VideoPlayer video={video} size="large" />
        </motion.div>
      </div>
    </section>
  );
}

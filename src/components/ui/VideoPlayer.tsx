"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import type { VideoItem } from "@/types";
import VideoModal from "./VideoModal";

interface VideoPlayerProps {
  video: VideoItem;
  /** large = landing page, default = standard embed */
  size?: "default" | "large";
  className?: string;
}

export default function VideoPlayer({ video, size = "default", className = "" }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startInline = () => {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play().catch(() => setModalOpen(true)), 50);
  };

  return (
    <>
      <div
        className={`relative w-full overflow-hidden bg-[#1A1A2E] shadow-[0_20px_60px_rgba(0,0,0,0.15)] ${
          size === "large" ? "rounded-[28px] sm:rounded-[32px]" : "rounded-2xl sm:rounded-3xl"
        } ${className}`}
      >
        <div className="relative aspect-video w-full">
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster || undefined}
            controls={playing}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <button
              type="button"
              onClick={startInline}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 group cursor-pointer"
              aria-label={`Play ${video.title}`}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-[#1A1A2E]/30 to-transparent" />

              {/* Play button */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full gradient-orange flex items-center justify-center shadow-[0_8px_32px_rgba(255,107,53,0.5)]"
              >
                <FaPlay className="text-white text-2xl sm:text-3xl ml-1" />
              </motion.div>

              {/* Duration badge */}
              <span className="relative z-10 px-3 py-1 rounded-full bg-black/50 text-white text-sm font-semibold backdrop-blur-sm">
                {video.duration}
              </span>

              {/* Category */}
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 text-[#FF6B35] text-sm font-bold">
                {video.emoji} {video.category}
              </span>
            </button>
          )}

          {playing && (
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-black/50 text-white text-sm font-semibold hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              Expand ↗
            </button>
          )}
        </div>
      </div>

      {modalOpen && (
        <VideoModal src={video.src} title={video.title} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

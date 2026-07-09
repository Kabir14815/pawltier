"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import type { VideoItem } from "@/types";
import VideoModal from "./VideoModal";

interface PhoneVideoMockupProps {
  video: VideoItem;
  autoPlay?: boolean;
}

export default function PhoneVideoMockup({ video, autoPlay = true }: PhoneVideoMockupProps) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!autoPlay) return;

    const el = videoRef.current;
    if (!el) return;

    el.muted = true;
    const start = () => {
      el.play()
        .then(() => setPlaying(true))
        .catch(() => setModalOpen(true));
    };

    if (el.readyState >= 2) start();
    else el.addEventListener("loadeddata", start, { once: true });

    return () => el.removeEventListener("loadeddata", start);
  }, [autoPlay, video.src]);

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  return (
    <>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto"
        style={{ width: 272, height: 560 }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-[44px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(107,133,112,0.25) 0%, transparent 70%)",
            filter: "blur(28px)",
            transform: "scale(1.12)",
          }}
        />

        {/* Side buttons */}
        <div className="absolute -left-[3px] top-[100px] w-[3px] h-7 rounded-l-sm bg-[#2A2A2C]" />
        <div className="absolute -left-[3px] top-[140px] w-[3px] h-7 rounded-l-sm bg-[#2A2A2C]" />
        <div className="absolute -right-[3px] top-[130px] w-[3px] h-12 rounded-r-sm bg-[#2A2A2C]" />

        {/* Frame */}
        <div
          className="relative w-full h-full p-[3px] rounded-[42px]"
          style={{
            background: "linear-gradient(145deg, #3A3A3C 0%, #1C1C1E 50%, #111113 100%)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-black">
            {/* Dynamic Island */}
            <div
              className="absolute top-3 left-1/2 -translate-x-1/2 z-20 rounded-full bg-black"
              style={{ width: 80, height: 24 }}
            />

            {/* Video */}
            <video
              ref={videoRef}
              src={video.src}
              poster={video.poster || undefined}
              autoPlay={autoPlay}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Subtle gradient for readability */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />

            {/* Mute toggle */}
            {playing && (
              <button
                type="button"
                onClick={toggleMute}
                className="absolute bottom-10 right-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/90 hover:bg-black/70 transition-colors"
                aria-label={muted ? "Unmute video" : "Mute video"}
              >
                {muted ? <FaVolumeMute className="text-sm" /> : <FaVolumeUp className="text-sm" />}
              </button>
            )}

            {/* Duration badge */}
            {playing && (
              <span className="absolute bottom-10 left-3 z-20 text-white/80 text-xs font-semibold px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm">
                {video.duration}
              </span>
            )}

            {/* Status bar */}
            <div className="absolute top-0 inset-x-0 flex items-center justify-between px-6 pt-3.5 z-10 pointer-events-none">
              <span className="text-white text-xs font-semibold">9:41</span>
              <div className="flex items-center gap-1">
                <div className="flex items-end gap-[1px]">
                  {[4, 6, 8, 10].map((h, i) => (
                    <div key={i} className="w-[2px] rounded-sm bg-white" style={{ height: h }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-2 inset-x-0 flex justify-center z-10 pointer-events-none">
              <div className="w-20 h-[3px] rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </motion.div>

      {modalOpen && (
        <VideoModal src={video.src} title={video.title} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

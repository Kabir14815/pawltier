"use client";

import { useEffect, useRef } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

interface VideoModalProps {
  src: string;
  title: string;
  onClose: () => void;
}

export default function VideoModal({ src, title, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    videoRef.current?.play().catch(() => {});
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(26,26,46,0.92)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <FaTimes />
        </button>
        <p className="text-white font-bold mb-3 text-xl">{title}</p>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
          <video
            ref={videoRef}
            src={src}
            controls
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

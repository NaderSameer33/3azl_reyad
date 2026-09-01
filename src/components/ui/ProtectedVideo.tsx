"use client";

import { ShieldCheck, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

interface ProtectedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
  title?: string;
  showWatermark?: boolean;
}

export default function ProtectedVideo({
  src,
  poster,
  className = "",
  autoPlay = false,
  controls = true,
  title,
  showWatermark = true,
}: ProtectedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-slate-950 border border-white/15 shadow-2xl group select-none ${className}`}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* HTML5 Protected Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={controls}
        controlsList="nodownload noremoteplayback nobag"
        disablePictureInPicture
        playsInline
        autoPlay={autoPlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        className="h-full w-full object-cover select-none"
        style={
          {
            WebkitUserDrag: "none",
            userDrag: "none",
            WebkitTouchCallout: "none",
          } as React.CSSProperties
        }
      />

      {/* Brand Watermark Overlay (Anti-Screenshot & Theft Protection) */}
      {showWatermark && (
        <div className="absolute top-3 right-3 z-30 pointer-events-none flex items-center gap-1.5 rounded-full bg-slate-950/85 border border-sky-400/30 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-xl select-none">
          <ShieldCheck className="h-3.5 w-3.5 text-sky-400 shrink-0" />
          <span>شركة المعمورة للمقاولات العامة للعوازل • 0539441259</span>
        </div>
      )}

      {/* Video Title Overlay */}
      {title && (
        <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none flex items-center justify-between rounded-xl bg-slate-950/80 border border-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md">
          <span className="truncate">{title}</span>
          <span className="text-[10px] text-sky-300 font-mono">HD 1080p</span>
        </div>
      )}
    </div>
  );
}

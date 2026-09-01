"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

interface ProtectedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  showWatermark?: boolean;
  priority?: boolean;
}

export default function ProtectedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  containerClassName = "w-full h-full",
  showWatermark = true,
  priority = false,
}: ProtectedImageProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative w-full h-full min-h-[180px] overflow-hidden select-none bg-slate-900 ${containerClassName}`}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Native Protected img Element - Guaranteed local loading */}
      <img
        src={error || !src ? "/images/og-image.jpg" : src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError={() => setError(true)}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        className={`w-full h-full object-cover pointer-events-none select-none transition-all duration-500 ${className}`}
        style={
          {
            WebkitUserDrag: "none",
            KhtmlUserDrag: "none",
            MozUserDrag: "none",
            OUserDrag: "none",
            userDrag: "none",
            WebkitTouchCallout: "none",
          } as React.CSSProperties
        }
      />

      {/* Transparent Click & Drag Blocking Overlay Shield */}
      <div
        className="absolute inset-0 z-10 bg-transparent cursor-default pointer-events-auto"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        aria-hidden="true"
      />

      {/* Official Brand Watermark Overlay Badge (Anti-Screenshot) */}
      {showWatermark && (
        <div className="absolute bottom-2.5 right-2.5 z-20 pointer-events-none flex items-center gap-1.5 rounded-lg bg-slate-950/85 border border-white/20 px-2.5 py-1 text-[10px] font-bold text-white/90 backdrop-blur-md shadow-lg select-none">
          <ShieldCheck className="h-3.5 w-3.5 text-sky-400 shrink-0" />
          <span className="truncate">شركة المعمورة • 0539441259</span>
        </div>
      )}
    </div>
  );
}

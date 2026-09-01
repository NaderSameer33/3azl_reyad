"use client";

import { useState } from "react";
import Image from "next/image";
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
  containerClassName = "",
  showWatermark = true,
  priority = false,
}: ProtectedImageProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden select-none ${containerClassName}`}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Real Image Element with Protection attributes */}
      <Image
        src={error ? "/images/og-image.jpg" : src}
        alt={alt}
        fill={fill}
        width={!fill ? width || 800 : undefined}
        height={!fill ? height || 600 : undefined}
        priority={priority}
        onError={() => setError(true)}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        className={`pointer-events-none select-none object-cover transition-all duration-300 ${className}`}
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
        <div className="absolute bottom-2.5 right-2.5 z-20 pointer-events-none flex items-center gap-1.5 rounded-lg bg-slate-950/80 border border-white/20 px-2 py-1 text-[10px] font-bold text-white/90 backdrop-blur-md shadow-lg select-none">
          <ShieldCheck className="h-3 w-3 text-sky-400 shrink-0" />
          <span className="truncate">شركة المعمورة • 0539441259</span>
        </div>
      )}
    </div>
  );
}

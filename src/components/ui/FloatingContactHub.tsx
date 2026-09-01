"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Phone, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingContactHub() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const whatsappUrl = siteConfig.whatsapp.url;

  const socialLinks = [
    {
      id: "whatsapp",
      label: "واتساب مباشر مع المهندس",
      href: whatsappUrl,
      target: "_blank",
      color: "text-[#25D366]",
      activeGlow: "bg-[#25D366]/25 border-[#25D366]/60 shadow-[0_0_20px_rgba(37,211,102,0.6)]",
      isPrimaryGlow: true,
      customIcon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 drop-shadow-[0_0_10px_rgba(37,211,102,0.95)]"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path
            d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"
            fill="currentColor"
            stroke="none"
          />
          <path
            d="M8.7 8.7a1 1 0 0 0 .3 1.4 7 7 0 0 0 4.9 4.9 1 1 0 0 0 1.4-.3l.7-1a1 1 0 0 0-.2-1.3l-1.5-1.1a1 1 0 0 0-1.2.1l-.5.4a5 5 0 0 1-2.6-2.6l.4-.5a1 1 0 0 0 .1-1.2L9.4 7a1 1 0 0 0-1.3-.2l-1 .7a1 1 0 0 0-.3 1.2z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },
    {
      id: "phone",
      label: `اتصال فوري: ${siteConfig.phone.display.primary}`,
      href: `tel:${siteConfig.phone.primary}`,
      target: "_self",
      color: "text-[#00E5FF]",
      activeGlow: "bg-[#00E5FF]/25 border-[#00E5FF]/60 shadow-[0_0_20px_rgba(0,229,255,0.6)]",
      isPrimaryGlow: false,
      customIcon: <Phone className="h-5 w-5" />,
    },
    {
      id: "tiktok",
      label: "فيديوهات المشاريع على تيك توك",
      href: siteConfig.social.tiktok.url,
      target: "_blank",
      color: "text-[#FE2C55]",
      activeGlow: "bg-[#FE2C55]/25 border-[#FE2C55]/60 shadow-[0_0_20px_rgba(254,44,85,0.6)]",
      isPrimaryGlow: false,
      customIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.84 4.84 0 0 1-1.01-.07z" />
        </svg>
      ),
    },
    {
      id: "twitter",
      label: "حسابنا على منصة إكس (تويتر)",
      href: siteConfig.social.x.url,
      target: "_blank",
      color: "text-white",
      activeGlow: "bg-white/25 border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.5)]",
      isPrimaryGlow: false,
      customIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <aside
      aria-label="شريط التواصل السريع"
      className="flex fixed bottom-5 right-3 sm:bottom-8 sm:right-6 z-50 flex-col items-center select-none"
    >
      {/* ── Scroll to Top Button (Above the Pillar) ───────────────── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="الرجوع لأعلى الصفحة"
            className="mb-2 sm:mb-2.5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#080E21]/90 hover:bg-sky-500/20 border border-white/15 hover:border-sky-400/50 text-slate-300 hover:text-sky-300 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-115 active:scale-95 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]"
          >
            <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Vertical Floating Pill Dock ───────────────────────────── */}
      <div className="relative flex flex-col items-center gap-1.5 sm:gap-2 rounded-full bg-[#080E21]/90 border border-white/15 p-1.5 py-2.5 sm:p-2 sm:py-3 shadow-2xl shadow-black/80 backdrop-blur-2xl">
        {/* Continuous WhatsApp Glowing Radar Beam Aura behind the top of the dock */}
        <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#25D366]/25 blur-xl animate-pulse" />

        {socialLinks.map((item) => {
          const isHovered = hoveredId === item.id;
          return (
            <div
              key={item.id}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Pulsing Light Ring around WhatsApp */}
              {item.isPrimaryGlow && (
                <>
                  <span className="pointer-events-none animate-ping absolute inset-0.5 sm:inset-1 rounded-full bg-[#25D366] opacity-40" />
                  <span className="pointer-events-none absolute -inset-1 rounded-full bg-[#25D366]/30 blur-sm animate-pulse" />
                </>
              )}

              {/* Dynamic Animated Glow Backdrop on Hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                    className={`pointer-events-none absolute -inset-1 rounded-full border transition-all duration-300 ${item.activeGlow}`}
                  />
                )}
              </AnimatePresence>

              {/* Tooltip on Hover (appears on the left in RTL layout) */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.15 }}
                    className="hidden sm:block absolute right-full mr-3.5 whitespace-nowrap rounded-xl bg-[#080E21]/95 border border-white/15 px-3 py-1.5 text-xs font-bold text-white shadow-2xl backdrop-blur-xl pointer-events-none z-50"
                  >
                    <span>{item.label}</span>
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-[#080E21]" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Icon Button */}
              <a
                href={item.href}
                target={item.target}
                rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                className={`relative z-10 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full transition-all duration-300 hover:scale-125 active:scale-90 ${item.color}`}
              >
                {item.customIcon}
              </a>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

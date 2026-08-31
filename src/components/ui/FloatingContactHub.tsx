"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Phone, X, MessageCircle } from "lucide-react";

/* ─── Channel config ─────────────────────────────────────────────────────── */
const channels = [
  {
    id:      "phone",
    label:   "اتصال مباشر",
    sublabel: siteConfig.phone.display.primary,
    href:    `tel:${siteConfig.phone.primary}`,
    target:  "_self",
    icon: (
      <Phone className="h-5 w-5" aria-hidden="true" />
    ),
    bg:   "bg-blue-brand-600",
    glow: "shadow-blue-brand-500/50",
    ring: "ring-blue-brand-400",
    text: "text-white",
    badge: "اتصال مباشر",
  },
  {
    id:      "whatsapp",
    label:   "واتساب",
    sublabel: "رسالة فورية",
    href:    siteConfig.whatsapp.url,
    target:  "_blank",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.11 1.522 5.837L.057 23.49a.75.75 0 0 0 .921.921l5.663-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
    bg:   "bg-wa-green-500",
    glow: "shadow-wa-green-500/50",
    ring: "ring-wa-green-400",
    text: "text-white",
    badge: null,
  },
  {
    id:      "snapchat",
    label:   "سناب شات",
    sublabel: siteConfig.social.snapchat.display,
    href:    siteConfig.social.snapchat.url,
    target:  "_blank",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12.065.001C9.335-.023 5.373 1.033 3.61 5.09c-.62 1.422-.478 3.865-.478 5.31 0 .008-.226.085-.563.085-.388 0-.83-.118-1.248-.41a.755.755 0 0 0-.433-.124c-.422 0-.888.3-.888.756 0 .662 1.058 1.184 1.967 1.39.072.017.143.032.213.047-.085.292-.222.805-.222 1.198 0 .06.004.12.013.178.078.506.46.89.986.89.387 0 .742-.135 1.065-.25.466-.165.937-.272 1.42-.272.54 0 .962.162 1.54.56 1.2.822 2.19 1.24 3.41 1.24.967 0 1.805-.274 2.704-.78.572.12 1.143.252 1.657.38.374.093.714.175.98.175.353 0 .616-.09.78-.277.16-.184.194-.437.09-.718l-.036-.097.036-.005c.87-.138 1.95-.563 1.95-1.385 0-.428-.38-.75-.89-.75a.73.73 0 0 0-.424.13c-.39.27-.85.384-1.235.384-.335 0-.558-.075-.558-.082v-.003c0-1.446.143-3.902-.48-5.327C18.686 1.022 14.75-.022 12.065 0z" />
      </svg>
    ),
    bg:   "bg-snap-yellow-500",
    glow: "shadow-snap-yellow-500/50",
    ring: "ring-snap-yellow-400",
    text: "text-tiktok-dark",
    badge: null,
  },
  {
    id:      "tiktok",
    label:   "تيك توك",
    sublabel: siteConfig.social.tiktok.display,
    href:    siteConfig.social.tiktok.url,
    target:  "_blank",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.84 4.84 0 0 1-1.01-.07z" />
      </svg>
    ),
    bg:   "bg-tiktok-dark",
    glow: "shadow-tiktok-cyan/40",
    ring: "ring-tiktok-cyan",
    text: "text-tiktok-cyan",
    badge: null,
  },
] as const;

/* ─── Animation variants ─────────────────────────────────────────────────── */
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.15 } },
};

const hubVariants = {
  hidden:  { scale: 0.85, opacity: 0 },
  visible: { scale: 1,    opacity: 1, transition: { type: "spring", stiffness: 320, damping: 26 } },
  exit:    { scale: 0.85, opacity: 0, transition: { duration: 0.18 } },
};

const itemVariants = {
  hidden:  { opacity: 0, x: 20, scale: 0.88 },
  visible: (i: number) => ({
    opacity: 1, x: 0, scale: 1,
    transition: { type: "spring", stiffness: 340, damping: 28, delay: i * 0.06 },
  }),
  exit: (i: number) => ({
    opacity: 0, x: 20, scale: 0.88,
    transition: { duration: 0.14, delay: (channels.length - 1 - i) * 0.04 },
  }),
};

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function FloatingContactHub() {
  const [open, setOpen] = useState(false);
  const hubRef = useRef<HTMLDivElement>(null);

  /* Close on outside click */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (hubRef.current && !hubRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* ── Backdrop ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ── Hub container ──────────────────────────────────────────── */}
      {/* Hidden on mobile — MobileBottomBar handles those screens */}
      <div
        ref={hubRef}
        className="max-md:hidden fixed bottom-6 left-5 z-50 flex flex-col-reverse items-end gap-3"
        /* RTL: left = end side */
      >
        {/* Channel cards — revealed when open */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="channels"
              variants={hubVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col-reverse gap-3 pb-1"
              role="menu"
              aria-label="قنوات التواصل"
            >
              {channels.map((ch, i) => (
                <motion.a
                  key={ch.id}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  href={ch.href}
                  target={ch.target}
                  rel={ch.target === "_blank" ? "noopener noreferrer" : undefined}
                  id={`hub-${ch.id}-btn`}
                  role="menuitem"
                  onClick={() => { if (ch.target === "_self") setOpen(false); }}
                  className={`
                    group flex items-center gap-3 rounded-2xl px-4 py-3
                    shadow-xl ring-1 ring-inset ring-white/15
                    transition-all duration-200 hover:scale-105
                    ${ch.bg} ${ch.glow} shadow-lg ${ch.text}
                  `}
                  style={{ minWidth: "200px" }}
                  aria-label={`${ch.label}: ${ch.sublabel}`}
                >
                  {/* Icon bubble */}
                  <span
                    className={`
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-xl bg-white/15 group-hover:bg-white/25
                      transition-colors shadow-inner
                    `}
                  >
                    {ch.icon}
                  </span>

                  {/* Text */}
                  <span className="flex flex-col leading-none">
                    <span className="text-sm font-bold">{ch.label}</span>
                    <span className="mt-0.5 text-[11px] opacity-75 font-medium" dir="ltr">
                      {ch.sublabel}
                    </span>
                  </span>

                  {/* Optional badge */}
                  {ch.badge && (
                    <span className="mr-auto rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold">
                      {ch.badge}
                    </span>
                  )}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Main FAB trigger button ─────────────────────────────── */}
        <motion.button
          id="floating-hub-trigger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "إغلاق قائمة التواصل" : "فتح قائمة التواصل"}
          aria-expanded={open}
          aria-haspopup="menu"
          whileHover={{ scale: 1.08 }}
          whileTap={{  scale: 0.94 }}
          className={`
            relative flex h-14 w-14 items-center justify-center rounded-full
            shadow-2xl transition-all duration-300
            ${open
              ? "bg-surface-800 shadow-surface-900/50 ring-2 ring-white/20"
              : "bg-wa-green-500 shadow-wa-green-500/50"
            }
          `}
        >
          {/* Pulse ring — only when closed */}
          {!open && (
            <>
              <span className="absolute inset-0 rounded-full bg-wa-green-400 animate-ping opacity-40" aria-hidden="true" />
              <span className="absolute inset-0 rounded-full bg-wa-green-500/30 animate-pulse" aria-hidden="true" />
            </>
          )}

          {/* Icon swap */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "chat"}
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0,   opacity: 1, scale: 1 }}
              exit={{    rotate:  90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="text-white"
            >
              {open
                ? <X              className="h-6 w-6" aria-hidden="true" />
                : <MessageCircle  className="h-6 w-6" aria-hidden="true" />
              }
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* Tooltip label */}
        <AnimatePresence>
          {!open && (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: 4 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              className="rounded-full bg-surface-900/80 backdrop-blur px-2.5 py-1 text-[10px] font-semibold text-white/80 select-none pointer-events-none"
              aria-hidden="true"
            >
              تواصل معنا
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

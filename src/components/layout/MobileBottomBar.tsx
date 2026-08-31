"use client";

import { siteConfig } from "@/config/site";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const actions = [
  {
    id:      "mobile-bar-phone",
    label:   "اتصال",
    href:    `tel:${siteConfig.phone.primary}`,
    target:  "_self",
    bg:      "bg-blue-brand-600 hover:bg-blue-brand-700",
    text:    "text-white",
    shadow:  "shadow-blue-brand-600/30",
    icon: <Phone className="h-5 w-5 mx-auto mb-0.5" aria-hidden="true" />,
  },
  {
    id:      "mobile-bar-whatsapp",
    label:   "واتساب",
    href:    siteConfig.whatsapp.url,
    target:  "_blank",
    bg:      "bg-wa-green-500 hover:bg-wa-green-600",
    text:    "text-white",
    shadow:  "shadow-wa-green-500/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mx-auto mb-0.5" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.11 1.522 5.837L.057 23.49a.75.75 0 0 0 .921.921l5.663-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    id:      "mobile-bar-snapchat",
    label:   "سناب",
    href:    siteConfig.social.snapchat.url,
    target:  "_blank",
    bg:      "bg-snap-yellow-500 hover:bg-snap-yellow-600",
    text:    "text-tiktok-dark",
    shadow:  "shadow-snap-yellow-500/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mx-auto mb-0.5" aria-hidden="true">
        <path d="M12.065.001C9.335-.023 5.373 1.033 3.61 5.09c-.62 1.422-.478 3.865-.478 5.31 0 .008-.226.085-.563.085-.388 0-.83-.118-1.248-.41a.755.755 0 0 0-.433-.124c-.422 0-.888.3-.888.756 0 .662 1.058 1.184 1.967 1.39.072.017.143.032.213.047-.085.292-.222.805-.222 1.198 0 .06.004.12.013.178.078.506.46.89.986.89.387 0 .742-.135 1.065-.25.466-.165.937-.272 1.42-.272.54 0 .962.162 1.54.56 1.2.822 2.19 1.24 3.41 1.24.967 0 1.805-.274 2.704-.78.572.12 1.143.252 1.657.38.374.093.714.175.98.175.353 0 .616-.09.78-.277.16-.184.194-.437.09-.718l-.036-.097.036-.005c.87-.138 1.95-.563 1.95-1.385 0-.428-.38-.75-.89-.75a.73.73 0 0 0-.424.13c-.39.27-.85.384-1.235.384-.335 0-.558-.075-.558-.082v-.003c0-1.446.143-3.902-.48-5.327C18.686 1.022 14.75-.022 12.065 0z" />
      </svg>
    ),
  },
  {
    id:      "mobile-bar-tiktok",
    label:   "تيك توك",
    href:    siteConfig.social.tiktok.url,
    target:  "_blank",
    bg:      "bg-tiktok-dark hover:bg-black",
    text:    "text-tiktok-cyan",
    shadow:  "shadow-tiktok-cyan/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mx-auto mb-0.5" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.84 4.84 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
] as const;

export default function MobileBottomBar() {
  return (
    <nav
      className="
        md:hidden
        fixed bottom-0 right-0 left-0 z-40
        border-t border-white/10
        bg-surface-950/95 backdrop-blur-xl
        safe-area-inset-bottom
      "
      aria-label="شريط التواصل السريع"
      role="navigation"
    >
      <div className="grid grid-cols-4 divide-x divide-x-reverse divide-white/8">
        {actions.map((action, i) => (
          <motion.a
            key={action.id}
            href={action.href}
            target={action.target}
            rel={action.target === "_blank" ? "noopener noreferrer" : undefined}
            id={action.id}
            aria-label={action.label}
            whileTap={{ scale: 0.93 }}
            className={`
              flex flex-col items-center justify-center
              py-3 px-1 text-center
              text-[11px] font-bold leading-tight
              transition-colors duration-150
              ${action.bg} ${action.text}
              shadow-inner ${action.shadow}
              first:rounded-none last:rounded-none
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-inset focus-visible:ring-white/50
            `}
            style={{ minHeight: "56px" }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.22 }}
          >
            {action.icon}
            {action.label}
          </motion.a>
        ))}
      </div>

      {/* Safe area spacer for iOS home indicator */}
      <div className="h-safe-bottom bg-surface-950/95" aria-hidden="true" />
    </nav>
  );
}

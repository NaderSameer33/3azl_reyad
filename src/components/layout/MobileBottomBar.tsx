"use client";

import { siteConfig } from "@/config/site";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    "السلام عليكم، أود حجز موعد كشف تسربات وعزل أسطح بالرياض"
  )}`;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-2xl border-t border-white/15 p-2.5 px-3 shadow-2xl shadow-black select-none"
      role="region"
      aria-label="شريط التواصل السريع للجوال"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* 1. Phone Call Button */}
        <a
          href={`tel:${siteConfig.phone.primary}`}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 border border-blue-400/40 hover:bg-slate-800 py-3 text-xs font-black text-white shadow-lg transition-all active:scale-95 min-h-[46px]"
          aria-label={`اتصال هاتفي مباشر: ${siteConfig.phone.display.primary}`}
        >
          <Phone className="h-4 w-4 text-sky-400" />
          <span>اتصال هاتف</span>
        </a>

        {/* 2. Primary WhatsApp Button with Pulse Aura */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 py-3 text-xs font-black text-white shadow-lg shadow-emerald-600/30 transition-all active:scale-95 min-h-[46px] overflow-hidden"
          aria-label="محادثة واتساب فورية لحجز معاينة بالرياض"
        >
          <span className="animate-ping absolute inset-0 rounded-xl bg-emerald-400 opacity-30 pointer-events-none" />
          <MessageCircle className="h-4 w-4 relative z-10" />
          <span className="relative z-10">واتساب مباشر</span>
        </a>

        {/* 3. Snapchat Channel Button */}
        <a
          href={siteConfig.social.snapchat.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFFC00] hover:bg-[#FFF000] text-slate-950 shadow-md transition-all active:scale-95 border border-yellow-300"
          aria-label="تغطيات حية على حساب سناب شات"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path d="M12.065.001C9.335-.023 5.373 1.033 3.61 5.09c-.62 1.422-.478 3.865-.478 5.31 0 .008-.226.085-.563.085-.388 0-.83-.118-1.248-.41a.755.755 0 0 0-.433-.124c-.422 0-.888.3-.888.756 0 .662 1.058 1.184 1.967 1.39.072.017.143.032.213.047-.085.292-.222.805-.222 1.198 0 .06.004.12.013.178.078.506.46.89.986.89.387 0 .742-.135 1.065-.25.466-.165.937-.272 1.42-.272.54 0 .962.162 1.54.56 1.2.822 2.19 1.24 3.41 1.24.967 0 1.805-.274 2.704-.78.572.12 1.143.252 1.657.38.374.093.714.175.98.175.353 0 .616-.09.78-.277.16-.184.194-.437.09-.718l-.036-.097.036-.005c.87-.138 1.95-.563 1.95-1.385 0-.428-.38-.75-.89-.75a.73.73 0 0 0-.424.13c-.39.27-.85.384-1.235.384-.335 0-.558-.075-.558-.082v-.003c0-1.446.143-3.902-.48-5.327C18.686 1.022 14.75-.022 12.065 0z" />
          </svg>
        </a>

        {/* 4. TikTok Channel Button */}
        <a
          href={siteConfig.social.tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 border border-cyan-400/50 text-cyan-300 hover:bg-slate-900 shadow-md transition-all active:scale-95"
          aria-label="فيديوهات ومشاريع على تيك توك"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.84 4.84 0 0 1-1.01-.07z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

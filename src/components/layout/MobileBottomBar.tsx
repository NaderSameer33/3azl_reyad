"use client";

import { siteConfig } from "@/config/site";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileBottomBar() {
  const whatsappUrl = siteConfig.whatsapp.url;

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

        {/* 3. X / Twitter Button */}
        <a
          href={siteConfig.social.x.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-white/20 text-white hover:bg-slate-800 shadow-md transition-all active:scale-95"
          aria-label="حساب منصة إكس"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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

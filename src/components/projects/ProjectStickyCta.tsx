"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Phone, MessageCircle, Clock } from "lucide-react";

interface ProjectStickyCtaProps {
  projectTitle: string;
  categoryName: string;
  district: string;
}

export default function ProjectStickyCta({
  projectTitle,
  categoryName,
  district,
}: ProjectStickyCtaProps) {
  const whatsappText = encodeURIComponent(
    `السلام عليكم، اطلعت على مشروع (${projectTitle}) وأريد الاستفسار عن التكلفة والمعاينة لبيتي بالرياض.`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${whatsappText}`;

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="sticky bottom-4 z-40 mx-auto max-w-5xl px-4"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-white/15 bg-slate-900/90 p-4 sm:p-5 backdrop-blur-2xl shadow-2xl shadow-black/50">
        {/* Pitch */}
        <div className="text-right">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 rounded-full bg-wa-green-500/20 border border-wa-green-500/30 px-2.5 py-0.5 text-[10px] font-extrabold text-wa-green-300">
              <Clock className="h-3 w-3" />
              استجابة فورية خلال ساعتين
            </span>
            <span className="text-[11px] text-white/50 hidden md:inline">
              في كافة أحياء الرياض
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-white">
            تريد تنفيذ نفس جودة العزل لمنزلك في {district} أو أي حي بالرياض؟
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex w-full sm:w-auto items-center gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-2xl bg-wa-green-500 hover:bg-wa-green-600 px-5 py-3 text-xs font-black text-white shadow-lg shadow-wa-green-500/30 transition-all hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            <span>تسعير عبر واتساب</span>
          </a>

          <a
            href={`tel:${siteConfig.phone.primary}`}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-400/40 bg-blue-brand-600/30 hover:bg-blue-brand-600/50 px-5 py-3 text-xs font-bold text-white transition-all hover:scale-105"
          >
            <Phone className="h-4 w-4 text-blue-brand-300" />
            <span>اتصال مباشر</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

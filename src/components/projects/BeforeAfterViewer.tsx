"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BeforeAfterPair, ProjectCategoryId } from "@/types/project";
import ProjectVisual from "./ProjectVisualFallback";
import { CheckCircle2, AlertTriangle, ArrowRightLeft } from "lucide-react";

import ProtectedImage from "@/components/ui/ProtectedImage";

interface BeforeAfterViewerProps {
  beforeAfter: BeforeAfterPair;
  categoryId: ProjectCategoryId;
  projectTitle: string;
}

export default function BeforeAfterViewer({
  beforeAfter,
  categoryId,
  projectTitle,
}: BeforeAfterViewerProps) {
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  const currentImg =
    activeTab === "before"
      ? beforeAfter.beforeImage
      : beforeAfter.afterImage;

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-right">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <span className="text-xs font-bold text-gold-400 block mb-1">
            المقارنة الفنية الميدانية
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            معاينة حالة الموقع (قبل وبعد التدخل الهندسي)
          </h3>
        </div>

        {/* Switch Buttons */}
        <div className="flex items-center rounded-2xl bg-slate-950/80 p-1.5 border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("before")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
              activeTab === "before"
                ? "bg-red-500/20 text-red-300 border border-red-500/40 shadow-lg"
                : "text-white/60 hover:text-white"
            }`}
          >
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>قبل المعالجة</span>
          </button>
          <button
            onClick={() => setActiveTab("after")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
              activeTab === "after"
                ? "bg-wa-green-500/20 text-wa-green-300 border border-wa-green-500/40 shadow-lg"
                : "text-white/60 hover:text-white"
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>بعد الإنجاز (النتيجة)</span>
          </button>
        </div>
      </div>

      {/* Visual Canvas with Tab Switching Animation */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            {currentImg ? (
              <ProtectedImage
                src={currentImg}
                alt={
                  activeTab === "before"
                    ? beforeAfter.beforeTitle
                    : beforeAfter.afterTitle
                }
                fill
                className="h-full w-full object-cover"
                showWatermark={true}
              />
            ) : (
              <ProjectVisual
                categoryId={categoryId}
                title={
                  activeTab === "before"
                    ? beforeAfter.beforeTitle
                    : beforeAfter.afterTitle
                }
                stage={activeTab}
                className="h-full w-full"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Description */}
      <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4 text-xs leading-relaxed text-white/80 flex items-start gap-3">
        <ArrowRightLeft className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-white block mb-1">
            {activeTab === "before"
              ? beforeAfter.beforeTitle
              : beforeAfter.afterTitle}
          </span>
          <p className="text-white/70">{beforeAfter.description}</p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryItem, ProjectCategoryId } from "@/types/project";
import ProjectVisual from "./ProjectVisualFallback";
import { ImageIcon } from "lucide-react";

import ProtectedImage from "@/components/ui/ProtectedImage";

interface ProjectGalleryProps {
  gallery: GalleryItem[];
  categoryId: ProjectCategoryId;
  projectTitle: string;
}

export default function ProjectGallery({
  gallery,
  categoryId,
  projectTitle,
}: ProjectGalleryProps) {
  const [filter, setFilter] = useState<"all" | "before" | "during" | "after">("all");

  const filteredItems = gallery.filter(
    (item) => filter === "all" || item.stage === filter
  );

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-right">
      {/* Header & Filter Tabs */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <span className="text-xs font-bold text-blue-brand-400 block mb-1">
            معرض الصور والتوثيق الميداني
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            صور مراحل التنفيذ خطوة بخطوة
          </h3>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto rounded-2xl bg-slate-950/80 p-1.5 border border-white/10 self-start sm:self-auto text-xs">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-xl px-3.5 py-1.5 font-bold transition-all ${
              filter === "all"
                ? "bg-blue-brand-600 text-white shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            الكل ({gallery.length})
          </button>
          <button
            onClick={() => setFilter("before")}
            className={`rounded-xl px-3.5 py-1.5 font-bold transition-all ${
              filter === "before"
                ? "bg-red-500/20 text-red-300 border border-red-500/40 shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            قبل العمل
          </button>
          <button
            onClick={() => setFilter("during")}
            className={`rounded-xl px-3.5 py-1.5 font-bold transition-all ${
              filter === "during"
                ? "bg-gold-500/20 text-gold-300 border border-gold-500/40 shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            أثناء التنفيذ
          </button>
          <button
            onClick={() => setFilter("after")}
            className={`rounded-xl px-3.5 py-1.5 font-bold transition-all ${
              filter === "after"
                ? "bg-wa-green-500/20 text-wa-green-300 border border-wa-green-500/40 shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            بعد الاستلام
          </button>
        </div>
      </div>

      {/* Grid with Animation */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {item.url ? (
                  <ProtectedImage
                    src={item.url}
                    alt={item.caption}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    showWatermark={true}
                  />
                ) : (
                  <ProjectVisual
                    categoryId={categoryId}
                    title={item.caption}
                    stage={item.stage}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-4 bg-slate-900/90 border-t border-white/5">
                <p className="text-xs font-semibold leading-relaxed text-white/90 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

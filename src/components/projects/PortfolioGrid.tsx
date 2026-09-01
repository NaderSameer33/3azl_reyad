"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Project, ProjectCategory } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface PortfolioGridProps {
  projects: Project[];
  categories: ProjectCategory[];
}

export default function PortfolioGrid({ projects, categories }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category.id === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.seoKeywords.some((k) =>
          k.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    projects.forEach((p) => {
      counts[p.category.id] = (counts[p.category.id] || 0) + 1;
    });
    return counts;
  }, [projects]);

  return (
    <div className="space-y-10">
      {/* Filter & Search Controls Bar */}
      <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-slate-900/60 p-4 sm:p-6 backdrop-blur-xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`relative flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-extrabold transition-all duration-200 ${
              selectedCategory === "all"
                ? "bg-blue-brand-600 text-white shadow-lg shadow-blue-brand-600/30"
                : "bg-slate-800/80 text-white/70 hover:bg-slate-800 hover:text-white border border-white/5"
            }`}
          >
            <span>جميع الأعمال والمشاريع</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
                selectedCategory === "all"
                  ? "bg-white/20 text-white"
                  : "bg-white/10 text-white/60"
              }`}
            >
              {categoryCounts.all}
            </span>
          </button>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-extrabold transition-all duration-200 ${
                  isSelected
                    ? "bg-blue-brand-600 text-white shadow-lg shadow-blue-brand-600/30"
                    : "bg-slate-800/80 text-white/70 hover:bg-slate-800 hover:text-white border border-white/5"
                }`}
              >
                <span>{cat.nameAr}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-white/10 text-white/60"
                  }`}
                >
                  {categoryCounts[cat.id] || 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-white/5">
          <div className="relative w-full sm:flex-1">
            <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث باسم الحي بالرياض (مثلاً: الملقا، النرجس، الياسمين، الصحافة، ظهرة لبن)..."
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 py-2.5 pr-11 pl-4 text-xs text-white placeholder-white/40 backdrop-blur-md focus:border-blue-brand-400 focus:outline-none focus:ring-2 focus:ring-blue-brand-500/20 transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto overflow-x-auto text-xs text-white/50">
            <span className="shrink-0 font-medium">أحياء مميزة:</span>
            {["الملقا", "النرجس", "الياسمين", "الصحافة", "ظهرة لبن"].map((district) => (
              <button
                key={district}
                onClick={() => setSearchQuery(district)}
                className={`shrink-0 rounded-lg px-2.5 py-1 text-[11px] font-bold transition-colors ${
                  searchQuery === district
                    ? "bg-gold-500/20 text-gold-300 border border-gold-500/40"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                حي {district}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="flex items-center justify-between text-xs text-white/60">
        <p>
          يتم عرض{" "}
          <span className="font-bold text-gold-400">
            {filteredProjects.length}
          </span>{" "}
          مشروع منجز في مدينة الرياض
        </p>
        {(selectedCategory !== "all" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-blue-brand-400 hover:text-blue-brand-300 underline underline-offset-4"
          >
            إعادة ضبط الفلاتر
          </button>
        )}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="my-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 bg-slate-900/30 p-12 text-center backdrop-blur-sm">
          <p className="text-lg font-bold text-white mb-2">لم يتم العثور على مشاريع تطابق بحثك</p>
          <p className="text-xs text-white/60 mb-6">جرب اختيار تصنيف مختلف من القائمة أعلاه أو مسح نص البحث.</p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="rounded-xl bg-blue-brand-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-blue-brand-500 transition-all"
          >
            عرض كافة المشاريع
          </button>
        </div>
      )}
    </div>
  );
}

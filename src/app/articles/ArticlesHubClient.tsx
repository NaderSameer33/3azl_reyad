"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Article } from "@/data/articlesData";
import LiquidCard from "@/components/ui/LiquidCard";
import {
  Search,
  BookOpen,
  Clock,
  Calendar,
  User,
  ArrowLeft,
  Sparkles,
  ChevronLeft,
  Tag,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";

interface ArticlesHubClientProps {
  articles: Article[];
  featuredArticle: Article;
}

const categoryFilterTabs = [
  { id: "all", label: "جميع المقالات والأدلة" },
  { id: "foam-insulation", label: "عزل الفوم" },
  { id: "waterproofing-thermal", label: "عزل مائي وحراري" },
  { id: "leak-detection", label: "كشف التسربات" },
  { id: "tank-insulation", label: "عزل الخزانات" },
  { id: "pools-bathrooms", label: "المسابح والحمامات" },
];

export default function ArticlesHubClient({
  articles,
  featuredArticle,
}: ArticlesHubClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesCategory =
        selectedCategory === "all" || art.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.keywords.some((k) =>
          k.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-950 min-h-screen text-white text-right">
      {/* ── Breadcrumb Bar ─────────────────────────────────────────── */}
      <div className="border-b border-white/10 bg-slate-900/60 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="مسار التصفح"
            className="flex items-center gap-2 text-xs font-medium text-slate-400"
          >
            <Link href="/" className="hover:text-white transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="h-3.5 w-3.5 opacity-50" />
            <span className="text-sky-300 font-bold">
              مكتبة المقالات والأدلة الفنية
            </span>
          </nav>
        </div>
      </div>

      {/* ── Hub Hero Header ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-300 mb-4">
            <BookOpen className="h-4 w-4" />
            المكتبة المعرفية والهندسية المعتمدة بالرياض
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white mb-4">
            أدلة وشروحات هندسية متخصصة في{" "}
            <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-teal-300 bg-clip-text text-transparent">
              العزل وكشف التسربات
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            شروحات موثقة تجيب عن استفسارات الملاك، اشتراطات كود البناء السعودي SBC 601، طرق تخفيض الفواتير، ومقارنات المواد المعتمدة.
          </p>

          {/* Search Bar Input */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن موضوع، نوع عزل، أو اشتراطات كود البناء..."
                className="w-full rounded-2xl border border-white/15 bg-slate-900/90 py-3.5 pr-11 pl-4 text-xs sm:text-sm text-white placeholder-slate-400 focus:border-sky-400 focus:outline-none shadow-xl backdrop-blur-xl transition-all text-right"
              />
              <Search className="h-4 w-4 text-slate-400 absolute right-4 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* ── Featured Hero Article Card ───────────────────────────────── */}
        {searchQuery === "" && selectedCategory === "all" && featuredArticle && (
          <div className="mb-14">
            <span className="text-xs font-black text-sky-400 uppercase tracking-wider block mb-3">
              ⭐ المقال المميز لهذا الأسبوع:
            </span>

            <LiquidCard glowColor="sky" className="p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="rounded-full bg-sky-500/15 border border-sky-400/30 px-3 py-1 text-sky-300 font-bold">
                      {featuredArticle.categoryName}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-slate-500" />
                      {featuredArticle.readingTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-slate-500" />
                      {featuredArticle.publishedDate}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug mb-4 hover:text-sky-300 transition-colors">
                    <Link href={`/articles/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white font-bold">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-white block">
                        {featuredArticle.author.name}
                      </span>
                      <span className="text-[11px] text-teal-300 font-semibold">
                        {featuredArticle.author.role}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full">
                  <div className="rounded-2xl bg-slate-950/80 border border-white/5 p-4 mb-4 text-xs space-y-2 text-slate-300">
                    <div className="font-bold text-sky-300 mb-1">
                      أبرز محاور هذا الدليل:
                    </div>
                    {featuredArticle.tableOfContents.slice(0, 3).map((toc) => (
                      <div key={toc.id} className="flex items-center gap-2 text-[11px]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                        <span className="truncate">{toc.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/articles/${featuredArticle.slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
                  >
                    <span>قراءة الدليل الهندسي الكامل</span>
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </LiquidCard>
          </div>
        )}

        {/* ── Category Filter Pills ──────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categoryFilterTabs.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`rounded-2xl px-4 py-2.5 text-xs font-black transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/25"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── 3-Column Articles Grid ─────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchQuery}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredArticles.map((article) => (
              <LiquidCard
                key={article.id}
                glowColor="sky"
                className="p-6 flex flex-col justify-between text-right"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400 mb-3">
                    <span className="rounded-full bg-sky-500/15 border border-sky-400/30 px-2.5 py-0.5 text-sky-300 font-bold">
                      {article.categoryName}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="h-3 w-3 text-slate-500" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-white leading-snug mb-3 hover:text-sky-300 transition-colors line-clamp-2">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-slate-300 text-xs font-bold">
                      <User className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[11px] text-slate-300 font-bold truncate max-w-[120px]">
                      {article.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-xs font-black text-sky-300 hover:text-white flex items-center gap-1 group"
                  >
                    <span>قراءة المقال</span>
                    <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </LiquidCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredArticles.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-12 text-center my-8">
            <BookOpen className="h-10 w-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">
              لم يتم العثور على مقالات مطابقة للبحث
            </h3>
            <p className="text-xs text-slate-400">
              جرّب تغيير كلمات البحث أو اختيار قسم مختلف.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

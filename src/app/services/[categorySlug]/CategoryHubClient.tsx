"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceCategory } from "@/types/service";
import { siteConfig } from "@/config/site";
import LiquidCard from "@/components/ui/LiquidCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  ChevronLeft,
  ShieldCheck,
  Award,
  Phone,
  MessageCircle,
  CalendarCheck,
  Layers,
  Sparkles,
  FileText,
  Building2,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Maximize2,
  Calculator,
  Flame,
  BadgeCheck,
} from "lucide-react";

interface CategoryHubClientProps {
  category: ServiceCategory;
}

export default function CategoryHubClient({ category }: CategoryHubClientProps) {
  const [activeTab, setActiveTab] = useState<"projects" | "articles">("projects");
  const [estArea, setEstArea] = useState<number>(300);

  const estimatedCost = category.basePricePerMeter
    ? estArea * category.basePricePerMeter
    : category.flatPrice || 199;

  return (
    <div className="bg-slate-950 min-h-screen text-white text-right">
      {/* ── 1. Breadcrumb Bar ─────────────────────────────────────────── */}
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
            <Link href="/#services" className="hover:text-white transition-colors">
              خدمات العزل والكشف
            </Link>
            <ChevronLeft className="h-3.5 w-3.5 opacity-50" />
            <span className="text-sky-300 font-bold">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* ── 2. Category Hero Section ──────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        {/* Background Ambient Blooms */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left/Main Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-300 mb-4">
                <ShieldCheck className="h-4 w-4" />
                <span>{category.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white mb-4">
                {category.name} <br />
                <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-teal-300 bg-clip-text text-transparent">
                  في مدينة الرياض
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
                {category.longDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                    `السلام عليكم، أرغب بحجز معاينة واستفسار عن خدمة ${category.name} في الرياض.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-6 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>طلب استشارة ومعاينة عبر واتساب</span>
                </a>

                <a
                  href={`tel:${siteConfig.phone.primary}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-slate-900/80 hover:bg-white/10 px-5 py-3.5 text-xs sm:text-sm font-bold text-white transition-all"
                >
                  <Phone className="h-4 w-4 text-sky-400" />
                  <span>اتصال مباشر: {siteConfig.phone.display.primary}</span>
                </a>
              </div>
            </div>

            {/* Right/Specs Column (5 cols) */}
            <div className="lg:col-span-5">
              <LiquidCard glowColor="sky" className="p-6">
                <span className="text-xs font-black text-sky-400 block mb-3 uppercase tracking-wider">
                  المواصفات والاعتمادات الفنية للقسم
                </span>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-slate-400">المادة الأساسية:</span>
                    <strong className="text-white text-right max-w-[200px] truncate">
                      {category.technicalSpecs.material}
                    </strong>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-slate-400">السماكة المطبقة:</span>
                    <strong className="text-sky-300 font-bold">
                      {category.technicalSpecs.thickness}
                    </strong>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-slate-400">الكثافة / القوة:</span>
                    <strong className="text-white font-mono">
                      {category.technicalSpecs.density}
                    </strong>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-slate-400">مدة الضمان المعتمد:</span>
                    <strong className="text-teal-300 font-bold">
                      {category.technicalSpecs.warrantyYears} سنوات ضمان شامل
                    </strong>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400">الجهة المعتمدة:</span>
                    <strong className="text-white font-bold">
                      {category.technicalSpecs.approvalBody}
                    </strong>
                  </div>
                </div>
              </LiquidCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Tabbed Content Section (Projects & Articles) ──────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          {/* Tabs Switcher Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 border-b border-white/10 pb-5">
            <div>
              <span className="text-xs font-bold text-sky-400 block mb-1">
                المحتوى التوثيقي والمعرفي
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                استعرض مشاريعنا وأدلتنا الفنية في {category.name}
              </h2>
            </div>

            {/* Tab buttons */}
            <div className="flex items-center rounded-2xl bg-slate-900 p-1.5 border border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab("projects")}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                  activeTab === "projects"
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Building2 className="h-4 w-4" />
                <span>المشاريع المنفذة ({category.projects.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("articles")}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                  activeTab === "articles"
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FileText className="h-4 w-4" />
                <span>المقالات والشروحات ({category.articles.length})</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Projects Grid */}
          <AnimatePresence mode="wait">
            {activeTab === "projects" && (
              <motion.div
                key="projects-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {category.projects.map((proj) => (
                  <LiquidCard key={proj.id} glowColor="sky" className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="rounded-full bg-slate-950/80 border border-white/15 px-3 py-1 text-xs font-bold text-sky-300">
                          {proj.neighborhood} • {proj.city}
                        </span>
                        <span className="text-xs text-teal-300 font-bold">
                          {proj.warranty}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-white mb-2">
                        {proj.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {proj.summary}
                      </p>

                      {/* Specs Row */}
                      <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate-950/80 border border-white/5 p-3 mb-4 text-[11px] text-slate-300">
                        <div className="flex items-center gap-1.5">
                          <Maximize2 className="h-3.5 w-3.5 text-sky-400" />
                          <span>المساحة: <strong>{proj.area}</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-teal-400" />
                          <span>المدة: <strong>{proj.duration}</strong></span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/services/${category.slug}/projects/${proj.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600/20 border border-blue-500/30 py-2.5 text-xs font-black text-sky-200 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      <span>عرض تقرير المشروع وصور قبل وبعد</span>
                      <ArrowLeft className="h-3.5 w-3.5" />
                    </Link>
                  </LiquidCard>
                ))}
              </motion.div>
            )}

            {/* Tab 2: Articles Grid */}
            {activeTab === "articles" && (
              <motion.div
                key="articles-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {category.articles.map((art) => (
                  <LiquidCard key={art.id} glowColor="teal" className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                        <span>{art.publishedAt}</span>
                        <span>•</span>
                        <span>وقت القراءة: {art.readTime}</span>
                      </div>

                      <h3 className="text-lg font-black text-white mb-2 hover:text-sky-300 transition-colors">
                        <Link href={`/services/${category.slug}/articles/${art.slug}`}>
                          {art.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed mb-6">
                        {art.excerpt}
                      </p>
                    </div>

                    <Link
                      href={`/services/${category.slug}/articles/${art.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-2.5 text-xs font-bold text-white hover:bg-blue-600 hover:border-blue-500 transition-all"
                    >
                      <span>قراءة المقال والدليل الكامل</span>
                      <ArrowLeft className="h-3.5 w-3.5" />
                    </Link>
                  </LiquidCard>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── 4. Dedicated Quick Cost Estimator for this Category ───────── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <LiquidCard glowColor="sky" className="p-8 text-right">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white font-black">
                <Calculator className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-sky-400 block">تسعير مباشر لـ {category.name}</span>
                <h3 className="text-2xl font-black text-white">حاسبة التكلفة التقديرية الفورية</h3>
              </div>
            </div>

            {category.basePricePerMeter && (
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs font-bold text-white mb-2">
                  <span>المساحة بالمتر المربع:</span>
                  <span className="text-sky-300 font-mono text-sm">{estArea} م²</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={estArea}
                  onChange={(e) => setEstArea(Number(e.target.value))}
                  className="w-full accent-sky-400 cursor-pointer h-2.5 rounded-lg bg-slate-950"
                />
              </div>
            )}

            <div className="rounded-2xl border border-sky-500/30 bg-blue-500/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-sky-300 font-bold block mb-1">السعر التقديري:</span>
                <span className="text-xl sm:text-2xl font-black text-white font-mono">
                  <AnimatedCounter from={0} to={estimatedCost} duration={1} /> ريال سعودي
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  شامل المواد وضمان {category.technicalSpecs.warrantyYears} سنة
                </span>
              </div>

              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                  `السلام عليكم، أرغب بتأكيد حجز خدمة ${category.name} بمساحة ${estArea} م² بالتكلفة التقديرية (${estimatedCost} ريال).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-6 py-3 text-xs font-black text-white shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 shrink-0"
              >
                <MessageCircle className="h-4 w-4" />
                <span>تأكيد السعر وحجز المعاينة</span>
              </a>
            </div>
          </LiquidCard>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceCategory } from "@/types/service";
import { siteConfig } from "@/config/site";
import { SERVICE_DETAILS_DATA } from "@/data/serviceDetailsData";
import LiquidCard from "@/components/ui/LiquidCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ProtectedImage from "@/components/ui/ProtectedImage";
import ProtectedVideo from "@/components/ui/ProtectedVideo";
import {
  ChevronLeft,
  ShieldCheck,
  Phone,
  MessageCircle,
  Building2,
  FileText,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Maximize2,
  Calculator,
  AlertTriangle,
  Wrench,
  HelpCircle,
  Layers,
  Sparkles,
  Activity,
} from "lucide-react";

interface CategoryHubClientProps {
  category: ServiceCategory;
}

export default function CategoryHubClient({ category }: CategoryHubClientProps) {
  const [activeTab, setActiveTab] = useState<"projects" | "articles">("projects");
  const [estArea, setEstArea] = useState<number>(300);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const details =
    SERVICE_DETAILS_DATA[category.id] || SERVICE_DETAILS_DATA["foam-insulation"];

  const estimatedCost = category.basePricePerMeter
    ? estArea * category.basePricePerMeter
    : category.flatPrice || 199;

  return (
    <div className="bg-slate-950 min-h-screen text-white text-right select-none">
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
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-300">
                <ShieldCheck className="h-4 w-4" />
                <span>{category.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                {category.name} <br />
                <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-teal-300 bg-clip-text text-transparent">
                  في مدينة الرياض
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {category.longDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
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

            {/* Hero Protected Image Showcase Column */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
                <ProtectedImage
                  src={category.heroImage}
                  alt={category.name}
                  fill
                  className="h-full w-full object-cover"
                  showWatermark={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Problems & Technical Risks Section (وصف المشكلة والتحديات) ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-red-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 border border-red-500/40 px-3 py-1 text-xs font-bold text-red-300">
                <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
                المشكلات والتحديات الإنشائية
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {details.problems.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
              {details.problems.description}
            </p>

            {/* Risks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {details.problems.risks.map((risk, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-slate-200 flex items-start gap-3"
                >
                  <span className="h-2 w-2 rounded-full bg-red-400 shrink-0 mt-2" />
                  <span>{risk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Applied Engineering Solution System (منظومة الحلول والخطوات المتبعة) ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-right">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 border border-teal-500/40 px-3 py-1 text-xs font-bold text-teal-300 mb-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" />
              المنظومة الهندسية المتبعة
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {details.solutionSystem.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 max-w-3xl">
              {details.solutionSystem.description}
            </p>
          </div>

          {/* Applied Materials Badges */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 ml-2">المواد والمواصفات المستعملة:</span>
            {details.solutionSystem.appliedMaterials.map((mat, i) => (
              <span
                key={i}
                className="rounded-xl border border-white/10 bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-sky-300 backdrop-blur-md"
              >
                ✓ {mat}
              </span>
            ))}
          </div>

          {/* Step-by-Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.solutionSystem.steps.map((st) => (
              <LiquidCard key={st.stepNumber} glowColor="sky" className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-xs font-black text-white shadow-md">
                      {st.stepNumber}
                    </span>
                    <span className="text-[10px] font-bold text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      مرحلة معتمدة
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                </div>
              </LiquidCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Field Media Showcase (معرض الصور الميدانية الحقيقية) ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-brand-400 block mb-1">
                معرض المعاينة الميدانية المصورة
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                صور حقيقية لمراحل تنفيذ {category.name}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.galleryImages.map((imgItem, idx) => (
              <div key={idx} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <ProtectedImage
                    src={imgItem.url}
                    alt={imgItem.caption}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    showWatermark={true}
                  />
                </div>
                <div className="p-3.5 bg-slate-900/90 border-t border-white/5">
                  <p className="text-xs font-semibold leading-relaxed text-slate-200 line-clamp-2">
                    {imgItem.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Protected Video Player Section (الفيديو التوثيقي المباشر) ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-300 mb-2">
              <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
              فيديو التغطية الميدانية المباشرة
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {details.video.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2">
              {details.video.description}
            </p>
          </div>

          <ProtectedVideo
            src={details.video.src}
            poster={details.video.poster}
            title={details.video.title}
            className="w-full aspect-video shadow-2xl"
            autoPlay={false}
            controls={true}
            showWatermark={true}
          />
        </div>
      </section>

      {/* ── 7. Tabbed Content (Projects & Articles) ──────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 border-b border-white/10 pb-5">
            <div>
              <span className="text-xs font-bold text-sky-400 block mb-1">
                المشاريع المنفذة والمقالات
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                نماذج من أعمالنا ومقالات الـ SEO الفنية
              </h2>
            </div>

            <div className="flex items-center rounded-2xl bg-slate-900 p-1.5 border border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab("projects")}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                  activeTab === "projects"
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg"
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
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FileText className="h-4 w-4" />
                <span>المقالات الفنية ({category.articles.length})</span>
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "projects" && (
              <motion.div
                key="projects-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
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
                    </div>

                    <Link
                      href={`/services/${category.slug}/projects/${proj.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600/20 border border-blue-500/30 py-2.5 text-xs font-black text-sky-200 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      <span>عرض تقرير المشروع والتفاصيل الكاملة</span>
                      <ArrowLeft className="h-3.5 w-3.5" />
                    </Link>
                  </LiquidCard>
                ))}
              </motion.div>
            )}

            {activeTab === "articles" && (
              <motion.div
                key="articles-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
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
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-2.5 text-xs font-bold text-white hover:bg-blue-600 transition-all"
                    >
                      <span>قراءة المقال الفني الكامل</span>
                      <ArrowLeft className="h-3.5 w-3.5" />
                    </Link>
                  </LiquidCard>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── 8. Interactive Cost Estimator ────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
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
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-6 py-3 text-xs font-black text-white shadow-lg shrink-0"
              >
                <MessageCircle className="h-4 w-4" />
                <span>تأكيد السعر وحجز المعاينة</span>
              </a>
            </div>
          </LiquidCard>
        </div>
      </section>

      {/* ── 9. SEO Accordion FAQ Section (الأسئلة الشائعة والمعلومات) ───── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-sky-300 mb-2">
              <HelpCircle className="h-3.5 w-3.5 text-sky-400" />
              الأسئلة الفنية والأجوبة المعتمدة
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              أسئلة شائعة حول {category.name} في الرياض
            </h2>
          </div>

          <div className="space-y-3">
            {details.seoFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 overflow-hidden text-right transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-right flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-sky-300 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-sky-400 font-mono text-lg">{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

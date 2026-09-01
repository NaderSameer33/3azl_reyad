"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Article } from "@/data/articlesData";
import { siteConfig } from "@/config/site";
import LiquidCard from "@/components/ui/LiquidCard";
import {
  Clock,
  Calendar,
  User,
  ShieldCheck,
  Phone,
  MessageCircle,
  Share2,
  Copy,
  Check,
  ChevronLeft,
  ChevronDown,
  BookOpen,
  ArrowLeft,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ArticleDetailClientProps {
  article: Article;
  relatedArticles: Article[];
}

export default function ArticleDetailClient({
  article,
  relatedArticles,
}: ArticleDetailClientProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  /* ── Scroll-spy for Table of Contents ────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      const headings = article.tableOfContents
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 140;

      for (let i = headings.length - 1; i >= 0; i--) {
        if (headings[i].offsetTop <= scrollPosition) {
          setActiveSection(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article.tableOfContents]);

  /* ── Copy Article Link ───────────────────────────────────────── */
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${article.title}\n${siteConfig.url}/articles/${article.slug}`
  )}`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${article.title}`
  )}&url=${encodeURIComponent(`${siteConfig.url}/articles/${article.slug}`)}`;

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
            <Link href="/articles" className="hover:text-white transition-colors">
              مكتبة المقالات
            </Link>
            <ChevronLeft className="h-3.5 w-3.5 opacity-50" />
            <span className="text-sky-300 font-bold truncate max-w-xs sm:max-w-md">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* ── Main Article Layout ──────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* ── Main Reading Content Column (8 cols) ── */}
          <article className="lg:col-span-8">
            {/* Meta header */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
              <span className="rounded-full bg-sky-500/15 border border-sky-400/30 px-3 py-1 text-sky-300 font-bold">
                {article.categoryName}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-slate-500" />
                {article.publishedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-slate-500" />
                {article.readingTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-snug mb-6">
              {article.title}
            </h1>

            {/* Author Card Box */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white font-bold shadow-md shadow-blue-500/30">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white">
                    {article.author.name}
                  </h3>
                  <span className="text-xs text-teal-300 font-semibold block">
                    {article.author.role}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {article.author.credentials}
                  </span>
                </div>
              </div>

              {/* Share actions */}
              <div className="flex items-center gap-2 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/10">
                <a
                  href={whatsappShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-emerald-600/20 border border-emerald-500/30 hover:bg-emerald-600 p-2 text-emerald-300 hover:text-white transition-colors"
                  aria-label="مشاركة عبر واتساب"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href={twitterShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-sky-500/20 border border-sky-400/30 hover:bg-sky-500 p-2 text-sky-300 hover:text-white transition-colors"
                  aria-label="مشاركة عبر إكس (تويتر)"
                >
                  <Share2 className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="rounded-xl bg-white/5 border border-white/15 hover:bg-white/15 p-2 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold px-3"
                  aria-label="نسخ الرابط"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400">تم النسخ</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>نسخ الرابط</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Article Content Render */}
            <div
              className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Embedded Conversion CTA Card */}
            <div className="my-10 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 border border-sky-400/30 p-6 sm:p-8 text-right shadow-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 px-3 py-0.5 text-xs font-bold text-sky-300 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                معاينة واستشارة موقع مجانية
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                هل تحتاج مهندساً مختصاً لفحص سطح منزلك أو خزانك بالرياض؟
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                فريقنا الهندسي في شركة المعمورة مستعد لمعاينة الموقع وتقديم التقرير الفني الشامل وعقد الضمان الموثق.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-6 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>تواصل مع المهندس المختص عبر واتساب</span>
                </a>

                <a
                  href={`tel:${siteConfig.phone.primary}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-slate-900/90 hover:bg-white/10 px-5 py-3.5 text-xs sm:text-sm font-bold text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-sky-400" />
                  <span>اتصال هاتفي: {siteConfig.phone.display.primary}</span>
                </a>
              </div>
            </div>

            {/* ── Frequently Asked Questions Accordion ── */}
            {article.faqs.length > 0 && (
              <div className="my-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="h-5 w-5 text-sky-400" />
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    الأسئلة الشائعة حول {article.categoryName}
                  </h3>
                </div>

                <div className="space-y-3">
                  {article.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-white/10 bg-slate-900/70 overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaqIndex(isOpen ? null : idx)
                          }
                          className="w-full flex items-center justify-between p-4 sm:p-5 text-right font-black text-xs sm:text-sm text-white hover:bg-white/5 transition-colors"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`h-4 w-4 text-sky-400 transition-transform duration-200 shrink-0 mr-2 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5"
                            >
                              {faq.answer}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Keyword Tags */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-bold text-slate-400 block mb-2.5">
                الكلمات المفتاحية والموضوعات ذات الصلة:
              </span>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-xl bg-slate-900 border border-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* ── Sticky Sidebar Column (4 cols) ── */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Sticky Table of Contents */}
            <LiquidCard glowColor="sky" className="p-6">
              <div className="flex items-center gap-2 text-xs font-black text-sky-300 uppercase tracking-wider mb-4 border-b border-white/10 pb-3">
                <BookOpen className="h-4 w-4 text-sky-400" />
                <span>فهرس ومحاور الدليل</span>
              </div>

              <nav aria-label="فهرس المقال" className="space-y-2">
                {article.tableOfContents.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-xs font-bold py-1.5 px-2.5 rounded-xl transition-all ${
                        isActive
                          ? "bg-sky-500/20 text-sky-300 border-r-2 border-sky-400 font-black"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.text}
                    </a>
                  );
                })}
              </nav>
            </LiquidCard>

            {/* Related Articles in Hub */}
            <LiquidCard glowColor="teal" className="p-6">
              <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-3">
                شروحات وأدلة فنية أخرى:
              </h4>

              <div className="space-y-4">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    className="rounded-xl bg-slate-950/80 border border-white/5 p-3 hover:border-sky-400/30 transition-colors"
                  >
                    <span className="text-[10px] text-teal-300 font-bold block mb-1">
                      {rel.categoryName}
                    </span>
                    <h5 className="text-xs font-bold text-white hover:text-sky-300 transition-colors mb-2 line-clamp-2">
                      <Link href={`/articles/${rel.slug}`}>{rel.title}</Link>
                    </h5>
                    <Link
                      href={`/articles/${rel.slug}`}
                      className="text-[11px] text-sky-300 font-bold inline-flex items-center gap-1 hover:underline"
                    >
                      <span>قراءة الدليل</span>
                      <ArrowLeft className="h-3 w-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </LiquidCard>
          </aside>
        </div>
      </div>
    </div>
  );
}

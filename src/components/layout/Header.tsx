"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getAllServiceCategories } from "@/data/servicesData";
import {
  Phone,
  Menu,
  X,
  Droplets,
  CalendarCheck,
  AlertTriangle,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronDown,
  Thermometer,
  Waves,
  Home,
  Zap,
  ArrowLeft,
  FileText,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const iconMap = {
  Thermometer,
  Waves,
  Droplets,
  Home,
  Zap,
};

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "مكتبة المقالات", href: "/articles" },
  { label: "معرض المشاريع", href: "/projects" },
  { label: "حاسبة التكلفة", href: "/#calculator" },
  { label: "قبل وبعد", href: "/#before-after" },
  { label: "آراء العملاء", href: "/#testimonials" },
  { label: "اتصل بنا", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string>("foam-insulation");
  const [activeSection, setActive] = useState("/");
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const categories = getAllServiceCategories();
  const hoveredCategory =
    categories.find((c) => c.slug === hoveredCategorySlug) || categories[0];

  /* ── Scroll listener ─────────────────────────────────────────── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sectionIds = navLinks
      .map((l) => l.href.replace("/#", ""))
      .filter((id) => id !== "/" && !id.startsWith("/projects"));

    let current = "/";
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 140) {
        current = `/#${id}`;
      }
    }
    if (window.location.pathname.startsWith("/projects")) {
      current = "/projects";
    }
    if (window.location.pathname.startsWith("/services")) {
      current = "/services";
    }
    setActive(current);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ── Mega Menu Hover Handlers with Delay ─────────────────────── */
  const handleMouseEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 180);
  };

  /* ── Close mobile menu on desktop resize ─────────────────────── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setMegaMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Prevent body scroll when mobile menu is open ────────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.05, delayChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 right-0 left-0 z-[60]"
      >
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "border-b border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-black/50 py-1"
              : "bg-gradient-to-b from-slate-950/95 via-slate-950/70 to-slate-950/40 py-2"
          }`}
        >
        {/* ── Emergency Ribbon (Top Micro-Bar) ─────────────────── */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-blue-400/20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 text-xs text-white/95 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <div className="flex items-center gap-1.5 font-bold">
                <AlertTriangle className="h-3.5 w-3.5 text-sky-300 shrink-0" aria-hidden="true" />
                <span className="text-sky-200">طوارئ 24/7 داخل الرياض</span>
              </div>
              <span className="hidden sm:inline text-slate-300 text-[11px]">
                — فريق فني معتمد واستجابة فورية بأحدث الأجهزة
              </span>
            </div>

            <a
              href={`tel:${siteConfig.phone.primary}`}
              dir="ltr"
              className="inline-flex items-center gap-1.5 font-extrabold tracking-wide text-white hover:text-sky-300 transition-colors"
              aria-label={`اتصل بنا: ${siteConfig.phone.display.primary}`}
            >
              <Phone className="h-3 w-3 text-sky-400" />
              <span>{siteConfig.phone.display.primary}</span>
            </a>
          </div>
        </div>

        {/* ── Main Nav Row ──────────────────────────────────────── */}
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0"
              aria-label={`${siteConfig.name.short.ar} — الصفحة الرئيسية`}
            >
              <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform duration-200 shrink-0">
                <Droplets className="h-4 w-4 sm:h-5 sm:w-5 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col text-right truncate">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm sm:text-base font-black text-white tracking-tight truncate">{siteConfig.name.short.ar}</span>
                  <span className="rounded-full bg-sky-500/20 border border-sky-400/30 px-1.5 py-0.2 text-[9px] font-bold text-sky-300 hidden sm:inline-block">
                    معتمد
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 hidden xs:block truncate">
                  كشف تسربات • عزل أسطح بالرياض
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links with Services Mega-Menu Trigger */}
            <nav
              className="hidden lg:flex items-center gap-1 rounded-full bg-white/5 border border-white/10 p-1 backdrop-blur-md"
              aria-label="التنقل الرئيسي"
            >
              <Link
                href="/"
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeSection === "/"
                    ? "text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {activeSection === "/" && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-md shadow-blue-500/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">الرئيسية</span>
              </Link>

              {/* ── Mega Menu Trigger: "خدمات العزل والكشف" ── */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setMegaMenuOpen((v) => !v)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    megaMenuOpen || activeSection === "/services"
                      ? "text-white bg-blue-600/30 border border-blue-400/30"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  aria-expanded={megaMenuOpen}
                  aria-haspopup="true"
                >
                  <span>خدمات العزل والكشف</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      megaMenuOpen ? "rotate-180 text-sky-300" : "opacity-60"
                    }`}
                  />
                </button>

                {/* ── Desktop Mega Menu Dropdown Container ── */}
                <AnimatePresence>
                  {megaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute right-0 top-full pt-3 w-[780px] z-50"
                    >
                      <div className="rounded-3xl border border-white/15 bg-slate-950/95 p-6 backdrop-blur-2xl shadow-2xl shadow-black/80 text-right grid grid-cols-12 gap-6 overflow-hidden">
                        {/* Right Col (7 cols): List of 5 Categories */}
                        <div className="col-span-7 space-y-1.5">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3 px-2">
                            اختر التخصص المطلوب لاستعراض المواصفات والمشاريع
                          </span>

                          {categories.map((cat) => {
                            const IconComponent =
                              iconMap[cat.iconName as keyof typeof iconMap] || Droplets;
                            const isHovered = hoveredCategorySlug === cat.slug;

                            return (
                              <Link
                                key={cat.id}
                                href={`/services/${cat.slug}`}
                                onMouseEnter={() => setHoveredCategorySlug(cat.slug)}
                                onClick={() => setMegaMenuOpen(false)}
                                className={`group flex items-start gap-3.5 rounded-2xl p-3 transition-all duration-200 ${
                                  isHovered
                                    ? "bg-slate-900 border border-sky-400/40 shadow-lg shadow-sky-500/10"
                                    : "hover:bg-white/5 border border-transparent"
                                }`}
                              >
                                <div
                                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform ${
                                    isHovered
                                      ? "bg-gradient-to-tr from-blue-600 to-sky-500 text-white shadow-md shadow-sky-500/30 scale-105"
                                      : "bg-slate-900 text-slate-300"
                                  }`}
                                >
                                  <IconComponent className="h-5 w-5" />
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1 mb-0.5">
                                    <h4 className="text-xs font-black text-white group-hover:text-sky-300 transition-colors truncate">
                                      {cat.name}
                                    </h4>
                                    <span className="text-[9px] font-bold text-teal-300 rounded bg-teal-500/15 px-1.5 py-0.2 shrink-0">
                                      {cat.badge}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-400 leading-snug line-clamp-1">
                                    {cat.shortDescription}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Left Col (5 cols): Live Preview Sub-panel */}
                        <div className="col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-md text-right">
                          <div>
                            <span className="text-[10px] font-black text-sky-400 uppercase tracking-wider block mb-1">
                              معاينة سريعة للقسم:
                            </span>
                            <h4 className="text-sm font-black text-white mb-2">
                              {hoveredCategory.name}
                            </h4>
                            <p className="text-[11px] text-slate-300 leading-relaxed mb-4 line-clamp-3">
                              {hoveredCategory.longDescription}
                            </p>

                            {/* Technical Specs Preview */}
                            <div className="rounded-xl bg-slate-950/80 border border-white/5 p-2.5 mb-3 text-[10px] space-y-1 text-slate-300">
                              <div className="flex justify-between">
                                <span className="text-slate-400">الضمان المعتمد:</span>
                                <strong className="text-white">
                                  {hoveredCategory.technicalSpecs.warrantyYears} سنة
                                </strong>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">جهة الاعتماد:</span>
                                <strong className="text-teal-300 truncate max-w-[150px]">
                                  {hoveredCategory.technicalSpecs.approvalBody}
                                </strong>
                              </div>
                            </div>
                          </div>

                          <Link
                            href={`/services/${hoveredCategory.slug}`}
                            onClick={() => setMegaMenuOpen(false)}
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 py-2.5 text-xs font-black text-white shadow-md transition-all hover:scale-105"
                          >
                            <span>استكشف مشاريع ومقالات القسم</span>
                            <ArrowLeft className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-md shadow-blue-500/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Direct Action CTAs */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Immediate Call Button */}
              <a
                href={`tel:${siteConfig.phone.primary}`}
                id="header-call-btn"
                className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-slate-900/80 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:border-sky-400/80 hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] backdrop-blur px-3.5 py-2 text-xs font-bold text-slate-200 transition-all duration-300 group/btn"
                aria-label="اتصال فوري"
              >
                <Phone className="h-3.5 w-3.5 text-sky-400 group-hover/btn:text-white group-hover/btn:scale-110 transition-all duration-300" aria-hidden="true" />
                <span>اتصال فوري</span>
              </a>

              {/* Book Inspection WhatsApp Button */}
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                id="header-inspection-btn"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-2.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-extrabold text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-105 shrink-0"
              >
                <CalendarCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                <span>طلب معاينة</span>
              </a>

              {/* Mobile Menu Toggle — Always visible on left */}
              <button
                id="mobile-menu-toggle"
                className="lg:hidden flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={menuOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {menuOpen ? (
                      <X className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Menu className="h-5 w-5" aria-hidden="true" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* ── Mobile Fullscreen Menu Drawer ────────────────────── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="القائمة المتنقلة"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden fixed inset-x-0 top-[82px] sm:top-[90px] bottom-0 z-[55] flex flex-col bg-slate-950/98 backdrop-blur-2xl border-t border-white/10 p-5 sm:p-6 overflow-y-auto overscroll-contain pb-32"
            >
              {/* Emergency Banner inside mobile menu */}
              <div className="mb-6 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 border border-blue-400/30 p-4 text-right">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-sky-400" />
                  <span className="text-xs font-bold text-white">طوارئ كشف التسربات بالرياض</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  فريقنا الهندسي جاهز للتحرك الفوري لمعاينة سطحك أو كشف التسريب بدون تكسير.
                </p>
              </div>

              {/* Links list & Accordion for Categories */}
              <nav className="flex flex-col gap-2 text-right">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-white/80 hover:bg-white/10"
                >
                  <span>الرئيسية</span>
                  <ChevronLeft className="h-4 w-4 opacity-50" />
                </Link>

                {/* Mobile Services Accordion */}
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-bold text-white hover:bg-white/5 transition-colors"
                  >
                    <span className="flex items-center gap-2 text-sky-300">
                      <Sparkles className="h-4 w-4" />
                      <span>خدمات العزل والكشف المعتمدة</span>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileServicesOpen ? "rotate-180 text-sky-300" : "opacity-60"
                      }`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="p-3 pt-0 space-y-2 border-t border-white/5">
                      {categories.map((cat) => (
                        <div
                          key={cat.id}
                          className="rounded-xl bg-slate-950/80 p-2.5 border border-white/5"
                        >
                          <Link
                            href={`/services/${cat.slug}`}
                            onClick={() => setMenuOpen(false)}
                            className="block font-black text-xs text-white mb-1.5 hover:text-sky-300"
                          >
                            {cat.name}
                          </Link>
                          <div className="flex items-center gap-3 text-[10px] text-slate-400">
                            <Link
                              href={`/services/${cat.slug}#projects`}
                              onClick={() => setMenuOpen(false)}
                              className="hover:text-teal-300 underline"
                            >
                              المشاريع المنفذة ({cat.projects.length})
                            </Link>
                            <span>•</span>
                            <Link
                              href={`/services/${cat.slug}#articles`}
                              onClick={() => setMenuOpen(false)}
                              className="hover:text-teal-300 underline"
                            >
                              المقالات والشروحات ({cat.articles.length})
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-white/80 hover:bg-white/10"
                  >
                    <span>{link.label}</span>
                    <ChevronLeft className="h-4 w-4 opacity-50" />
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phone.primary}`}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-600/40"
                  onClick={() => setMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  <span>اتصال فوري: {siteConfig.phone.display.primary}</span>
                </a>

                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/30"
                  onClick={() => setMenuOpen(false)}
                >
                  <CalendarCheck className="h-4 w-4" />
                  <span>طلب معاينة فورية عبر واتساب</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

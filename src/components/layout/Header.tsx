"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Menu, X, Droplets, CalendarCheck, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "الرئيسية",       href: "/"              },
  { label: "خدماتنا",        href: "/#services"     },
  { label: "حاسبة التكلفة", href: "/#calculator"   },
  { label: "قبل وبعد",      href: "/#before-after"  },
  { label: "آراء العملاء",  href: "/#testimonials"  },
  { label: "اتصل بنا",      href: "/#contact"       },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActive] = useState("/");

  /* ── Scroll listener ─────────────────────────────────────────── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24);

    // Highlight active nav link based on current scroll position
    const sectionIds = navLinks
      .map((l) => l.href.replace("/#", ""))
      .filter((id) => id !== "/");

    let current = "/";
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = `/#${id}`;
    }
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ── Close mobile menu on desktop resize ─────────────────────── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Prevent body scroll when mobile menu is open ────────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-surface-950/80 backdrop-blur-md shadow-xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        {/* ── Emergency ribbon (top micro-bar) ─────────────────── */}
        <div className="gradient-brand">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 text-xs text-white/90 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1.5">
              <AlertTriangle className="h-3 w-3 text-gold-300 shrink-0" aria-hidden="true" />
              <span className="font-semibold text-gold-200">طوارئ 24/7 داخل الرياض</span>
              <span className="hidden sm:inline text-white/60">— نصل إليك في أقل من ساعتين</span>
            </div>
            <a
              href={`tel:${siteConfig.phone.primary}`}
              dir="ltr"
              className="font-bold tracking-wide text-white hover:text-gold-300 transition-colors"
              aria-label={`اتصل بنا: ${siteConfig.phone.display.primary}`}
            >
              {siteConfig.phone.display.primary}
            </a>
          </div>
        </div>

        {/* ── Main nav row ──────────────────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
              aria-label="درع الخليج — الصفحة الرئيسية"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-brand shadow-md shadow-blue-brand-600/40 group-hover:shadow-blue-brand-500/60 transition-shadow">
                <Droplets className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-sm font-extrabold text-white drop-shadow">درع الخليج</span>
                <span className="text-[9px] font-medium text-gold-400 tracking-wider">
                  كشف تسربات • عزل أسطح
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="التنقل الرئيسي"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-white/65 hover:text-white hover:bg-white/8"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {/* Active underline indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-lg bg-white/10"
                        style={{ originX: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 36 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Immediate call */}
              <a
                href={`tel:${siteConfig.phone.primary}`}
                id="header-call-btn"
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 hover:bg-white/15 backdrop-blur px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40"
                aria-label="اتصال فوري"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                اتصال فوري
              </a>

              {/* Book inspection */}
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                id="header-inspection-btn"
                className="hidden sm:inline-flex items-center gap-2 rounded-full gradient-brand hover:opacity-90 px-4 py-2 text-sm font-bold text-white shadow-md shadow-blue-brand-600/30 hover:shadow-blue-brand-500/50 transition-all duration-200"
              >
                <CalendarCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                طلب معاينة
              </a>

              {/* Mobile menu toggle */}
              <button
                id="mobile-menu-toggle"
                className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-white/18 text-white transition-colors"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={menuOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{    rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {menuOpen
                      ? <X    className="h-5 w-5" aria-hidden="true" />
                      : <Menu className="h-5 w-5" aria-hidden="true" />
                    }
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile fullscreen menu ────────────────────────────── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="قائمة التنقل"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden border-t border-white/10 bg-surface-950/95 backdrop-blur-xl"
            >
              <nav
                className="flex flex-col gap-0.5 px-4 py-4"
                aria-label="قائمة التنقل المحمول"
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                        activeSection === link.href
                          ? "bg-blue-brand-600/20 text-white"
                          : "text-white/75 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA row */}
              <div className="flex gap-3 px-4 pb-5 pt-1">
                <a
                  href={`tel:${siteConfig.phone.primary}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 py-3 text-sm font-bold text-white transition-colors hover:bg-white/18"
                  onClick={() => setMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  اتصال فوري
                </a>
                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full gradient-brand py-3 text-sm font-bold text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  طلب معاينة
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

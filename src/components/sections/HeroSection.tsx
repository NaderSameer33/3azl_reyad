"use client";

import { motion, type Variants } from "framer-motion";
import { siteConfig } from "@/config/site";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  ShieldCheck,
  Droplets,
  Zap,
  CheckCircle2,
  Phone,
  CalendarCheck,
  MessageCircle,
  Clock,
  Sparkles,
  FileCheck2,
  Cpu,
  Flame,
  ChevronDown,
  MapPin,
  Award,
  ArrowLeft,
  Headphones,
} from "lucide-react";

/* ─── Animation Variants ─────────────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardFloatingVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── 4 Verified Trust Badges ────────────────────────────────────────────── */
const trustBadges = [
  {
    icon: FileCheck2,
    title: "تقارير معتمدة لشركة المياه الوطنية",
    desc: "إسقاط وتعديل الفواتير المرتفعة رسمياً",
    color: "from-blue-500/20 to-sky-500/20 text-sky-300 border-sky-400/30",
    iconColor: "text-sky-400",
  },
  {
    icon: Cpu,
    title: "أجهزة كشف ألمانية بدون تكسير",
    desc: "فحص بالنيتروجين والموجات الكهروسمعية",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-400/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: Flame,
    title: "عزل فوم معتمد من شركة الكهرباء",
    desc: "مطابق لكود البناء السعودي SBC 601",
    color: "from-indigo-500/20 to-blue-500/20 text-blue-300 border-blue-400/30",
    iconColor: "text-blue-400",
  },
  {
    icon: ShieldCheck,
    title: "ضمان رسمي معتمد حتى 15 عاماً",
    desc: "عقد موثق مع متابعة وصيانة دورية مجانية",
    color: "from-teal-500/20 to-emerald-500/20 text-teal-300 border-teal-400/30",
    iconColor: "text-teal-400",
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden bg-slate-950 pt-24 sm:pt-28 pb-12 md:pb-16 text-white select-none"
      aria-label="قسم البداية الرئيسي"
    >
      {/* ─── 1. Background Visual Effects ──────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Radial Lighting Blooms */}
        <div className="absolute -top-32 right-10 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute top-1/3 -left-32 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[130px]" />
        <div className="absolute -bottom-20 right-1/3 h-[350px] w-[350px] rounded-full bg-teal-500/10 blur-[110px]" />

        {/* Ambient Subtle Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Floating Droplet Deco */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[5%] opacity-15 hidden xl:block"
        >
          <Droplets className="h-24 w-24 text-blue-400" />
        </motion.div>
      </div>

      {/* ─── 2. Main Two-Column Layout (Compact Spacing & 2-Line H1) ─────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* ── Right Column (7 cols): Heading, Detailed Pitch, CTAs ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col text-right items-start"
          >
            {/* Live Status Pill */}
            <motion.div variants={itemVariants} className="mb-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-slate-900/90 px-3.5 py-1 text-xs font-bold text-blue-200 backdrop-blur-xl shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>طوارئ 24/7 في الرياض</span>
                <span className="text-white/30">•</span>
                <span className="text-sky-300 font-bold">معاينة وفحص فوري بدون تكسير</span>
              </div>
            </motion.div>

            {/* H1 Main Heading: Perfectly structured on 2 clean lines */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black text-white leading-[1.3] tracking-tight mb-3.5"
            >
              <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">
                حلول كشف تسربات المياه
              </span>
              <br className="hidden sm:inline" />{" "}
              <span className="bg-gradient-to-r from-teal-300 via-emerald-200 to-sky-300 bg-clip-text text-transparent">
                وعزل الأسطح المعتمدة بالرياض
              </span>
            </motion.h1>

            {/* Detailed Description */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm md:text-[15px] text-slate-300 leading-relaxed mb-4 max-w-2xl"
            >
              شركة <strong className="text-white font-black">درع الخليج</strong> تقدم منظومة متكاملة لحماية منزلك تشمل:{" "}
              <span className="text-sky-300 font-semibold">كشف التسربات بالأجهزة الألمانية بدون تكسير</span>،{" "}
              <span className="text-teal-300 font-semibold">عزل فوم بولي يوريثان حراري ومائي</span> معتمد من شركة الكهرباء لخفض الفاتورة 40%، و{" "}
              <span className="text-blue-300 font-semibold">عزل الخزانات والمسابح بالإيبوكسي الصحي</span> مع ضمان رسمي يصل إلى{" "}
              <span className="text-white font-black underline underline-offset-4 decoration-sky-400">15 عاماً</span>.
            </motion.p>

            {/* Feature Checklist Chips */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 mb-5 text-[11px] sm:text-xs font-semibold text-slate-300"
            >
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-emerald-400/60 hover:bg-emerald-500/20 hover:text-emerald-200 hover:shadow-[0_0_18px_rgba(52,211,153,0.35)] transition-all duration-300 px-3 py-1 cursor-default group/chip">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 group-hover/chip:scale-110 transition-transform" />
                <span>معتمدون لتقارير شركة المياه الوطنية</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-sky-400/60 hover:bg-sky-500/20 hover:text-sky-200 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] transition-all duration-300 px-3 py-1 cursor-default group/chip">
                <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 group-hover/chip:scale-110 transition-transform" />
                <span>مطابق لكود البناء السعودي SBC</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-teal-400/60 hover:bg-teal-500/20 hover:text-teal-200 hover:shadow-[0_0_18px_rgba(45,212,191,0.35)] transition-all duration-300 px-3 py-1 cursor-default group/chip">
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-400 group-hover/chip:scale-110 transition-transform" />
                <span>استجابة خلال ساعتين</span>
              </span>
            </motion.div>

            {/* 3 Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto"
            >
              {/* 1. Book Free Inspection */}
              <a
                href="#contact"
                id="hero-book-btn"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-sky-400 hover:to-blue-600 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] px-5 py-3 text-xs sm:text-sm font-black text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <CalendarCheck className="h-4 w-4" />
                <span>احجز معاينة مجانية الآن</span>
              </a>

              {/* 2. Instant WhatsApp Chat */}
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-400 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] px-5 py-3 text-xs sm:text-sm font-black text-white shadow-xl shadow-emerald-600/25 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <MessageCircle className="h-4 w-4" />
                <span>محادثة واتساب فورية</span>
              </a>

              {/* 3. Direct Phone Call */}
              <a
                href={`tel:${siteConfig.phone.primary}`}
                id="hero-phone-btn"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-slate-900/80 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:border-sky-400/80 hover:text-white hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] backdrop-blur-md px-4 py-3 text-xs sm:text-sm font-bold text-slate-200 transition-all duration-300 active:scale-95 group/herophone"
              >
                <Phone className="h-4 w-4 text-sky-400 group-hover/herophone:text-white group-hover/herophone:scale-110 transition-all duration-300" />
                <span dir="ltr">{siteConfig.phone.display.primary}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Left Column (5 cols): Animated Contact & Service Hub Container ── */}
          <motion.div
            variants={cardFloatingVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 p-5 sm:p-6 backdrop-blur-2xl shadow-2xl shadow-black/60 text-right overflow-hidden">
              {/* Glow Accent inside card */}
              <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />

              {/* Card Header & Live Dispatch Badge */}
              <div className="relative z-10 flex items-center justify-between gap-3 border-b border-white/10 pb-3.5 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 shadow-md">
                    <Headphones className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-black text-white">مركز خدمة ومعاينة الرياض</h2>
                    <span className="text-[10px] text-slate-400">فريق هندسي متخصص ومتاح الآن</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  استجابة فورية
                </span>
              </div>

              {/* Description inside Container */}
              <div className="relative z-10 mb-4 rounded-2xl bg-slate-950/60 border border-white/5 p-3.5 text-xs leading-relaxed text-slate-300">
                <p className="mb-1.5">
                  <strong className="text-sky-300">خدمة سريعة في كافة أحياء الرياض:</strong> نغطي (الملقا، النرجس، الياسمين، الصحافة، ظهرة لبن، الروضة، العليا) وباقي المناطق خلال أقل من ساعتين.
                </p>
                <div className="flex items-center gap-4 text-[10px] text-slate-400 pt-1.5 border-t border-white/5">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-sky-400" />
                    متاحون 24/7
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-blue-400" />
                    تغطية شاملة
                  </span>
                </div>
              </div>

              {/* Direct Fast-Action Contact Boxes */}
              <div className="relative z-10 space-y-2.5 mb-4">
                {/* 1. Phone Box */}
                <a
                  href={`tel:${siteConfig.phone.primary}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 p-3 hover:border-blue-400/40 hover:bg-slate-950 transition-all shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white group-hover:scale-105 transition-transform">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white">اتصال هاتفي مباشر</span>
                      <span dir="ltr" className="block text-xs font-extrabold text-sky-300 font-mono text-right">
                        {siteConfig.phone.display.primary}
                      </span>
                    </div>
                  </div>
                  <span className="rounded-lg bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-bold text-slate-300 group-hover:text-white transition-colors">
                    اتصل الآن ←
                  </span>
                </a>

                {/* 2. WhatsApp Box */}
                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 p-3 hover:border-emerald-500/40 hover:bg-slate-950 transition-all shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white group-hover:scale-105 transition-transform">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white">تواصل فوري عبر واتساب</span>
                      <span className="block text-[10px] text-slate-400">إرسال الموقع وحجز الموعد</span>
                    </div>
                  </div>
                  <span className="rounded-lg bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                    مراسلة ←
                  </span>
                </a>
              </div>

              {/* Bottom Card Summary Counter */}
              <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-white/10 text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
                  ضمان معتمد 10 - 15 سنة
                </span>
                <span className="flex items-center gap-1">
                  <AnimatedCounter from={0} to={3500} prefix="+" className="font-bold text-white" />
                  <span>عميل معزول</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── 3. Bottom 4 Verification Badges Grid ──────────────────────── */}
        <div className="mt-8 pt-6 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-right">
          {trustBadges.map((badge, idx) => (
            <motion.div
              key={badge.title}
              custom={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-slate-900/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${badge.color} border shadow-inner`}
                >
                  <badge.icon className={`h-5 w-5 ${badge.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xs font-black text-white group-hover:text-sky-300 transition-colors leading-tight mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 leading-snug">
                    {badge.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

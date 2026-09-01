"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getAllProjects } from "@/data/projectsData";
import HeroSection from "@/components/sections/HeroSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import CostCalculatorSection from "@/components/sections/CostCalculatorSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProjectCard from "@/components/projects/ProjectCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import LiquidCard from "@/components/ui/LiquidCard";
import {
  Droplets,
  Shield,
  Zap,
  CheckCircle2,
  Phone,
  Star,
  ChevronLeft,
  Thermometer,
  Waves,
  Home,
  Award,
  Clock,
  MapPin,
  CalendarCheck,
  ArrowLeft,
  Sparkles,
  Calculator,
  MessageCircle,
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Section Wrapper ──────────────────────────────────────────────────────────
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Services Data ────────────────────────────────────────────────────────────
const services = [
  {
    id: "leak-detection",
    icon: Droplets,
    color: "blue" as const,
    title: "كشف تسربات المياه",
    subtitle: "بدون تكسير بالأجهزة الألمانية",
    description:
      "نستخدم أحدث الأجهزة الصوتية والنيتروجين والكاميرات الحرارية لتحديد مكان التسرب بدقة تامة وإصدار تقرير معتمد لحل ارتفاع الفاتورة لدى شركة المياه.",
    features: ["كشف إلكتروني دقيق", "كاميرات حرارية FLIR", "تقرير معتمد لشركة المياه", "ضمان معتمد"],
    badge: "الأكثر طلباً بالرياض",
  },
  {
    id: "foam-insulation",
    icon: Thermometer,
    color: "teal" as const,
    title: "عزل فوم بولي يوريثان",
    subtitle: "عزل حراري ومائي ثنائي",
    description:
      "عزل متكامل بسماكة 4 سم وكثافة 45 كجم/م³ معتمد من شركة الكهرباء السعودية لخفض استهلاك المكيفات بنسبة 40% وحماية السطح تماماً من الأمطار.",
    features: ["خفض حرارة الأسقف 40%", "عزل مائي وحراري معاً", "معتمد لكود البناء السعودي", "ضمان 10-15 سنة"],
    badge: "الأوفر للكهرباء",
  },
  {
    id: "waterproofing",
    icon: Waves,
    color: "sky" as const,
    title: "العزل المائي للأسطح",
    subtitle: "رولات ممبرين وأغشية مطاطية",
    description:
      "حماية شاملة للأسطح الخرسانية والتجارية والمستودعات بالرولات البيتومينية المسلحة 4 ملم مع ضبط ميول الأمطار لضمان عدم ركود المياه نهائياً.",
    features: ["رولات 4 ملم مسلحة بالبوليستر", "ضبط ميول المزاريب", "مقاوم للأشعة فوق البنفسجية", "ضمان 12 سنة"],
    badge: null,
  },
  {
    id: "bathroom-leaks",
    icon: Home,
    color: "purple" as const,
    title: "عزل الخزانات والمسابح",
    subtitle: "إيبوكسي غذائي معتمد",
    description:
      "عزل الخزانات الأرضية والعلوية والمسابح بالإيبوكسي الصحي المعتمد لمياه الشرب مع معالجة التشققات الإنشائية ومنع اختراق المياه الجوفية.",
    features: ["إيبوكسي صحي معتمد", "معالجة التعشيش والشروخ", "عزل مسابح وحمامات قبل البلاط", "ضمان 10 سنوات"],
    badge: null,
  },
];

// ─── Stats Data ───────────────────────────────────────────────────────────────
const stats = [
  { value: 3500, prefix: "+", suffix: "", label: "مشروع ومنزل معزول بالرياض", icon: Star },
  { value: 10, prefix: "+", suffix: " سنوات", label: "سنوات خبرة متخصصة", icon: Award },
  { value: 24, prefix: "", suffix: "/7", label: "استجابة فورية وحالات طوارئ", icon: Clock },
  { value: 45, prefix: "+", suffix: " حي", label: "حي نخدمه في كافة أنحاء الرياض", icon: MapPin },
];

// ─── Why Us Data ──────────────────────────────────────────────────────────────
const whyUs = [
  {
    icon: Zap,
    title: "استجابة فورية سريعة",
    desc: "نصل إليك في غضون ساعتين من اتصالك في أي حي بمدينة الرياض.",
  },
  {
    icon: Shield,
    title: "ضمان رسمي معتمد",
    desc: "نقدم عقود ضمان رسمية وموثقة تصل إلى 15 سنة مع صيانة دورية مجانية.",
  },
  {
    icon: CheckCircle2,
    title: "كشف بدون أي تكسير",
    desc: "تقنيات النيتروجين والمجسات الصوتية تحدد مكان الكسر تحت البلاط بدقة.",
  },
  {
    icon: Award,
    title: "مهندسون وفنيون معتمدون",
    desc: "فريق هندسي مؤهل ومعتمد لتقارير شركة المياه الوطنية والشركة السعودية للكهرباء.",
  },
];

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const projects = getAllProjects().slice(0, 3);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════ */}
      <HeroSection />

      {/* ══════════════════════════════════════════
          2. STATS SECTION WITH LIQUID CARDS
      ══════════════════════════════════════════ */}
      <section className="bg-slate-900 border-b border-white/10 py-14" aria-label="إحصائيات الإنجاز">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            <LiquidCard glowColor="sky" className="p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 shadow-md">
                <Star className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white mb-1">
                <AnimatedCounter from={0} to={3500} prefix="+" duration={2.2} />
              </p>
              <p className="text-xs text-slate-300 font-medium">مشروع ومنزل معزول بالرياض</p>
            </LiquidCard>

            <LiquidCard glowColor="teal" className="p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 shadow-md">
                <Award className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-teal-300 mb-1">
                <AnimatedCounter from={0} to={10} prefix="+" suffix=" سنوات" duration={1.8} />
              </p>
              <p className="text-xs text-slate-300 font-medium">سنوات خبرة متخصصة</p>
            </LiquidCard>

            <LiquidCard glowColor="emerald" className="p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 shadow-md">
                <Clock className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">
                24/7
              </p>
              <p className="text-xs text-slate-300 font-medium">استجابة فورية وحالات طوارئ</p>
            </LiquidCard>

            <LiquidCard glowColor="purple" className="p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 shadow-md">
                <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-sky-300 mb-1">
                <AnimatedCounter from={0} to={45} prefix="+" suffix=" حي" duration={2} />
              </p>
              <p className="text-xs text-slate-300 font-medium">نخدم كافة أحياء الرياض</p>
            </LiquidCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. SERVICES SECTION WITH LIQUID CARDS
      ══════════════════════════════════════════ */}
      <section id="services" className="py-20 md:py-28 bg-surface-950 text-white relative" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <span className="inline-block rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-300 mb-3">
              حلول متكاملة معتمدة بالرياض
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              خدماتنا <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-teal-300 bg-clip-text text-transparent">المتخصصة والمعتمدة</span>
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-300">
              نطبق أعلى المواصفات الهندسية وأحدث الأجهزة الإلكترونية لحماية المنازل والمنشآت من مخاطر التسرب والحرارة.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((srv) => (
              <LiquidCard key={srv.id} glowColor={srv.color} className="p-8 text-right flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 shadow-md">
                    <srv.icon className="h-7 w-7 text-white" />
                  </div>

                  {srv.badge && (
                    <span className="rounded-full bg-sky-500/15 border border-sky-400/30 px-3 py-1 text-[11px] font-black text-sky-300">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-1">{srv.title}</h3>
                <span className="text-xs font-bold text-teal-300 mb-3 block">{srv.subtitle}</span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">{srv.description}</p>

                <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/10 mb-6 text-xs text-slate-200">
                  {srv.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-2">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3 text-xs font-bold text-white hover:bg-blue-600 hover:border-blue-500 transition-all"
                  >
                    <span>طلب الخدمة ومعاينة الموقع</span>
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </a>
                </div>
              </LiquidCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. BEFORE & AFTER INTERACTIVE SECTION (NEW)
      ══════════════════════════════════════════ */}
      <BeforeAfterSection />

      {/* ══════════════════════════════════════════
          5. PROJECTS SHOWCASE SECTION
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-slate-900 border-t border-b border-white/10 text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-right">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-300 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                معرض الأعمال المنفذة حديثاً بالرياض
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                نماذج حية من <span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">مشاريعنا في أحياء الرياض</span>
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                شاهد توثيقنا الميداني الدقيق لمشاريع الفلل والعمائر والمجمعات السكنية مع المواصفات والتقارير الفنية المعتمدة.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-500 px-6 py-3.5 text-xs font-extrabold text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-105 self-start md:self-auto shrink-0"
            >
              <span>استعرض كافة المشاريع الـ 1,500+</span>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. INSTANT COST CALCULATOR SECTION (NEW TILES)
      ══════════════════════════════════════════ */}
      <CostCalculatorSection />

      {/* ══════════════════════════════════════════
          7. WHY US SECTION WITH LIQUID CARDS
      ══════════════════════════════════════════ */}
      <section id="why-us" className="py-20 bg-slate-900 border-t border-b border-white/10 text-white" aria-labelledby="why-us-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Text side */}
            <AnimatedSection className="text-right">
              <span className="text-xs font-bold text-sky-400 block mb-2 uppercase tracking-wider">
                معايير الجودة والضمان
              </span>
              <h2 id="why-us-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                لماذا نحن الخيار الأول <span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">لعزل الأسطح والتسربات بالرياض؟</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                نلتزم بتقديم حلول هندسية جذرية تنهي مشاكل التسرب وتقضي على حرارة الصيف الشديدة دون أي تكسير عشوائي وبضمان رسمي موثق.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {whyUs.map((item) => (
                  <LiquidCard
                    key={item.title}
                    glowColor="blue"
                    className="p-4 text-right flex items-start gap-3.5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 shadow-md">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </LiquidCard>
                ))}
              </div>
            </AnimatedSection>

            {/* Visual Stats side */}
            <AnimatedSection>
              <LiquidCard glowColor="teal" className="p-8 text-right bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-950 border-blue-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400 text-slate-950 font-black">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-white">ضمان شامل معتمد 10 - 15 سنة</h3>
                    <p className="text-xs text-slate-300">شهادات رسمية لشركة المياه والكهرباء</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {[
                    { label: "معدل نجاح الكشف بدون تكسير", value: 100 },
                    { label: "نسبة توفير استهلاك التكييف (عزل الفوم)", value: 42 },
                    { label: "الالتزام بالمواعيد وسرعة الاستجابة", value: 98 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1.5 font-bold">
                        <span className="text-white/80">{item.label}</span>
                        <span className="text-sky-300">
                          <AnimatedCounter from={0} to={item.value} suffix="%" duration={1.8} />
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          style={{ width: `${item.value}%` }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-1000"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-emerald-500/15 border border-emerald-500/30 p-4 flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">اعتماد رسمي للتقارير</p>
                    <p className="text-[11px] text-slate-300">مؤهلون لحذف فواتير المياه المرتفعة لدى NWC</p>
                  </div>
                </div>
              </LiquidCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. TESTIMONIALS SECTION (CUSTOMER REVIEWS)
      ══════════════════════════════════════════ */}
      <TestimonialsSection />

      {/* ══════════════════════════════════════════
          9. CONTACT & BOOKING SECTION
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-20 bg-surface-950 text-white text-right" aria-label="حجز موعد معاينة">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <LiquidCard glowColor="sky" className="p-8">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-2">
                  حجز موعد فحص فوري
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  احجز معاينة مجانية لسطح منزلك في الرياض
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
                  املأ النموذج وسيتواصل معك مهندس مختص لتأكيد الموعد وتحديد أنسب الحلول بدون أي التزام مالي.
                </p>

                {formSubmitted ? (
                  <div className="rounded-2xl bg-emerald-500/20 border border-emerald-500/40 p-8 text-center">
                    <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-white mb-1">تم استلام طلب المعاينة بنجاح!</h4>
                    <p className="text-xs text-slate-300">
                      سيتواصل معك فريقنا الهندسي خلال أقل من ساعتين لترتيب الزيارة الميدانية.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white mb-1.5">الاسم الكريم</label>
                        <input
                          type="text"
                          required
                          placeholder="أدخل اسمك"
                          className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-xs text-white placeholder-white/40 focus:border-blue-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-white mb-1.5">رقم الجوال</label>
                        <input
                          type="tel"
                          required
                          dir="ltr"
                          placeholder="05XXXXXXXX"
                          className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-xs text-white placeholder-white/40 focus:border-blue-400 focus:outline-none text-right"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service-select" className="block text-xs font-bold text-white mb-1.5">نوع الخدمة</label>
                        <select
                          id="service-select"
                          aria-label="اختر نوع الخدمة"
                          required
                          defaultValue=""
                          className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-xs text-white focus:border-blue-400 focus:outline-none"
                        >
                          <option value="" disabled>اختر نوع الخدمة</option>
                          <option value="foam">عزل فوم بولي يوريثان</option>
                          <option value="waterproofing">عزل مائي للأسطح</option>
                          <option value="leak">كشف تسربات المياه بدون تكسير</option>
                          <option value="tank">عزل وترميم خزانات المياه</option>
                          <option value="pool">عزل مسابح وحمامات</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-white mb-1.5">الحي في الرياض</label>
                        <input
                          type="text"
                          required
                          placeholder="مثال: الملقا، النرجس، الياسمين..."
                          className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-xs text-white placeholder-white/40 focus:border-blue-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/30 hover:from-blue-500 hover:to-blue-400 transition-all hover:scale-[1.01] mt-2"
                    >
                      إرسال طلب المعاينة المجانية الآن
                    </button>
                  </form>
                )}
              </LiquidCard>
            </div>

            {/* Direct Contact Info Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <LiquidCard glowColor="teal" className="p-7">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-2">
                  تواصل مباشر وسريع
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                  متاحون للرد وتلبية الطوارئ على مدار 24 ساعة
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  يمكنكم التواصل فوراً عبر تطبيق واتساب أو الاتصال الهاتفي للحصول على استجابة سريعة.
                </p>

                <div className="space-y-3">
                  <a
                    href={siteConfig.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 hover:border-emerald-500/50 transition-all"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-white">مراسلة فورية عبر واتساب</span>
                      <span className="block text-xs text-slate-400">رد خلال دقائق وتحديد الموعد</span>
                    </div>
                  </a>

                  <a
                    href={`tel:${siteConfig.phone.primary}`}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 hover:border-blue-400/50 transition-all"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-white">اتصال هاتفي مباشر</span>
                      <span dir="ltr" className="block text-xs text-sky-300 font-bold text-right font-mono">
                        {siteConfig.phone.display.primary}
                      </span>
                    </div>
                  </a>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-sky-400" />
                    <span>طوارئ 24/7 · استجابة سريعة في كافة أحياء الرياض</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-teal-400" />
                    <span>الرياض، المملكة العربية السعودية</span>
                  </div>
                </div>
              </LiquidCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

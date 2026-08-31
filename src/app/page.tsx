"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
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
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stagger = {
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
    color: "blue",
    title: "كشف تسربات المياه",
    subtitle: "بدون تكسير",
    description:
      "نستخدم أحدث الأجهزة الإلكترونية والكاميرات الحرارية لتحديد مكان التسرب بدقة تامة دون الحاجة لأي تكسير أو هدم.",
    features: ["كشف بالأجهزة الإلكترونية", "كاميرات حرارية متطورة", "تقرير مفصل بالموقع", "ضمان مكتوب"],
    badge: "الأكثر طلباً",
  },
  {
    id: "foam-insulation",
    icon: Thermometer,
    color: "gold",
    title: "عزل الأسطح بالفوم",
    subtitle: "بولي يوريثان عالي الكثافة",
    description:
      "عزل حراري ومائي متكامل بمادة البولي يوريثان عالية الكثافة يقلل من درجة حرارة المنزل ويحمي السطح من الأمطار والرطوبة.",
    features: ["خفض الحرارة 40%", "عزل مائي كامل", "خفيف الوزن ومتين", "ضمان 10 سنوات"],
    badge: "الأوفر توفيراً",
  },
  {
    id: "waterproofing",
    icon: Waves,
    color: "blue",
    title: "العزل المائي للأسطح",
    subtitle: "أغشية ولدائن",
    description:
      "حماية شاملة للسطح من مياه الأمطار والرطوبة باستخدام أحدث المواد العازلة المعتمدة دولياً مع ضمان يصل إلى 15 سنة.",
    features: ["أغشية بيتومينية", "مادة البيتومين المُعدَّل", "مقاوم للأشعة فوق البنفسجية", "ضمان 15 سنة"],
    badge: null,
  },
  {
    id: "bathroom-leaks",
    icon: Home,
    color: "gold",
    title: "كشف تسربات الحمامات",
    subtitle: "إصلاح بدون هدم",
    description:
      "تشخيص دقيق لتسربات الحمامات والمطابخ وإصلاحها فورياً بأحدث التقنيات دون الحاجة لهدم أي جزء من الجدران أو الأرضيات.",
    features: ["تشخيص دقيق 100%", "إصلاح فوري", "بدون تكسير أو هدم", "نظافة تامة بعد العمل"],
    badge: null,
  },
];

// ─── Stats Data ───────────────────────────────────────────────────────────────
const stats = [
  { value: "+3000", label: "عميل راضٍ", icon: Star },
  { value: "+10", label: "سنوات خبرة", icon: Award },
  { value: "24/7", label: "خدمة متواصلة", icon: Clock },
  { value: "+24", label: "حي نخدمه", icon: MapPin },
];

// ─── Why Us Data ──────────────────────────────────────────────────────────────
const whyUs = [
  {
    icon: Zap,
    title: "استجابة فورية",
    desc: "نصل إليك في غضون ساعتين من اتصالك في أي وقت",
  },
  {
    icon: Shield,
    title: "ضمان مكتوب",
    desc: "نقدم ضمان مكتوب على جميع أعمالنا حتى 15 سنة",
  },
  {
    icon: CheckCircle2,
    title: "بدون تكسير",
    desc: "تقنيات حديثة تكشف التسرب بدقة دون أي أضرار جانبية",
  },
  {
    icon: Award,
    title: "فريق متخصص",
    desc: "مهندسون وفنيون معتمدون بخبرة تزيد عن 10 سنوات",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-dark-hero"
        aria-label="القسم الرئيسي"
      >
        {/* Background decorative blobs */}
        <div
          className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-brand-500/20 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gold-500/15 blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-brand-600/10 blur-[140px]"
          aria-hidden="true"
        />

        {/* Floating water drop icon */}
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute top-24 left-[10%] opacity-20"
          aria-hidden="true"
        >
          <Droplets className="h-24 w-24 text-blue-brand-300" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute bottom-32 right-[8%] opacity-15"
          aria-hidden="true"
        >
          <Waves className="h-20 w-20 text-gold-300" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-brand-400/30 bg-blue-brand-500/10 px-4 py-2 text-sm font-medium text-blue-brand-200 backdrop-blur mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-wa-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wa-green-500" />
            </span>
            متاح الآن · خدمة طوارئ 24/7 بالرياض
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] mb-6"
          >
            <span className="shimmer-text">كشف تسربات المياه</span>
            <br />
            <span className="text-white/90">وعزل الأسطح</span>
            <br />
            <span className="gradient-text-gold">بالرياض</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-2xl text-lg sm:text-xl text-white/65 leading-relaxed mb-10"
          >
            شركة درع الخليج — خبرة أكثر من <strong className="text-white/90">10 سنوات</strong> في كشف
            تسربات المياه بالأجهزة الإلكترونية وعزل الأسطح بالفوم والعزل المائي. نخدم جميع أحياء
            الرياض مع <strong className="text-gold-400">ضمان مكتوب</strong> على جميع الأعمال.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="group inline-flex items-center gap-3 rounded-full bg-wa-green-500 hover:bg-wa-green-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-wa-green-500/30 hover:shadow-wa-green-500/50 transition-all duration-300 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.11 1.522 5.837L.057 23.49a.75.75 0 0 0 .921.921l5.663-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
              احجز عبر واتساب — مجاناً
            </a>
            <a
              href={`tel:${siteConfig.phone.primary}`}
              id="hero-phone-btn"
              className="inline-flex items-center gap-3 rounded-full border-2 border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur px-7 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span dir="ltr">{siteConfig.phone.display.primary}</span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50"
          >
            {[
              "✅ كشف بدون تكسير",
              "✅ ضمان مكتوب",
              "✅ خدمة 24 ساعة",
              "✅ أسعار تنافسية",
            ].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 wave-divider" aria-hidden="true">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS SECTION
      ══════════════════════════════════════════ */}
      <section
        className="bg-white py-16"
        aria-label="إحصائياتنا"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                className="glass-card rounded-2xl p-6 text-center card-hover"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl gradient-brand shadow-md shadow-blue-brand-500/25">
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="stat-number text-3xl sm:text-4xl font-black text-blue-brand-700 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-surface-800/70">{stat.label}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════════ */}
      <section
        id="services"
        className="section-padding bg-surface-50"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-widest text-blue-brand-600 mb-3"
            >
              ما نقدمه لك
            </motion.p>
            <motion.h2
              id="services-heading"
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-surface-900 mb-4"
            >
              خدماتنا{" "}
              <span className="gradient-text">المتخصصة</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mx-auto max-w-2xl text-base text-surface-800/65"
            >
              نقدم حلولاً متكاملة لكشف التسربات وعزل الأسطح بأحدث التقنيات وأعلى معايير الجودة
            </motion.p>
          </AnimatedSection>

          {/* Services Grid */}
          <AnimatedSection className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => {
              const isBlue = service.color === "blue";
              return (
                <motion.article
                  key={service.id}
                  variants={fadeUp}
                  custom={i}
                  className="glass-card rounded-3xl p-8 card-hover relative overflow-hidden group"
                  aria-labelledby={`service-${service.id}-title`}
                >
                  {/* Background decoration */}
                  <div
                    className={`absolute -top-8 -left-8 h-32 w-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isBlue ? "bg-blue-brand-100" : "bg-gold-100"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute top-6 left-6 inline-flex items-center rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                      {service.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${
                      isBlue
                        ? "gradient-brand shadow-blue-brand-500/25"
                        : "gradient-gold shadow-gold-500/25"
                    }`}
                  >
                    <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3
                    id={`service-${service.id}-title`}
                    className="text-xl font-bold text-surface-900 mb-1"
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm font-semibold mb-3 ${
                      isBlue ? "text-blue-brand-600" : "text-gold-600"
                    }`}
                  >
                    {service.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-surface-800/65 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2" role="list">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-surface-800/80">
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 ${
                            isBlue ? "text-blue-brand-500" : "text-gold-500"
                          }`}
                          aria-hidden="true"
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={siteConfig.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`service-${service.id}-cta`}
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all group/link ${
                      isBlue ? "text-blue-brand-600 hover:text-blue-brand-800" : "text-gold-600 hover:text-gold-800"
                    }`}
                  >
                    احجز الآن
                    <ChevronLeft
                      className="h-4 w-4 transition-transform group-hover/link:-translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </motion.article>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY US SECTION
      ══════════════════════════════════════════ */}
      <section
        id="why-us"
        className="section-padding bg-white"
        aria-labelledby="why-us-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Text side */}
            <AnimatedSection>
              <motion.p
                variants={fadeUp}
                className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-3"
              >
                لماذا تختارنا؟
              </motion.p>
              <motion.h2
                id="why-us-heading"
                variants={fadeUp}
                custom={1}
                className="text-3xl sm:text-4xl font-black text-surface-900 mb-5"
              >
                الشريك الأمين{" "}
                <span className="gradient-text">لحماية منزلك</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-base text-surface-800/65 leading-relaxed mb-8"
              >
                لأكثر من 10 سنوات، نبني الثقة مع عملائنا في الرياض من خلال الجودة في
                العمل والأمانة في التعامل والالتزام بالمواعيد. رضاك هو أولويتنا الأولى.
              </motion.p>

              <motion.div
                variants={stagger}
                className="grid gap-4 sm:grid-cols-2"
              >
                {whyUs.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    custom={i + 3}
                    className="flex items-start gap-4 rounded-2xl border border-surface-200 bg-surface-50 p-5 hover:border-blue-brand-200 hover:bg-blue-brand-50 transition-colors group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-brand shadow-md shadow-blue-brand-500/20 group-hover:shadow-blue-brand-500/40 transition-shadow">
                      <item.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-surface-900 mb-1">{item.title}</h3>
                      <p className="text-xs text-surface-800/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>

            {/* Visual side */}
            <AnimatedSection>
              <motion.div
                variants={fadeUp}
                className="relative rounded-3xl gradient-brand p-1 shadow-2xl shadow-blue-brand-500/20"
              >
                <div className="rounded-[22px] bg-surface-900 p-8 text-white">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <Shield className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold">ضمان شامل مكتوب</p>
                      <p className="text-xs text-white/60">على جميع أعمال العزل والإصلاح</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "رضا العملاء", value: 98 },
                      { label: "معدل نجاح الكشف", value: 100 },
                      { label: "الالتزام بالمواعيد", value: 95 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="mb-1.5 flex justify-between text-sm">
                          <span className="text-white/80">{item.label}</span>
                          <span className="font-bold text-gold-400">{item.value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                            className="h-full rounded-full gradient-gold"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 rounded-xl bg-wa-green-500/20 border border-wa-green-500/30 p-4">
                    <span className="text-2xl font-black text-white">4.9</span>
                    <div>
                      <div className="flex gap-0.5 mb-0.5">
                        {[1,2,3,4,5].map((s) => (
                          <Star key={s} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" aria-hidden="true" />
                        ))}
                      </div>
                      <p className="text-xs text-white/60">من 247 تقييم موثق</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COVERAGE SECTION
      ══════════════════════════════════════════ */}
      <section
        id="coverage"
        className="section-padding bg-surface-950"
        aria-labelledby="coverage-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-widest text-gold-500 mb-3"
            >
              نطاق الخدمة
            </motion.p>
            <motion.h2
              id="coverage-heading"
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-black text-white mb-4"
            >
              نخدم جميع أحياء{" "}
              <span className="gradient-text">الرياض</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mx-auto max-w-xl text-base text-white/55"
            >
              فريقنا المتنقل يصلك في أي حي بالرياض خلال ساعتين من اتصالك
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {siteConfig.districts.map((district, i) => (
              <motion.div
                key={district.en}
                variants={fadeUp}
                custom={i * 0.5}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 hover:border-blue-brand-500/50 hover:bg-blue-brand-500/10 transition-all group cursor-default"
              >
                <MapPin
                  className="h-3.5 w-3.5 shrink-0 text-blue-brand-400 group-hover:text-blue-brand-300"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                  {district.ar}
                </span>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT / FINAL CTA SECTION
      ══════════════════════════════════════════ */}
      <section
        id="contact"
        className="section-padding gradient-hero"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-blue-brand-200 bg-blue-brand-50 px-4 py-2 text-sm font-medium text-blue-brand-700 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-wa-green-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-wa-green-500" />
              </span>
              متاح الآن للرد على استفساراتك
            </motion.div>

            <motion.h2
              id="contact-heading"
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-surface-900 mb-5"
            >
              تواصل معنا
              <br />
              <span className="gradient-text">واحصل على عرض مجاني</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mx-auto max-w-xl text-base text-surface-800/65 mb-10"
            >
              فقط أرسل لنا رسالة أو اتصل بنا وسيتواصل معك أحد متخصصينا فوراً
              لتقديم الفحص وعرض السعر بدون أي التزام
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="inline-flex items-center gap-3 rounded-full bg-wa-green-500 hover:bg-wa-green-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-wa-green-500/30 hover:shadow-wa-green-500/50 transition-all hover:scale-105"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.11 1.522 5.837L.057 23.49a.75.75 0 0 0 .921.921l5.663-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
                ابدأ المحادثة على واتساب
              </a>

              <a
                href={`tel:${siteConfig.phone.primary}`}
                id="contact-phone-btn"
                className="inline-flex items-center gap-3 rounded-full border-2 border-blue-brand-300 bg-white hover:bg-blue-brand-50 px-8 py-4 text-base font-bold text-blue-brand-700 shadow-lg transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span dir="ltr">{siteConfig.phone.display.primary}</span>
              </a>
            </motion.div>

            {/* Social quick links */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-surface-800/50"
            >
              <a
                href={siteConfig.social.snapchat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-snap-yellow-600 transition-colors font-medium"
              >
                سناب شات
                <span className="text-xs opacity-70">{siteConfig.social.snapchat.display}</span>
              </a>
              <span className="text-surface-800/20">•</span>
              <a
                href={siteConfig.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-tiktok-red transition-colors font-medium"
              >
                تيك توك
                <span className="text-xs opacity-70">{siteConfig.social.tiktok.display}</span>
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

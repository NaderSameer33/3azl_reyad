"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiquidCard from "@/components/ui/LiquidCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  Star,
  Quote,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  ThumbsUp,
  MessageSquareQuote,
  Building,
  UserCheck,
  TrendingDown,
  Sparkles,
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  neighborhood: string;
  serviceCategory: "foam" | "leak" | "tank" | "membrane";
  serviceTitle: string;
  rating: number;
  date: string;
  review: string;
  highlightMetric: {
    label: string;
    value: string;
  };
  verifiedContract: boolean;
}

const testimonialsData: Testimonial[] = [
  {
    id: "rev-1",
    name: "أبو فهد القحطاني",
    role: "مالك فيلا سكنية",
    neighborhood: "حي الملقا — شمال الرياض",
    serviceCategory: "foam",
    serviceTitle: "عزل فوم بولي يوريثان 4 سم",
    rating: 5,
    date: "منذ أسبوعين",
    review:
      "ما شاء الله تبارك الله، شغل احترافي من الدرجة الأولى. عزلوا سطح الفيلا 450 م² بالفوم مع طبقة أكرليك حماية. بعد أسبوعين من التجربة لاحظت انخفاض حرارة الدور الثاني بشكل مذهل والمكيفات صارت تفصل وتبرد بسرعة. تم تسليمي شهادة الضمان 15 سنة معتمدة لشركة الكهرباء.",
    highlightMetric: {
      label: "وفر التكييف والحرارة",
      value: "-40% حرارة السقف",
    },
    verifiedContract: true,
  },
  {
    id: "rev-2",
    name: "م. سلطان المطيري",
    role: "مدير مجمع سكني",
    neighborhood: "حي النرجس — الرياض",
    serviceCategory: "leak",
    serviceTitle: "كشف تسربات معتمد بالأجهزة",
    rating: 5,
    date: "منذ 3 أسابيع",
    review:
      "جاءتني فاتورة مياه تفوق 4,200 ريال وكان هناك رطوبة بالمدخل. تواصلت معهم وحضر الفني بجهاز النيتروجين والكاميرا الحرارية، وحدد موضع الكسر في بلاطة واحدة فقط بدون أي تكسير عشوائي! تم تزويدي بتقرير فني معتمد قدمته في تطبيق NWC وحذفت الفاتورة المرتفعة بالكامل.",
    highlightMetric: {
      label: "انخفاض فاتورة المياه",
      value: "من 4,200 إلى 160 ر.س",
    },
    verifiedContract: true,
  },
  {
    id: "rev-3",
    name: "د. عبد العزيز التميمي",
    role: "مالك عمارة سكنية",
    neighborhood: "حي الياسمين — الرياض",
    serviceCategory: "tank",
    serviceTitle: "عزل وترميم خزان أرضي بالإيبوكسي",
    rating: 5,
    date: "منذ شهر",
    review:
      "كان الخزان الأرضي يعاني من تسرب مياه جوفية ملوثة وشروخ في اللياسة. قام فريق شركة المعمورة بتفريغ الخزان ومعالجة الشروخ بمواد سيكا غير منكمشة، ثم دهنوا طبقتين إيبوكسي أزرق غذائي معتمد لمياه الشرب. تم تعقيم الخزان بالكامل وتسليمه خالي من أي روائح أو شوائب.",
    highlightMetric: {
      label: "نقاء وعزل الخزان",
      value: "عزل تام 100%",
    },
    verifiedContract: true,
  },
  {
    id: "rev-4",
    name: "سعد بن إبراهيم الدوسري",
    role: "مالك منزل",
    neighborhood: "حي الصحافة — شمال الرياض",
    serviceCategory: "membrane",
    serviceTitle: "عزل مائي رولات ممبرين 4 ملم",
    rating: 5,
    date: "منذ شهرين",
    review:
      "في موسم الأمطار الماضي تسربت المياه من السطح وخربت ديكورات الجبس. طلبتهم لعزل السطح برولات بيتومينية مسلحة 4 ملم. تم عمل وزرات مرتفعة حول السترة واختبروا السطح بالغمر بالماء لمدة يومين متتاليين للتأكد من انعدام التسريب. التزام بالمواعيد وأمانة في العمل.",
    highlightMetric: {
      label: "اختبار الغمر المائي",
      value: "48 ساعة بدون تسريب",
    },
    verifiedContract: true,
  },
  {
    id: "rev-5",
    name: "خالد بن ناصر العتيبي",
    role: "مالك فيلا مودرن",
    neighborhood: "حي حطين — الرياض",
    serviceCategory: "foam",
    serviceTitle: "عزل فوم حراري ومائي",
    rating: 5,
    date: "منذ شهرين",
    review:
      "خدمة راقية وسريعة. تواصلت معهم في الصباح وحضر المهندس في نفس اليوم لمعاينة السطح وقياس المساحة. التنفيذ تم بماكينة رش ضغط عالي متطورة ورشوا وزرات حول كافة مواسير التكييف والتمديدات بدون أي فراغات. أنصح بالتعامل معهم بشدة.",
    highlightMetric: {
      label: "سرعة الإنجاز",
      value: "تنفيذ خلال 24 ساعة",
    },
    verifiedContract: true,
  },
  {
    id: "rev-6",
    name: "أبو مشاري العنزي",
    role: "مالك شقق سكنية",
    neighborhood: "حي اليرموك — شرق الرياض",
    serviceCategory: "leak",
    serviceTitle: "كشف تسربات دورات المياه والخزانات",
    rating: 5,
    date: "منذ 3 أشهر",
    review:
      "أشكر المهندس والفنيين على دقة المواعيد والأخلاق العالية. كشفوا على 4 دورات مياه والخزان العلوي وحددوا تهريب خفي في جلبة السيفون وماسورة تغذية بسعر مناسب جداً مع إصلاح فوري في نفس الزيارة.",
    highlightMetric: {
      label: "دقة الكشف الإلكتروني",
      value: "إصلاح بنفس اليوم",
    },
    verifiedContract: true,
  },
];

const categoryFilters = [
  { id: "all", label: "جميع التقييمات (6)" },
  { id: "foam", label: "عزل الفوم" },
  { id: "leak", label: "كشف التسربات" },
  { id: "tank", label: "عزل الخزانات" },
  { id: "membrane", label: "عزل الممبرين" },
];

export default function TestimonialsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredTestimonials =
    selectedFilter === "all"
      ? testimonialsData
      : testimonialsData.filter((t) => t.serviceCategory === selectedFilter);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-white/10 select-none"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Ambient Blooms */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-36 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-10 -left-36 h-96 w-96 rounded-full bg-teal-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-300 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            تجارب حقيقية موثقة بعقود وضمانات
          </span>

          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
          >
            ماذا يقول عملاؤنا في{" "}
            <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-teal-300 bg-clip-text text-transparent">
              أحياء مدينة الرياض؟
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            نفخر بثقة أكثر من 3,500 مالك فيلا ومبنى سكني وتجاري في الرياض بفضل دقة الكشف وجودة العزل والالتزام بالضمان الموثق.
          </p>

          {/* Social Proof Rating Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-slate-900/90 border border-white/10 px-6 py-3 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white font-mono">4.9 / 5</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
            </div>
            <span className="h-4 w-px bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-2 text-xs text-slate-300 font-bold">
              <UserCheck className="h-4 w-4 text-emerald-400" />
              <span>+350 تقييم معتمد من عملاء الرياض</span>
            </div>
          </div>
        </div>

        {/* Filter Category Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryFilters.map((filter) => {
            const isSelected = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedFilter(filter.id)}
                className={`rounded-2xl px-5 py-2.5 text-xs font-black transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/25"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Testimonials 3D Liquid Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTestimonials.map((t) => (
              <LiquidCard
                key={t.id}
                glowColor={t.serviceCategory === "leak" ? "emerald" : "sky"}
                className="p-6 sm:p-7 flex flex-col justify-between text-right"
              >
                <div>
                  {/* Top Bar: Customer Info & Rating */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-black text-white">{t.name}</h3>
                      <span className="text-xs text-teal-300 font-semibold block">
                        {t.role}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3 text-sky-400 shrink-0" />
                        {t.neighborhood}
                      </span>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="flex text-amber-400 mb-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-500">{t.date}</span>
                    </div>
                  </div>

                  {/* Service Badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500/10 border border-sky-400/20 px-2.5 py-1 text-[11px] font-bold text-sky-300 mb-4">
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    <span>الخدمة: {t.serviceTitle}</span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 relative">
                    <Quote className="h-5 w-5 text-white/10 absolute -top-2 -right-2 rotate-180 pointer-events-none" />
                    {t.review}
                  </p>
                </div>

                {/* Bottom Bar: Highlight Metric & Verified Stamp */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="rounded-xl bg-slate-950/80 border border-white/5 px-3 py-1.5">
                    <span className="text-[10px] text-slate-400 block">
                      {t.highlightMetric.label}:
                    </span>
                    <strong className="text-teal-300 font-bold text-xs">
                      {t.highlightMetric.value}
                    </strong>
                  </div>

                  {t.verifiedContract && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                      <ShieldCheck className="h-4 w-4" />
                      <span>عقد وضمان موثق</span>
                    </span>
                  )}
                </div>
              </LiquidCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import LiquidCard from "@/components/ui/LiquidCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  Calculator,
  Droplets,
  Thermometer,
  Waves,
  Home,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  MessageCircle,
  CalendarCheck,
  ArrowLeft,
  Percent,
} from "lucide-react";

/* ─── Insulation & Service Types Data ─────────────────────────────────────── */
const serviceTypes = [
  {
    id: "foam",
    title: "عزل فوم بولي يوريثان",
    subtitle: "حراري ومائي 4 سم (كثافة 45)",
    icon: Thermometer,
    ratePerMeter: 38,
    isAreaBased: true,
    warranty: "10 - 15 سنة",
    savings: "40% توفير بفاتورة الكهرباء",
    badge: "الأكثر طلباً",
    tagColor: "text-sky-300 bg-sky-500/15 border-sky-400/30",
    desc: "معتمد من شركة الكهرباء السعودية ومطابق لكود البناء SBC 601",
  },
  {
    id: "waterproof",
    title: "عزل مائي رولات ممبرين",
    subtitle: "بيتومين 4 ملم مسلح بالبوليستر",
    icon: Waves,
    ratePerMeter: 45,
    isAreaBased: true,
    warranty: "12 سنة",
    savings: "حماية 100% من مياه الأمطار",
    badge: "مقاوم للأمطار",
    tagColor: "text-teal-300 bg-teal-500/15 border-teal-400/30",
    desc: "حماية تامة للأسطح الخرسانية والمبلطة والمستودعات مع ضبط الميول",
  },
  {
    id: "tank",
    title: "عزل خزانات مياه أرضية",
    subtitle: "إيبوكسي غذائي صحي معتمد",
    icon: Home,
    ratePerMeter: 55,
    isAreaBased: true,
    warranty: "10 سنوات",
    savings: "منع تسرب المياه الجوفية",
    badge: "صحي للشرب",
    tagColor: "text-emerald-300 bg-emerald-500/15 border-emerald-400/30",
    desc: "معالجة التشققات والشروخ والتعشيش بمواد بوليمرية غير سامة",
  },
  {
    id: "leak",
    title: "كشف تسربات المياه",
    subtitle: "أجهزة نيتروجين وكاميرات حرارية",
    icon: Droplets,
    ratePerMeter: 0,
    flatPrice: 199,
    isAreaBased: false,
    warranty: "تقرير معتمد",
    savings: "إسقاط الفواتير لدى NWC",
    badge: "بدون تكسير",
    tagColor: "text-purple-300 bg-purple-500/15 border-purple-400/30",
    desc: "فحص شامل لشبكة التغذية والصرف وتقديم تقرير رسمي معتمد لشركة المياه",
  },
];

/* ─── Area Presets ───────────────────────────────────────────────────────── */
const areaPresets = [100, 200, 300, 450, 600, 1000];

export default function CostCalculatorSection() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("foam");
  const [area, setArea] = useState<number>(250);

  const selectedService =
    serviceTypes.find((s) => s.id === selectedServiceId) || serviceTypes[0];

  // Calculation Logic
  const totalCost = selectedService.isAreaBased
    ? area * selectedService.ratePerMeter
    : selectedService.flatPrice || 199;

  // Pre-filled WhatsApp message URL
  const customWhatsAppUrl = `${siteConfig.whatsapp.url}&text=${encodeURIComponent(
    `السلام عليكم، قمت بحساب تكلفة ${selectedService.title} بمساحة تقريبية ${
      selectedService.isAreaBased ? `${area} م²` : "فحص شامل"
    } بالتكلفة التقديرية (${totalCost.toLocaleString()} ريال). أود حجز موعد معاينة مجانية بالرياض.`
  )}`;

  return (
    <section
      id="calculator"
      className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-white/10 select-none"
      aria-labelledby="calculator-heading"
    >
      {/* Background Radial Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-10 -left-32 h-96 w-96 rounded-full bg-teal-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-300 mb-3">
            <Calculator className="h-3.5 w-3.5" />
            حاسبة التكلفة الذكية والفورية
          </span>
          <h2
            id="calculator-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
          >
            احسب تكلفة عزل سطح منزلك{" "}
            <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-teal-300 bg-clip-text text-transparent">
              في ثوانٍ معدودة
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            اختر نوع العزل وحدد المساحة التقريبية للحصول على تسعير فوري شامل المواد والمصنعية وعقد الضمان الموثق.
          </p>
        </div>

        {/* ── Step 1: Selectable Service Boxes (No Dropdowns!) ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-400">
              الخطوة 1: اختر نوع الخدمة المطلوبة (انقر على المربع)
            </span>
            <span className="text-[11px] text-sky-400 font-medium">4 خيارات معتمدة</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceTypes.map((srv) => {
              const isSelected = selectedServiceId === srv.id;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  type="button"
                  className={`group relative rounded-3xl p-5 text-right transition-all duration-300 flex flex-col justify-between border ${
                    isSelected
                      ? "border-sky-400 bg-slate-900 shadow-2xl shadow-sky-500/20 ring-2 ring-sky-400/40 -translate-y-1"
                      : "border-white/10 bg-slate-900/70 hover:border-white/20 hover:bg-slate-900/90"
                  }`}
                >
                  {/* Top Bar inside Box */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform ${
                        isSelected
                          ? "bg-gradient-to-tr from-blue-600 to-sky-500 text-white shadow-md shadow-sky-500/30 scale-105"
                          : "bg-slate-800 text-slate-300 group-hover:text-white"
                      }`}
                    >
                      <srv.icon className="h-6 w-6" />
                    </div>

                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-black ${srv.tagColor}`}
                    >
                      {srv.badge}
                    </span>
                  </div>

                  {/* Service Titles */}
                  <div className="mb-4">
                    <h3 className="text-base font-black text-white group-hover:text-sky-300 transition-colors mb-1">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-teal-300 font-semibold mb-2">
                      {srv.subtitle}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {srv.desc}
                    </p>
                  </div>

                  {/* Box Bottom Meta */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">الضمان:</span>
                    <span className="font-bold text-white">{srv.warranty}</span>
                  </div>

                  {/* Active Indicator Radio Dot */}
                  <div className="absolute top-3 left-3">
                    <div
                      className={`h-4 w-4 rounded-full border flex items-center justify-center transition-all ${
                        isSelected
                          ? "border-sky-400 bg-sky-400"
                          : "border-white/20 bg-transparent"
                      }`}
                    >
                      {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-slate-950" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Step 2 & Live Estimate Dashboard ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ── Left/Col 1: Area Customizer (7 Cols) ── */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <LiquidCard glowColor="sky" className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-bold text-slate-400 block mb-1">
                      الخطوة 2: حدد المساحة التقريبية للسطح
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      {selectedService.isAreaBased
                        ? "المساحة بالمتر المربع (م²)"
                        : "نوع الفحص الميداني"}
                    </h3>
                  </div>

                  {selectedService.isAreaBased && (
                    <div className="rounded-2xl border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-center">
                      <span className="text-2xl font-black text-sky-300 font-mono">
                        {area}
                      </span>
                      <span className="text-xs text-sky-200 mr-1 font-bold">م²</span>
                    </div>
                  )}
                </div>

                {selectedService.isAreaBased ? (
                  <div className="space-y-6 mb-6">
                    {/* Area Slider */}
                    <div>
                      <input
                        type="range"
                        min="50"
                        max="1200"
                        step="25"
                        value={area}
                        onChange={(e) => setArea(Number(e.target.value))}
                        className="w-full accent-sky-400 cursor-pointer h-2.5 rounded-lg bg-slate-950 shadow-inner"
                      />
                      <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                        <span>50 م² (ملحق / غرفة)</span>
                        <span>500 م² (فيلا كاملة)</span>
                        <span>1200 م² (مجمع / عمارة)</span>
                      </div>
                    </div>

                    {/* Quick Preset Buttons */}
                    <div>
                      <span className="text-xs font-bold text-slate-400 block mb-2">
                        مساحات شائعة في فلل وعمائر الرياض:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {areaPresets.map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setArea(preset)}
                            className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                              area === preset
                                ? "bg-sky-400 text-slate-950 font-black shadow-md shadow-sky-400/30"
                                : "bg-slate-950 border border-white/10 text-slate-300 hover:text-white hover:border-white/25"
                            }`}
                          >
                            {preset} م²
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl bg-slate-950/80 border border-purple-500/30 p-5 mb-6 text-xs text-slate-300 leading-relaxed">
                    <p className="font-bold text-purple-300 text-sm mb-2">
                      يشمل الفحص الإلكتروني الشامل:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span>فحص شبكة التغذية وشبكة الصرف بالنيتروجين والموجات الكهروسمعية</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span>مسح شامل بالكاميرات الحرارية FLIR لتحديد مسارات الرطوبة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span>إصدار تقرير فني معتمد لحل ارتفاع فواتير شركة المياه الوطنية</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Inclusions summary */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-teal-400 shrink-0" />
                  <span>عقد ضمان موثق</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>معاينة موقع مجانية</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="h-4 w-4 text-sky-400 shrink-0" />
                  <span>تنفيذ خلال 24 ساعة</span>
                </div>
              </div>
            </LiquidCard>
          </div>

          {/* ── Right/Col 2: Live Quotation & Instant Booking (5 Cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <LiquidCard
              glowColor="emerald"
              className="p-6 sm:p-8 h-full flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-sky-500/30"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-xs font-bold text-slate-400">التكلفة التقديرية الفورية</span>
                  <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-black text-emerald-300">
                    شامل المواد والضمان
                  </span>
                </div>

                {/* Big Price Display */}
                <div className="mb-6 text-center rounded-2xl bg-slate-950/80 border border-white/10 p-5 shadow-inner">
                  <span className="text-xs text-slate-400 block mb-1">
                    السعر التقريبي التقديري:
                  </span>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                      <AnimatedCounter from={0} to={totalCost} duration={1.2} />
                    </span>
                    <span className="text-base font-bold text-sky-300">ريال سعودي</span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1.5">
                    {selectedService.isAreaBased
                      ? `سعر المتر المربع التقديري ${selectedService.ratePerMeter} ريال`
                      : "فحص شامل بدون تكسير"}
                  </span>
                </div>

                {/* Value Highlights */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-xs py-1.5 border-b border-white/5">
                    <span className="text-slate-400">مدة الضمان المعتمد:</span>
                    <strong className="text-white font-bold">{selectedService.warranty}</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1.5 border-b border-white/5">
                    <span className="text-slate-400">الميزة الأساسية:</span>
                    <strong className="text-teal-300 font-bold">{selectedService.savings}</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1.5 border-b border-white/5">
                    <span className="text-slate-400">نطاق التغطية:</span>
                    <strong className="text-white font-bold">كافة أحياء الرياض</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                {/* 1. WhatsApp Button with pre-filled quote */}
                <a
                  href={customWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>تأكيد السعر وحجز المعاينة عبر واتساب</span>
                </a>

                {/* 2. Direct Booking Form Link */}
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 py-3 text-xs font-bold text-slate-200 transition-all hover:text-white"
                >
                  <CalendarCheck className="h-4 w-4 text-sky-400" />
                  <span>أو املأ نموذج المعاينة السريعة</span>
                </a>
              </div>
            </LiquidCard>
          </div>
        </div>
      </div>
    </section>
  );
}

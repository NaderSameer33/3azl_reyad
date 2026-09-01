"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiquidCard from "@/components/ui/LiquidCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  ArrowRightLeft,
  CheckCircle2,
  AlertTriangle,
  Droplets,
  Thermometer,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";

/* ─── 3 Rich Before / After Case Studies ─────────────────────────────────── */
const casesData = [
  {
    id: "foam-insulation",
    title: "عزل فوم بولي يوريثان للأسطح",
    location: "فيلا سكنية — حي الملقا، الرياض",
    category: "عزل حراري ومائي ثنائي",
    description:
      "معالجة سطح خرساني متهالك يعاني من تشققات وتسرب مياه الأمطار وارتفاع شديد في حرارة الغرف العلوية، بتطبيق فوم 4 سم وكثافة 45 كجم/م³ مع طبقة حماية أكرليك.",
    beforeMetrics: {
      temp: 68,
      tempUnit: "°C",
      tempLabel: "حرارة السطح قبل العزل",
      bill: 1650,
      billLabel: "فاتورة الكهرباء الصيفية",
      leakStatus: "تسرب مستمر لمياه الأمطار",
    },
    afterMetrics: {
      temp: 32,
      tempUnit: "°C",
      tempLabel: "حرارة السطح بعد الفوم",
      bill: 820,
      billLabel: "فاتورة الكهرباء بعد العزل",
      leakStatus: "حماية تامة 100% بدون أي تسريب",
    },
    beforeSpecs: [
      "تشققات شعرية وتآكل بالخرسانة",
      "انتقال الحرارة الشديدة للأسقف (68°C)",
      "تلف في الدهانات الداخلية والجبس",
    ],
    afterSpecs: [
      "طبقة فوم بولي يوريثان متصلة 4 سم",
      "دهان أكرليك حماية عاكس للأشعة UV",
      "ضمان رسمي معتمد لمدة 15 سنة",
    ],
  },
  {
    id: "leak-detection",
    title: "كشف تسربات المياه بالنيتروجين",
    location: "مجمع سكني — حي النرجس، الرياض",
    category: "كشف إلكتروني بدون تكسير",
    description:
      "تحديد مكان كسر خفي في شبكة التغذية المدفونة تحت بلاط الرخام بدقة 100% باستخدام غاز النيتروجين والمجسات الكهروسمعية دون أي تكسير عشوائي.",
    beforeMetrics: {
      temp: 480,
      tempUnit: "لتر/يوم",
      tempLabel: "فاقد المياه اليومي الخفي",
      bill: 2400,
      billLabel: "فاتورة المياه المرتفعة شهرياً",
      leakStatus: "رطوبة وتلف جدران وهبوط أرضيات",
    },
    afterMetrics: {
      temp: 0,
      tempUnit: "لتر/يوم",
      tempLabel: "الفاقد بعد الإصلاح الدقيق",
      bill: 210,
      billLabel: "الفاتورة بعد التقرير المعتمد",
      leakStatus: "إصلاح موضع الكسر فقط + تقرير NWC",
    },
    beforeSpecs: [
      "تسرب خفي تحت بلاط الرخام بدون أثر ظاهري",
      "فاتورة مياه شهرية تفوق 2,400 ريال",
      "تصدعات ورطوبة في القواعد الإنشائية",
    ],
    afterSpecs: [
      "تحديد الكسر في مساحة 20×20 سم بدقة",
      "إصلاح بأنبوب ألماني مدعم عالي الضغط",
      "تقرير معتمد لشركة المياه لحذف الفاتورة",
    ],
  },
  {
    id: "tank-epoxy",
    title: "عزل وترميم خزان مياه أرضي",
    location: "عمارة تجارية — حي الصحافة، الرياض",
    category: "عزل إيبوكسي غذائي معتمد",
    description:
      "معالجة تسريب مياه جوفية ملوثة إلى داخل خزان مياه الشرب الأرضي مع شروخ إنشائية خطيرة، عبر تطبيق معجون بوليمري وعزل إيبوكسي غذائي صحي معتمد.",
    beforeMetrics: {
      temp: 85,
      tempUnit: "%",
      tempLabel: "نسبة تلوث وفاقد مياه الخزان",
      bill: 1200,
      billLabel: "تكلفة تعويض المياه والصهاريج",
      leakStatus: "تسرب مياه جوفية وتآكل حديد التسليح",
    },
    afterMetrics: {
      temp: 100,
      tempUnit: "%",
      tempLabel: "نقاء المياه وسلامة الخزان",
      bill: 0,
      billLabel: "هدر مالي صفري بعد العزل",
      leakStatus: "عزل غذائي صحي معتمد 10 سنوات",
    },
    beforeSpecs: [
      "شروخ شعرية وتفتت في لياسة الخزان",
      "تداخل المياه الجوفية مع مياه الشرب",
      "تآكل حديد التسليح وظهور الصدأ",
    ],
    afterSpecs: [
      "حقن الشروخ بمواد إيبوكسية غير قابلة للتفتت",
      "عزل وجهين إيبوكسي غذائي معتمد للشرب",
      "فحص ضغط وتطهير الخزان بالكامل",
    ],
  },
];

export default function BeforeAfterSection() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = casesData[activeCaseIndex];

  // Drag and touch handlers for split-screen slider
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section
      id="before-after"
      className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-white/10 select-none"
      aria-labelledby="before-after-heading"
      onMouseUp={handleMouseUp}
    >
      {/* Background Subtle Liquid Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-300 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            توثيق النتائج الهندسية الملموسة
          </span>
          <h2
            id="before-after-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
          >
            شاهد الفرق: <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-teal-300 bg-clip-text text-transparent">قبل وبعد التدخل الهندسي</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            اسحب المؤشر التفاعلي يميناً ويساراً لمقارنة النتائج الحقيقية بالعين المجردة والأرقام الدقيقة.
          </p>
        </div>

        {/* Case Studies Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {casesData.map((c, idx) => {
            const isActive = activeCaseIndex === idx;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`relative rounded-2xl px-5 py-3 text-xs font-black transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/20"
                }`}
              >
                <span>{c.title}</span>
                <span className="text-[10px] opacity-70">({c.location.split("—")[1]?.trim() || "الرياض"})</span>
              </button>
            );
          })}
        </div>

        {/* ── Main Interactive Split-Screen & Comparison Dashboard ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ── Col 1: Interactive Wipe Slider Canvas (7 Cols) ── */}
          <div className="lg:col-span-7 flex flex-col">
            <LiquidCard glowColor="sky" className="h-full flex flex-col p-4 sm:p-6">
              {/* Interactive Canvas Container */}
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-slate-950 cursor-ew-resize select-none shadow-2xl"
              >
                {/* ── 1. "AFTER" Layer (Full Background) ── */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/40">
                  <div className="flex justify-between items-start">
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-black text-emerald-300 backdrop-blur-md">
                      ✓ بعد الإنجاز (المعالجة المكتملة)
                    </span>
                    <span className="text-xs text-slate-400 font-mono">حالة ممتازة</span>
                  </div>

                  <div className="space-y-2 max-w-sm rounded-2xl bg-slate-950/80 border border-emerald-500/30 p-4 backdrop-blur-md">
                    <span className="text-xs font-bold text-emerald-300 block mb-1">
                      النتيجة الهندسية النهائية:
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed font-semibold">
                      {currentCase.afterMetrics.leakStatus}
                    </p>
                    <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                      <div>
                        <span className="text-slate-400 block">{currentCase.afterMetrics.tempLabel}:</span>
                        <strong className="text-emerald-400 text-sm">
                          {currentCase.afterMetrics.temp} {currentCase.afterMetrics.tempUnit}
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">{currentCase.afterMetrics.billLabel}:</span>
                        <strong className="text-emerald-400 text-sm">
                          {currentCase.afterMetrics.bill.toLocaleString()} ر.س
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 2. "BEFORE" Layer (Clipped by Slider Position) ── */}
                <div
                  style={{ width: `${sliderPosition}%` }}
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-sky-400 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/40 transition-[width] duration-75 ease-out shadow-2xl"
                >
                  <div
                    style={{ width: containerRef.current?.clientWidth || 600 }}
                    className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8"
                  >
                    <div className="flex justify-between items-start">
                      <span className="rounded-full bg-red-500/20 border border-red-400/40 px-3 py-1 text-xs font-black text-red-300 backdrop-blur-md">
                        ⚠ قبل المعالجة (الضرر القائم)
                      </span>
                    </div>

                    <div className="space-y-2 max-w-sm rounded-2xl bg-slate-950/85 border border-red-500/30 p-4 backdrop-blur-md">
                      <span className="text-xs font-bold text-red-300 block mb-1">
                        المشكلة المرصودة:
                      </span>
                      <p className="text-xs text-slate-200 leading-relaxed font-semibold">
                        {currentCase.beforeMetrics.leakStatus}
                      </p>
                      <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                        <div>
                          <span className="text-slate-400 block">{currentCase.beforeMetrics.tempLabel}:</span>
                          <strong className="text-red-400 text-sm">
                            {currentCase.beforeMetrics.temp} {currentCase.beforeMetrics.tempUnit}
                          </strong>
                        </div>
                        <div>
                          <span className="text-slate-400 block">{currentCase.beforeMetrics.billLabel}:</span>
                          <strong className="text-red-400 text-sm">
                            {currentCase.beforeMetrics.bill.toLocaleString()} ر.س
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 3. Slider Handle Divider & Draggable Knob ── */}
                <div
                  style={{ left: `${sliderPosition}%` }}
                  className="absolute inset-y-0 -translate-x-1/2 flex items-center justify-center pointer-events-none z-30"
                >
                  <div className="h-full w-0.5 bg-gradient-to-b from-sky-400 via-white to-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                  <div className="absolute h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 border-2 border-white shadow-xl shadow-sky-500/50 flex items-center justify-center text-white">
                    <ArrowRightLeft className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Slider Helper Instruction */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="flex items-center gap-1">
                  <SlidersHorizontal className="h-3.5 w-3.5 text-sky-400" />
                  اسحب الفاصل يميناً ويساراً للتنقل بين الحالتين
                </span>
                <span className="font-mono text-[11px] text-sky-300">
                  {Math.round(sliderPosition)}% مقارنة
                </span>
              </div>
            </LiquidCard>
          </div>

          {/* ── Col 2: Comparative Stats & Technical Specs (5 Cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Case Details Card */}
            <LiquidCard glowColor="teal" className="p-6 text-right">
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3 mb-4">
                <div>
                  <span className="text-[11px] font-bold text-sky-400 block">{currentCase.category}</span>
                  <h3 className="text-lg font-black text-white">{currentCase.title}</h3>
                </div>
                <span className="rounded-xl bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] text-slate-300 font-medium">
                  {currentCase.location}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {currentCase.description}
              </p>

              {/* Comparison Metric Bars */}
              <div className="space-y-4 pt-2">
                {/* Metric 1 */}
                <div className="rounded-2xl bg-slate-950/70 border border-white/5 p-3.5">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-300">معدل خفض الحرارة / الفاقد:</span>
                    <span className="text-emerald-400 font-mono">
                      {currentCase.beforeMetrics.temp} → {currentCase.afterMetrics.temp} {currentCase.afterMetrics.tempUnit}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-red-500/20 overflow-hidden relative">
                    <div
                      style={{
                        width: `${Math.max(15, (currentCase.afterMetrics.temp / currentCase.beforeMetrics.temp) * 100)}%`,
                      }}
                      className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="rounded-2xl bg-slate-950/70 border border-white/5 p-3.5">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-300">التوفير المالي في الفاتورة:</span>
                    <span className="text-emerald-400 font-mono">
                      توفير {Math.round(((currentCase.beforeMetrics.bill - currentCase.afterMetrics.bill) / currentCase.beforeMetrics.bill) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-red-500/20 overflow-hidden relative">
                    <div
                      style={{
                        width: `${Math.round((currentCase.afterMetrics.bill / currentCase.beforeMetrics.bill) * 100)}%`,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Specs Highlights */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300 pt-4 border-t border-white/10">
                {currentCase.afterSpecs.map((spec) => (
                  <div key={spec} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </LiquidCard>

            {/* Quick Action Banner */}
            <LiquidCard glowColor="blue" className="p-5 text-right flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-black text-white mb-0.5">هل ترغب بمعاينة وفحص مماثل لمبناك؟</h4>
                <p className="text-[11px] text-slate-400">مهندسونا جاهزون للزيارة والتقرير الفوري بالرياض</p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 shrink-0"
              >
                <span>احجز معاينة موقعك</span>
                <CheckCircle2 className="h-3.5 w-3.5" />
              </a>
            </LiquidCard>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import {
  getAllProjects,
  getAllCategories,
} from "@/data/projectsData";
import { siteConfig } from "@/config/site";
import PortfolioGrid from "@/components/projects/PortfolioGrid";
import JsonLd from "@/components/ui/JsonLd";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import LiquidCard from "@/components/ui/LiquidCard";
import {
  ChevronLeft,
  ShieldCheck,
  MapPin,
  Award,
  CheckCircle2,
  Building2,
  HelpCircle,
  Sparkles,
  Zap,
  Droplets,
  Phone,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "معرض الأعمال والمشاريع المنفذة بالرياض | شركة المعمورة للمقاولات العامة للعوازل",
  description:
    "استعرض أكثر من 1,500 مشروع عزل فوم بولي يوريثان، عزل مائي وحراري، كشف تسربات المياه بدون تكسير، وعزل خزانات منفذة في كافة أحياء الرياض مع ضمان معتمد حتى 15 سنة.",
  keywords: [
    "مشاريع عزل الأسطح بالرياض",
    "معرض أعمال عزل فوم الرياض",
    "مشاريع كشف تسربات المياه بالرياض",
    "عزل خزانات المياه حي الملقا",
    "عزل أسطح حي النرجس",
    "عزل فوم حي الياسمين",
    "كشف تسربات حي الصحافة",
    "عزل مسابح حي ظهرة لبن",
    "شركة عزل أسطح معتمدة بالرياض",
  ],
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: "مشاريع وقصص نجاح عزل الأسطح وكشف التسربات بالرياض | شركة المعمورة",
    description: "توثيق ميداني شامل لمشاريع الفلل والعمائر في أحياء الرياض بضمان معتمد.",
    url: `${siteConfig.url}/projects`,
    siteName: siteConfig.name.ar,
    locale: "ar_SA",
    type: "website",
  },
};

const riyadhDistrictsCoverage = [
  {
    region: "شمال الرياض",
    districts: [
      "حي الملقا",
      "حي النرجس",
      "حي الياسمين",
      "حي حطين",
      "حي الصحافة",
      "حي العارض",
      "حي القيروان",
      "حي الوادي",
      "حي النفل",
      "حي الغدير",
    ],
    highlight: "عزل فوم للفلل المودرن وكشف تسربات خطوط التغذية",
  },
  {
    region: "شرق الرياض",
    districts: [
      "حي اليرموك",
      "حي الرمال",
      "حي المونسية",
      "حي قرطبة",
      "حي الحمراء",
      "حي الروضة",
      "حي الخليج",
      "حي النهضة",
      "حي إشبيلية",
    ],
    highlight: "عزل خزانات أرضية وعزل مائي رولات للأسطح",
  },
  {
    region: "وسط وغرب وجنوب الرياض",
    districts: [
      "حي ظهرة لبن",
      "حي السويدي",
      "حي الشفا",
      "حي العليا",
      "حي السليمانية",
      "حي النزهة",
      "حي الدرعية",
      "حي طويق",
    ],
    highlight: "عزل مسابح وقصور وتقارير فحص معتمدة لـ NWC",
  },
];

export default function ProjectsPage() {
  const projects = getAllProjects();
  const categories = getAllCategories();

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "معرض مشاريع عزل الأسطح وكشف التسربات بالرياض",
    description: "قائمة بالمشاريع المنفذة من شركة المعمورة في مدينة الرياض مع دراسات الجدوى والمواصفات الفنية المعتمدة.",
    itemListElement: projects.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: p.title,
      url: `${siteConfig.url}/projects/${p.slug}`,
      description: p.shortDescription,
    })),
  };

  return (
    <>
      <JsonLd schema={projectsSchema} />

      <div className="bg-slate-950 min-h-screen text-white text-right">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-white/10 bg-slate-900/60 py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="مسار التصفح" className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">
                الرئيسية
              </Link>
              <ChevronLeft className="h-3.5 w-3.5 opacity-50" />
              <span className="text-sky-300 font-bold">معرض الأعمال والمشاريع</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
            <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />
          </div>

          <div className="mx-auto max-w-7xl relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-black text-sky-300 mb-4">
              <Award className="h-3.5 w-3.5 text-sky-300" />
              سجل الإنجازات الميدانية المعتمدة في الرياض
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
              مشاريع وقصص نجاح <br />
              <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-teal-300 bg-clip-text text-transparent">
                عزل الأسطح وكشف التسربات بالرياض
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-10">
              نوثق لكم بالصور والتقارير الهندسية سابقة أعمالنا في أكثر من 1,500 فيلا وعمارة ومجمع سكني وتجاري في كافة أحياء الرياض، مع عقود ضمان موثقة تصل إلى 15 سنة واعتمادات رسمية لشركتي الكهرباء والمياه الوطنية.
            </p>

            {/* Stats Grid with Animated Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-md">
                <div className="text-3xl sm:text-4xl font-black text-sky-400 mb-1 font-mono">
                  <AnimatedCounter from={0} to={1500} prefix="+" duration={2} />
                </div>
                <div className="text-xs text-slate-300 font-bold">مشروع منجز بالرياض</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-md">
                <div className="text-3xl sm:text-4xl font-black text-teal-300 mb-1 font-mono">
                  <AnimatedCounter from={0} to={15} suffix=" سنة" duration={1.8} />
                </div>
                <div className="text-xs text-slate-300 font-bold">مدة الضمان المعتمد</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-md">
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-1 font-mono">
                  <AnimatedCounter from={0} to={100} suffix="%" duration={1.8} />
                </div>
                <div className="text-xs text-slate-300 font-bold">اعتماد المياه والكهرباء</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-md">
                <div className="text-3xl sm:text-4xl font-black text-purple-400 mb-1 font-mono">
                  <AnimatedCounter from={0} to={45} prefix="+" suffix=" حي" duration={2} />
                </div>
                <div className="text-xs text-slate-300 font-bold">تغطية لكافة أحياء الرياض</div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <PortfolioGrid projects={projects} categories={categories} />
          </div>
        </section>

        {/* ── Comprehensive Riyadh Local SEO & District Coverage Section ── */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-slate-900/50">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-2">
                نطاق التغطية الميدانية في الرياض
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                خدمات عزل الأسطح وكشف التسربات في كافة أحياء الرياض
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                فرقنا الهندسية المجهزة بأحدث الأجهزة الألمانية وسيارات رش الفوم متواجدة على مدار 24 ساعة لخدمة جميع القطاعات والمخططات السكنية والتجارية.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {riyadhDistrictsCoverage.map((item) => (
                <LiquidCard key={item.region} glowColor="sky" className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-sky-400 shrink-0" />
                    <h3 className="text-base font-black text-white">{item.region}</h3>
                  </div>

                  <p className="text-[11px] text-teal-300 font-bold mb-4 bg-teal-500/10 border border-teal-500/20 rounded-lg p-2">
                    {item.highlight}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.districts.map((d) => (
                      <span
                        key={d}
                        className="rounded-lg bg-slate-950/80 border border-white/10 px-2.5 py-1 text-[11px] text-slate-300 font-medium"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </LiquidCard>
              ))}
            </div>

            {/* Quick Consultation CTA */}
            <div className="rounded-3xl border border-sky-400/30 bg-gradient-to-r from-blue-900/40 via-slate-900 to-blue-900/40 p-8 text-center sm:text-right flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-1">
                  هل تبحث عن تنفيذ مشروع عزل أو كشف تسربات في حيك بالرياض؟
                </h3>
                <p className="text-xs text-slate-300">
                  تواصل معنا الآن للحصول على معاينة ميدانية مجانية وتقرير فني معتمد بضمان رسمي.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                    "السلام عليكم، أرغب بطلب معاينة فحص وعزل لمشروعي في الرياض."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-xs font-black text-white shadow-xl shadow-emerald-600/30 hover:scale-105 transition-transform"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>طلب فحص عبر واتساب</span>
                </a>

                <a
                  href={`tel:${siteConfig.phone.primary}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-slate-900/90 px-5 py-3.5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-4 w-4 text-sky-400" />
                  <span>اتصال هاتفي مباشر</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

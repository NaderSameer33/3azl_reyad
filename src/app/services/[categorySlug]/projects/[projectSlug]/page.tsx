import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllServiceCategories,
  getProjectBySlug,
} from "@/data/servicesData";
import { siteConfig } from "@/config/site";
import JsonLd from "@/components/ui/JsonLd";
import LiquidCard from "@/components/ui/LiquidCard";
import {
  ChevronLeft,
  MapPin,
  Clock,
  Maximize2,
  ShieldCheck,
  Building2,
  ArrowLeft,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Award,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    categorySlug: string;
    projectSlug: string;
  }>;
}

/* ─── Static Params for SSG ─────────────────────────────────────────────── */
export async function generateStaticParams() {
  const categories = getAllServiceCategories();
  const params: { categorySlug: string; projectSlug: string }[] = [];

  for (const cat of categories) {
    for (const proj of cat.projects) {
      params.push({
        categorySlug: cat.slug,
        projectSlug: proj.slug,
      });
    }
  }

  return params;
}

/* ─── Dynamic SEO Metadata ───────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { categorySlug, projectSlug } = await params;
  const result = getProjectBySlug(categorySlug, projectSlug);

  if (!result) {
    return { title: "المشروع غير موجود" };
  }

  const { project, category } = result;

  return {
    title: `${project.title} | ${siteConfig.name.short.ar}`,
    description: project.summary,
    keywords: [
      project.title,
      project.neighborhood,
      project.city,
      category.name,
      "مشاريع عزل بالرياض",
    ],
    alternates: {
      canonical: `${siteConfig.url}/services/${category.slug}/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `${siteConfig.url}/services/${category.slug}/projects/${project.slug}`,
      type: "website",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { categorySlug, projectSlug } = await params;
  const result = getProjectBySlug(categorySlug, projectSlug);

  if (!result) {
    notFound();
  }

  const { project, category } = result;

  /* ── Project JSON-LD Schema ────────────────────────────────────────────── */
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name.ar,
      telephone: siteConfig.phone.primary,
    },
    locationCreated: {
      "@type": "Place",
      name: `${project.neighborhood}، ${project.city}`,
    },
  };

  return (
    <>
      <JsonLd schema={projectSchema} />

      <div className="bg-slate-950 min-h-screen text-white text-right">
        {/* Breadcrumb Navigation */}
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
              <Link
                href={`/services/${category.slug}`}
                className="hover:text-white transition-colors"
              >
                {category.name}
              </Link>
              <ChevronLeft className="h-3.5 w-3.5 opacity-50" />
              <span className="text-sky-300 font-bold truncate max-w-xs sm:max-w-md">
                {project.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Main Project Hero Header */}
        <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
              <span className="rounded-full bg-sky-500/15 border border-sky-400/30 px-3 py-1 text-sky-300 font-bold">
                {category.name}
              </span>
              <span className="rounded-full bg-slate-900 border border-white/10 px-3 py-1 text-slate-300 flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-teal-400" />
                {project.neighborhood} — {project.city}
              </span>
              <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-emerald-300 font-bold">
                {project.warranty}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-8">
              {project.summary}
            </p>

            {/* Quick Project Specs Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <span className="text-slate-400 text-xs block mb-1">المساحة الإجمالية:</span>
                <span className="text-base font-black text-white">{project.area}</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <span className="text-slate-400 text-xs block mb-1">مدة التنفيذ:</span>
                <span className="text-base font-black text-white">{project.duration}</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <span className="text-slate-400 text-xs block mb-1">عقد الضمان:</span>
                <span className="text-base font-black text-teal-300">{project.warranty}</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <span className="text-slate-400 text-xs block mb-1">الاعتماد الفني:</span>
                <span className="text-base font-black text-sky-300">مطابق للكود السعودي</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project Case Details & Before/After */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* ── Col 1: Technical Story & Before-After (8 cols) ── */}
            <div className="lg:col-span-8 space-y-8">
              {/* Before & After Cards */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-xl">
                <span className="text-xs font-bold text-sky-400 block mb-2 uppercase tracking-wider">
                  التوثيق الميداني الهندسي
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white mb-6">
                  مقارنة حالة الموقع (قبل وبعد التدخل)
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Before Box */}
                  <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
                    <div className="flex items-center gap-2 text-red-300 font-black text-sm mb-2">
                      <AlertTriangle className="h-4 w-4" />
                      <span>{project.beforeAfter.beforeTitle}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.beforeAfter.beforeDesc}
                    </p>
                  </div>

                  {/* After Box */}
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
                    <div className="flex items-center gap-2 text-emerald-300 font-black text-sm mb-2">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{project.beforeAfter.afterTitle}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.beforeAfter.afterDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <LiquidCard glowColor="purple" className="p-6">
                  <h3 className="text-base font-black text-white mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span>التحدي الفني بالموقع:</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </LiquidCard>

                <LiquidCard glowColor="teal" className="p-6">
                  <h3 className="text-base font-black text-white mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span>الحل الهندسي المطبق:</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </LiquidCard>
              </div>

              {/* Metrics Table */}
              <LiquidCard glowColor="sky" className="p-6">
                <h3 className="text-base font-black text-white mb-4">
                  نتائج القياسات الفنية المسجلة:
                </h3>
                <div className="space-y-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-white/5 text-xs"
                    >
                      <span className="text-slate-300 font-bold">{m.label}</span>
                      <div className="flex items-center gap-3 font-mono">
                        <span className="text-red-400 line-through">{m.before}</span>
                        <span className="text-slate-500">←</span>
                        <span className="text-emerald-400 font-bold text-sm">{m.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </LiquidCard>
            </div>

            {/* ── Col 2: Action & Booking Sidebar (4 cols) ── */}
            <div className="lg:col-span-4 space-y-6">
              <LiquidCard glowColor="emerald" className="p-6">
                <span className="text-xs font-black text-emerald-300 block mb-2 uppercase tracking-wider">
                  طلب تنفيذ مماثل
                </span>
                <h3 className="text-lg font-black text-white mb-2">
                  هل ترغب بتطبيق نفس الحل لسطح منزلك؟
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  فريقنا الهندسي جاهز لمعاينة موقعك في {project.neighborhood} وكافة أحياء الرياض خلال ساعات.
                </p>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                      `السلام عليكم، اطلعت على مشروع (${project.title}) في ${project.neighborhood} وأود حجز موعد معاينة لمبناي.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3.5 text-xs font-black text-white shadow-xl shadow-emerald-600/30 hover:scale-105 transition-transform"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>طلب معاينة للمشروع عبر واتساب</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.phone.primary}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-slate-900/80 py-3.5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-sky-400" />
                    <span>اتصال مباشر: {siteConfig.phone.display.primary}</span>
                  </a>
                </div>
              </LiquidCard>

              {/* Related Category Link */}
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-right">
                <span className="text-[10px] text-slate-400 block mb-1">القسم الرئيسي:</span>
                <h4 className="text-sm font-bold text-white mb-2">{category.name}</h4>
                <Link
                  href={`/services/${category.slug}`}
                  className="text-xs text-sky-300 font-bold inline-flex items-center gap-1 hover:underline"
                >
                  <span>استكشف المزيد من مشاريع ومقالات هذا القسم</span>
                  <ArrowLeft className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

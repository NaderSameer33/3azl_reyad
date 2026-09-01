import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data/projectsData";
import { siteConfig } from "@/config/site";
import JsonLd from "@/components/ui/JsonLd";
import BeforeAfterViewer from "@/components/projects/BeforeAfterViewer";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectVideoSection from "@/components/projects/ProjectVideoSection";
import ProjectStickyCta from "@/components/projects/ProjectStickyCta";
import ProjectCard from "@/components/projects/ProjectCard";
import {
  MapPin,
  Clock,
  ShieldCheck,
  Maximize2,
  Building,
  CheckCircle2,
  AlertTriangle,
  FileText,
  HelpCircle,
  ChevronLeft,
  Quote,
  Layers,
  Award,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "المشروع غير موجود | درع الخليج بالرياض",
    };
  }

  return {
    title: `${project.title} | درع الخليج بالرياض`,
    description: `${project.shortDescription} — دراسة حالة فنية موثقة من شركة درع الخليج بالرياض مع ضمان معتمد.`,
    keywords: [
      ...project.seoKeywords,
      `عزل أسطح ${project.district}`,
      `كشف تسربات ${project.district}`,
      "شركة درع الخليج بالرياض",
    ],
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug, project.category.id, 3);

  const projectSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: project.title,
      description: project.shortDescription,
      image: `${siteConfig.url}${project.featuredImage}`,
      author: {
        "@type": "Organization",
        name: siteConfig.name.ar,
        url: siteConfig.url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: project.articleContent.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd schema={projectSchema} />

      <div className="bg-surface-950 min-h-screen text-white pb-20">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-white/10 bg-slate-950/60 py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <nav aria-label="مسار التصفح" className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/50">
              <Link href="/" className="hover:text-white transition-colors">
                الرئيسية
              </Link>
              <ChevronLeft className="h-3.5 w-3.5 text-white/30" />
              <Link href="/projects" className="hover:text-white transition-colors">
                معرض المشاريع
              </Link>
              <ChevronLeft className="h-3.5 w-3.5 text-white/30" />
              <span className="text-blue-brand-300 font-bold truncate max-w-xs sm:max-w-md">
                {project.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Header */}
        <header className="relative overflow-hidden py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-right">
          <div className="mx-auto max-w-5xl relative z-10">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span
                className={`inline-block rounded-lg border px-3 py-1 text-xs font-bold ${project.category.badgeColor}`}
              >
                {project.category.nameAr}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-white/10 px-3 py-1 text-xs font-bold text-white/80">
                <MapPin className="h-3.5 w-3.5 text-gold-400" />
                {project.location}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black leading-tight text-white mb-4">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>
          </div>
        </header>

        {/* Main Content Sections */}
        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12 pt-10">
          {/* Key Specs Overview Grid */}
          <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl shadow-xl text-right">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="rounded-2xl bg-white/5 border border-white/5 p-3.5">
                <span className="text-xs text-white/50 block mb-1">الموقع بالرياض</span>
                <span className="text-sm font-bold text-white">{project.district}</span>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/5 p-3.5">
                <span className="text-xs text-white/50 block mb-1">المساحة الإجمالية</span>
                <span className="text-sm font-bold text-white">{project.area}</span>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/5 p-3.5">
                <span className="text-xs text-white/50 block mb-1">مدة التنفيذ</span>
                <span className="text-sm font-bold text-white">{project.duration}</span>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/5 p-3.5">
                <span className="text-xs text-white/50 block mb-1">فترة الضمان</span>
                <span className="text-sm font-bold text-gold-400">{project.warranty.split(" ")[0]} {project.warranty.split(" ")[1]}</span>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/5 p-3.5">
                <span className="text-xs text-white/50 block mb-1">نوع المنشأة</span>
                <span className="text-sm font-bold text-white truncate block">{project.clientType}</span>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/5 p-3.5">
                <span className="text-xs text-white/50 block mb-1">الاعتماد</span>
                <span className="text-sm font-bold text-wa-green-400">كود SBC</span>
              </div>
            </div>
          </section>

          {/* Before/After Viewer */}
          <BeforeAfterViewer
            beforeAfter={project.beforeAfter}
            categoryId={project.category.id}
            projectTitle={project.title}
          />

          {/* Gallery */}
          <ProjectGallery
            gallery={project.gallery}
            categoryId={project.category.id}
            projectTitle={project.title}
          />

          {/* Video Section */}
          {project.videoUrl && (
            <ProjectVideoSection
              videoUrl={project.videoUrl}
              videoTitle={project.videoTitle}
              videoPlatform={project.videoPlatform}
              projectTitle={project.title}
            />
          )}

          {/* Challenge & Solution */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-right">
            {/* Challenge */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              <span className="inline-block rounded-lg bg-red-500/20 border border-red-500/30 px-3 py-1 text-xs font-bold text-red-300 mb-4">
                المشكلة والتحدي الفني
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                {project.challenge.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                {project.challenge.description}
              </p>
              <div className="space-y-2 mb-6">
                {project.challenge.symptoms.map((sym, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                    <span>{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              <span className="inline-block rounded-lg bg-wa-green-500/20 border border-wa-green-500/30 px-3 py-1 text-xs font-bold text-wa-green-300 mb-4">
                الحل الهندسي المطبق
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                {project.solution.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                {project.solution.description}
              </p>
              <div className="space-y-3">
                {project.solution.steps.map((st) => (
                  <div key={st.stepNumber} className="rounded-2xl bg-white/5 border border-white/5 p-4 text-xs">
                    <span className="font-bold text-blue-brand-300 block mb-1">
                      {st.stepNumber}. {st.title}
                    </span>
                    <p className="text-white/70 leading-relaxed">{st.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Specs */}
          <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl text-right">
            <span className="text-xs font-bold text-gold-400 block mb-1">
              المواصفات الفنية للمواد
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-6">
              بيانات ومواصفات العزل المعتمدة بالمشروع
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="flex justify-between border-b border-white/10 py-3">
                <span className="text-white/60">المادة الأساسية:</span>
                <span className="font-bold text-white">{project.technicalSpecs.material}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 py-3">
                <span className="text-white/60">الكثافة:</span>
                <span className="font-bold text-white">{project.technicalSpecs.density}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 py-3">
                <span className="text-white/60">السماكة:</span>
                <span className="font-bold text-white">{project.technicalSpecs.thickness}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 py-3">
                <span className="text-white/60">طريقة الفحص:</span>
                <span className="font-bold text-white">{project.technicalSpecs.testingMethod}</span>
              </div>
            </div>
          </section>

          {/* Technical Article */}
          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl text-right space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-bold text-blue-brand-400 block mb-1">
                المقال الفني التخصصي · {project.articleContent.readTime}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {project.articleContent.title}
              </h2>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-3xl">
              {project.articleContent.introduction}
            </p>
            {project.articleContent.sections.map((sec, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-base font-bold text-white">{sec.heading}</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-3xl">{sec.body}</p>
              </div>
            ))}
          </article>

          {/* Related Projects */}
          <section className="pt-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">مشاريع أخرى في نفس التصنيف</h3>
              <Link href="/projects" className="text-xs font-bold text-blue-brand-400 hover:underline">
                عرض كافة المشاريع
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rel) => (
                <ProjectCard key={rel.id} project={rel} />
              ))}
            </div>
          </section>
        </main>

        {/* Sticky CTA */}
        <ProjectStickyCta
          projectTitle={project.title}
          categoryName={project.category.nameAr}
          district={project.district}
        />
      </div>
    </>
  );
}

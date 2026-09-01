import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllServiceCategories,
  getArticleBySlug,
} from "@/data/servicesData";
import { siteConfig } from "@/config/site";
import JsonLd from "@/components/ui/JsonLd";
import LiquidCard from "@/components/ui/LiquidCard";
import {
  ChevronLeft,
  Clock,
  Calendar,
  User,
  Share2,
  ArrowLeft,
  Building2,
  Phone,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

interface ArticlePageProps {
  params: Promise<{
    categorySlug: string;
    articleSlug: string;
  }>;
}

/* ─── Static Params for SSG ─────────────────────────────────────────────── */
export async function generateStaticParams() {
  const categories = getAllServiceCategories();
  const params: { categorySlug: string; articleSlug: string }[] = [];

  for (const cat of categories) {
    for (const art of cat.articles) {
      params.push({
        categorySlug: cat.slug,
        articleSlug: art.slug,
      });
    }
  }

  return params;
}

/* ─── Dynamic SEO Metadata ───────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { categorySlug, articleSlug } = await params;
  const result = getArticleBySlug(categorySlug, articleSlug);

  if (!result) {
    return { title: "المقال غير موجود" };
  }

  const { article, category } = result;

  return {
    title: `${article.title} | ${siteConfig.name.short.ar}`,
    description: article.excerpt,
    keywords: [...article.keywords, category.name, "الرياض"],
    alternates: {
      canonical: `${siteConfig.url}/services/${category.slug}/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/services/${category.slug}/articles/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { categorySlug, articleSlug } = await params;
  const result = getArticleBySlug(categorySlug, articleSlug);

  if (!result) {
    notFound();
  }

  const { article, category } = result;

  /* ── Article JSON-LD Schema ────────────────────────────────────────────── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name.ar,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/services/${category.slug}/articles/${article.slug}`,
    },
  };

  return (
    <>
      <JsonLd schema={articleSchema} />

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
                {article.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Main Article Container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* ── Main Article Reading Column (8 cols) ── */}
            <article className="lg:col-span-8">
              {/* Category Tag & Meta */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
                <Link
                  href={`/services/${category.slug}`}
                  className="rounded-full bg-sky-500/15 border border-sky-400/30 px-3 py-1 text-sky-300 font-bold hover:bg-sky-500/25 transition-colors"
                >
                  {category.name}
                </Link>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-slate-500" />
                  {article.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-slate-500" />
                  وقت القراءة: {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-snug mb-6">
                {article.title}
              </h1>

              {/* Author Card Box */}
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 mb-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white font-bold">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-white">{article.author.name}</h3>
                    <span className="text-[11px] text-teal-300 font-semibold">{article.author.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>محتوى هندسي مراجع ومعتمد</span>
                </div>
              </div>

              {/* Article Content Render */}
              <div className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-black prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-sky-300 prose-hr:border-white/10 text-sm sm:text-base">
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.content
                      .replace(/^## (.*$)/gim, '<h2 class="text-xl sm:text-2xl font-black text-white mt-8 mb-4 border-r-4 border-sky-400 pr-3">$1</h2>')
                      .replace(/^### (.*$)/gim, '<h3 class="text-base sm:text-lg font-black text-sky-200 mt-6 mb-2">$1</h3>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-sky-300 font-bold">$1</strong>')
                      .replace(/^\- (.*$)/gim, '<li class="my-1.5 list-disc list-inside text-slate-300">$1</li>')
                      .replace(/\n\n/g, '<p class="mb-4 text-slate-300 leading-relaxed"></p>'),
                  }}
                />
              </div>

              {/* Keywords Tag Cloud */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <span className="text-xs font-bold text-slate-400 block mb-2.5">الكلمات الدلالية والموضوعات ذات الصلة:</span>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-lg bg-slate-900 border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Conversion CTA Banner inside Article */}
              <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-blue-900/60 border border-blue-400/30 p-6 sm:p-8 text-right">
                <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                  هل تحتاج استشارة فنية أو فحص مجاني لسطح منزلك في الرياض؟
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  فريقنا الهندسي في شركة درع الخليج مستعد لمعاينة الموقع وتقديم التقرير الفني الشامل بضمان معتمد.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                      `السلام عليكم، قرأت مقال (${article.title}) وأود حجز موعد معاينة في الرياض.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-xs font-black text-white shadow-lg shadow-emerald-600/30 hover:scale-105 transition-transform"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>تواصل مع المهندس المختص عبر واتساب</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.phone.primary}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-slate-900/80 px-5 py-3 text-xs font-bold text-white hover:bg-white/10 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-sky-400" />
                    <span>اتصال هاتفي مباشر</span>
                  </a>
                </div>
              </div>
            </article>

            {/* ── Sidebar Column: Related Projects & Specs (4 cols) ── */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Category Quick Card */}
              <LiquidCard glowColor="sky" className="p-6">
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                  القسم التابع له هذا الدليل
                </span>
                <h3 className="text-base font-black text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {category.shortDescription}
                </p>
                <Link
                  href={`/services/${category.slug}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 py-2.5 text-xs font-bold text-white transition-colors"
                >
                  <span>استعراض كافة خدمات ومشاريع القسم</span>
                  <ArrowLeft className="h-3.5 w-3.5" />
                </Link>
              </LiquidCard>

              {/* Related Projects in this Category */}
              <LiquidCard glowColor="teal" className="p-6">
                <span className="text-xs font-black text-white block mb-4 border-b border-white/10 pb-2">
                  مشاريع منفذة في هذا التخصص:
                </span>

                <div className="space-y-4">
                  {category.projects.map((p) => (
                    <div
                      key={p.id}
                      className="rounded-xl bg-slate-950/80 border border-white/5 p-3 hover:border-sky-400/30 transition-colors"
                    >
                      <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                        <span>{p.neighborhood}</span>
                        <span className="text-teal-300 font-bold">{p.warranty}</span>
                      </div>
                      <h4 className="text-xs font-bold text-white hover:text-sky-300 transition-colors mb-2">
                        <Link href={`/services/${category.slug}/projects/${p.slug}`}>
                          {p.title}
                        </Link>
                      </h4>
                      <Link
                        href={`/services/${category.slug}/projects/${p.slug}`}
                        className="text-[11px] text-sky-300 font-bold flex items-center gap-1 hover:underline"
                      >
                        <span>تقرير المشروع</span>
                        <ArrowLeft className="h-3 w-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </LiquidCard>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

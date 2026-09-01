import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllCategories,
  getCategoryBySlug,
} from "@/data/insulationKnowledgeBase";
import { siteConfig } from "@/config/site";
import JsonLd from "@/components/ui/JsonLd";
import CategoryKnowledgeClient from "./CategoryKnowledgeClient";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ─── Static Params for SSG ─────────────────────────────────────────────── */
export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((c) => ({
    slug: c.slug,
  }));
}

/* ─── Dynamic SEO Metadata ───────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "القسم غير موجود" };
  }

  return {
    title: `${category.titleAr} بالرياض | المواصفات والمشاريع المعتمدة`,
    description: `${category.shortSummary} — ضمان رسمي معتمد حتى 15 سنة في كافة أحياء الرياض.`,
    keywords: [
      category.titleAr,
      `${category.titleAr} بالرياض`,
      category.badgeText,
      "عزل أسطح بالرياض",
      "كشف تسربات المياه",
    ],
    alternates: {
      canonical: `${siteConfig.url}/categories/${category.slug}`,
    },
    openGraph: {
      title: `${category.titleAr} بالرياض | شركة المعمورة`,
      description: category.shortSummary,
      url: `${siteConfig.url}/categories/${category.slug}`,
      siteName: siteConfig.name.ar,
      locale: "ar_SA",
      type: "website",
    },
  };
}

export default async function CategoryKnowledgePage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  /* ── Structured Data Schema ────────────────────────────────────────────── */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.titleAr,
    description: category.fullOverview,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name.ar,
      telephone: siteConfig.phone.primary,
      address: {
        "@type": "PostalAddress",
        addressLocality: "الرياض",
        addressRegion: "منطقة الرياض",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "الرياض",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "الرئيسية",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "أقسام العزل والكشف",
        item: `${siteConfig.url}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.titleAr,
        item: `${siteConfig.url}/categories/${category.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd schema={[serviceSchema, breadcrumbSchema]} />
      <CategoryKnowledgeClient category={category} />
    </>
  );
}

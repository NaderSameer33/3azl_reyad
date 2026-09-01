import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllServiceCategories,
  getServiceCategoryBySlug,
} from "@/data/servicesData";
import { siteConfig } from "@/config/site";
import JsonLd from "@/components/ui/JsonLd";
import CategoryHubClient from "./CategoryHubClient";

interface CategoryPageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

/* ─── Static Params for SSG ─────────────────────────────────────────────── */
export async function generateStaticParams() {
  const categories = getAllServiceCategories();
  return categories.map((cat) => ({
    categorySlug: cat.slug,
  }));
}

/* ─── Dynamic SEO Metadata ───────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getServiceCategoryBySlug(categorySlug);

  if (!category) {
    return { title: "القسم غير موجود" };
  }

  return {
    title: category.seoMeta.title,
    description: category.seoMeta.description,
    keywords: category.seoMeta.keywords,
    alternates: {
      canonical: `${siteConfig.url}/services/${category.slug}`,
    },
    openGraph: {
      title: category.seoMeta.title,
      description: category.seoMeta.description,
      url: `${siteConfig.url}/services/${category.slug}`,
      siteName: siteConfig.name.ar,
      locale: "ar_SA",
      type: "website",
    },
  };
}

import { SERVICE_DETAILS_DATA } from "@/data/serviceDetailsData";

export default async function CategoryHubPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = getServiceCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const details = SERVICE_DETAILS_DATA[category.id] || SERVICE_DETAILS_DATA["foam-insulation"];

  /* ── Structured Data Schemas ────────────────────────────────────────────── */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.name,
    description: category.longDescription,
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
    offers: {
      "@type": "Offer",
      priceCurrency: "SAR",
      price: category.basePricePerMeter || category.flatPrice || 199,
      eligibleRegion: {
        "@type": "Country",
        name: "المملكة العربية السعودية",
      },
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
        name: "خدمات العزل والكشف",
        item: `${siteConfig.url}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `${siteConfig.url}/services/${category.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: details.seoFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: details.solutionSystem.title,
    description: details.solutionSystem.description,
    step: details.solutionSystem.steps.map((st) => ({
      "@type": "HowToStep",
      position: st.stepNumber,
      name: st.title,
      text: st.desc,
    })),
  };

  return (
    <>
      <JsonLd schema={[serviceSchema, breadcrumbSchema, faqSchema, howToSchema]} />
      <CategoryHubClient category={category} />
    </>
  );
}

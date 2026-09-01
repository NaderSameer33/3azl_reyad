import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getAllArticles, getFeaturedArticle } from "@/data/articlesData";
import JsonLd from "@/components/ui/JsonLd";
import ArticlesHubClient from "./ArticlesHubClient";

export const metadata: Metadata = {
  title: "مكتبة المقالات والأدلة الفنية لعزل الأسطح وكشف التسربات بالرياض",
  description:
    "شروحات وأدلة فنية متخصصة في عزل الفوم بولي يوريثان، العزل المائي، كشف تسربات المياه بدون تكسير، واشتراطات كود البناء السعودي وشركة الكهرباء بالرياض.",
  keywords: [
    "مقالات عزل الأسطح بالرياض",
    "دليل عزل الفوم",
    "كشف تسربات المياه المعتمد",
    "اشتراطات شركة الكهرباء للعزل",
    "عزل خزانات المياه إيبوكسي",
    "كود البناء السعودي SBC 601",
  ],
  alternates: {
    canonical: `${siteConfig.url}/articles`,
  },
  openGraph: {
    title: "مكتبة المقالات والأدلة الفنية | شركة المعمورة بالرياض",
    description:
      "أكبر مكتبة معرفية متخصصة في هندسة العزل الحراري والمائي وكشف التسربات في المملكة.",
    url: `${siteConfig.url}/articles`,
    siteName: siteConfig.name.ar,
    locale: "ar_SA",
    type: "website",
  },
};

export default function ArticlesHubPage() {
  const articles = getAllArticles();
  const featuredArticle = getFeaturedArticle();

  /* ── Structured Data ─────────────────────────────────────────────────────── */
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "مكتبة المقالات والأدلة الفنية لعزل الأسطح وكشف التسربات بالرياض",
    description:
      "أدلة فنية وشروحات هندسية متخصصة في عزل الأسطح وكشف التسربات بالرياض.",
    url: `${siteConfig.url}/articles`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name.ar,
      url: siteConfig.url,
    },
    hasPart: articles.map((art) => ({
      "@type": "TechArticle",
      headline: art.title,
      description: art.excerpt,
      url: `${siteConfig.url}/articles/${art.slug}`,
      datePublished: art.publishedDate,
    })),
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
        name: "مكتبة المقالات الفنية",
        item: `${siteConfig.url}/articles`,
      },
    ],
  };

  return (
    <>
      <JsonLd schema={[collectionSchema, breadcrumbSchema]} />
      <ArticlesHubClient articles={articles} featuredArticle={featuredArticle} />
    </>
  );
}

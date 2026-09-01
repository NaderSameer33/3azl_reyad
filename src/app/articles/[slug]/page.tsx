import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllArticles,
  getArticleBySlug,
} from "@/data/articlesData";
import { siteConfig } from "@/config/site";
import JsonLd from "@/components/ui/JsonLd";
import ArticleDetailClient from "./ArticleDetailClient";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ─── Static Params for SSG ─────────────────────────────────────────────── */
export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((art) => ({
    slug: art.slug,
  }));
}

/* ─── Dynamic SEO Metadata ───────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "المقال غير موجود" };
  }

  return {
    title: `${article.metaTitle} | ${siteConfig.name.short.ar}`,
    description: article.metaDescription,
    keywords: [...article.keywords, "الرياض", "عزل أسطح بالرياض", "كشف تسربات بالرياض"],
    alternates: {
      canonical: `${siteConfig.url}/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `${siteConfig.url}/articles/${article.slug}`,
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author.name],
      siteName: siteConfig.name.ar,
      locale: "ar_SA",
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  /* ── Structured Data ─────────────────────────────────────────────────────── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
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
      "@id": `${siteConfig.url}/articles/${article.slug}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
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
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/articles/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd schema={[articleSchema, faqSchema, breadcrumbSchema]} />
      <ArticleDetailClient
        article={article}
        relatedArticles={relatedArticles}
      />
    </>
  );
}

/**
 * seo.ts — Reusable SEO metadata helpers
 */

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  ogImage?: string;
}

/**
 * Generates a complete Next.js Metadata object.
 * Falls back to site-level defaults when no overrides are supplied.
 */
export function generateSeoMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
  ogImage = "/images/og-image.jpg",
}: GenerateMetadataOptions = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name.short.ar}`
    : `${siteConfig.name.ar} | كشف تسربات المياه وعزل الأسطح بالرياض`;

  const pageDescription = description ?? siteConfig.description.ar;
  const pageUrl = `${siteConfig.url}${path}`;
  const ogImageUrl = `${siteConfig.url}${ogImage}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name.ar }],
    creator: siteConfig.name.ar,
    publisher: siteConfig.name.ar,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "ar_SA",
      url: pageUrl,
      siteName: siteConfig.name.ar,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name.ar,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
      creator: `@${siteConfig.social.snapchat.username}`,
    },
  };
}

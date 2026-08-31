/**
 * structured-data.ts — Typed JSON-LD generators
 * Generates Schema.org structured data for LocalBusiness / HomeAndConstructionBusiness
 */

import { siteConfig } from "@/config/site";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"];
  "@id": string;
  name: string;
  alternateName: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  telephone: string[];
  email: string;
  priceRange: string;
  currenciesAccepted: string;
  paymentAccepted: string;
  openingHours: string;
  foundingDate: string;
  areaServed: AreaServedSchema[];
  address: PostalAddressSchema;
  geo: GeoCoordinatesSchema;
  sameAs: string[];
  hasOfferCatalog: OfferCatalogSchema;
  aggregateRating?: AggregateRatingSchema;
}

interface PostalAddressSchema {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface GeoCoordinatesSchema {
  "@type": "GeoCoordinates";
  latitude: string;
  longitude: string;
}

interface AreaServedSchema {
  "@type": "City" | "AdministrativeArea";
  name: string;
}

interface OfferCatalogSchema {
  "@type": "OfferCatalog";
  name: string;
  itemListElement: OfferSchema[];
}

interface OfferSchema {
  "@type": "Offer";
  itemOffered: {
    "@type": "Service";
    name: string;
    description: string;
  };
}

interface AggregateRatingSchema {
  "@type": "AggregateRating";
  ratingValue: string;
  reviewCount: string;
  bestRating: string;
}

export interface BreadcrumbSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItemSchema[];
}

interface BreadcrumbItemSchema {
  "@type": "ListItem";
  position: number;
  name: string;
  item?: string;
}

// ─── Generators ──────────────────────────────────────────────────────────────

/**
 * Generates the main LocalBusiness + HomeAndConstructionBusiness JSON-LD schema.
 */
export function generateLocalBusinessSchema(): LocalBusinessSchema {
  const { business, name, url, description, phone, social, services } =
    siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${url}/#organization`,
    name: name.ar,
    alternateName: name.en,
    description: description.ar,
    url,
    logo: `${url}${business.logo}`,
    image: `${url}/images/og-image.jpg`,
    telephone: [phone.primary, phone.secondary],
    email: business.email,
    priceRange: business.priceRange,
    currenciesAccepted: business.currenciesAccepted,
    paymentAccepted: business.paymentAccepted,
    openingHours: business.openingHours,
    foundingDate: business.foundingYear,
    areaServed: [
      {
        "@type": "City",
        name: "Riyadh",
      },
      {
        "@type": "AdministrativeArea",
        name: "Riyadh Province",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    sameAs: [social.snapchat.url, social.tiktok.url],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات كشف التسربات وعزل الأسطح",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.ar,
          description: service.description.ar,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "247",
      bestRating: "5",
    },
  };
}

/**
 * Generates a BreadcrumbList JSON-LD schema.
 *
 * @example
 * generateBreadcrumbSchema([
 *   { name: "الرئيسية", url: "/" },
 *   { name: "خدماتنا", url: "/services" },
 * ])
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url
        ? { item: `${siteConfig.url}${item.url}` }
        : {}),
    })),
  };
}

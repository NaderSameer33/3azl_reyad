import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url || "https://www.elmamoura.com";
  const currentDate = new Date().toISOString();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // ── Legal pages — required by Google Ads policy ─────────────────────────
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];


  // Dynamic Service Category Hub Routes
  const serviceCategoryRoutes: MetadataRoute.Sitemap = servicesData.map((cat) => ({
    url: `${baseUrl}/services/${cat.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Service Nested Projects & Articles Routes
  const nestedServiceRoutes: MetadataRoute.Sitemap = [];
  servicesData.forEach((cat) => {
    cat.projects.forEach((p) => {
      nestedServiceRoutes.push({
        url: `${baseUrl}/services/${cat.slug}/projects/${p.slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    });
    cat.articles.forEach((a) => {
      nestedServiceRoutes.push({
        url: `${baseUrl}/services/${cat.slug}/articles/${a.slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    });
  });

  return [...staticRoutes, ...serviceCategoryRoutes, ...nestedServiceRoutes];
}

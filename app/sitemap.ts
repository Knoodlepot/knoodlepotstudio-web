import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";

const BASE_URL = "https://knoodlepotstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* ── Static top-level pages ── */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  /* ── Per-app detail pages (/apps/[slug]) ── */
  const appDetailPages: MetadataRoute.Sitemap = apps.map((app) => ({
    url: `${BASE_URL}/apps/${app.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /* ── Per-app legal pages ── */
  const appLegalPages: MetadataRoute.Sitemap = apps.flatMap((app) => {
    const pages: MetadataRoute.Sitemap = [];
    if (app.privacyPath) {
      pages.push({
        url: `${BASE_URL}${app.privacyPath}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      });
    }
    if (app.termsPath) {
      pages.push({
        url: `${BASE_URL}${app.termsPath}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      });
    }
    return pages;
  });

  /* ── Selene (standalone page, not in apps array) ── */
  const selenePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/selene`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/selene/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/selene/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [
    ...staticPages,
    ...appDetailPages,
    ...appLegalPages,
    ...selenePages,
  ];
}

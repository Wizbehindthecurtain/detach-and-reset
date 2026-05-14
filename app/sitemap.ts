// Sitemap generator. Two-page site: roofer landing at root + corporate
// landing at /enterprise. Both update on similar cadence; root has slightly
// higher priority as the canonical brand entry.

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://detachandreset.com",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://detachandreset.com/enterprise",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

// Sitemap generator. Two-page site: roofer landing at root + corporate
// landing at /enterprise. Both update on similar cadence; root has slightly
// higher priority as the canonical brand entry.

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://removalandreinstall.energy",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://removalandreinstall.energy/enterprise",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

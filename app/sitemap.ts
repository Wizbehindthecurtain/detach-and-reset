// Sitemap generator. Single-page site for v1 — one entry, the root URL.
// When/if blog posts, case studies, or a /partners landing page get added
// later, append entries here.

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://detachandreset.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}

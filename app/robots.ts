// robots.txt generator — allows everything except /api routes. Points crawlers
// at the sitemap.

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://removalandreinstall.energy/sitemap.xml",
    host: "https://removalandreinstall.energy",
  };
}

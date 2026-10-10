import type { MetadataRoute } from "next";
import { services, site } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

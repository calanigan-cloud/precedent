import type { MetadataRoute } from "next";
import { getAllSegments } from "@/lib/segments";

const BASE_URL = "https://precedent-steel-chi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const segments = getAllSegments();

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...segments.map((segment) => ({
      url: `${BASE_URL}/segments/${segment.slug}`,
      lastModified: new Date(segment.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

import type { MetadataRoute } from "next";

function getSiteUrl() {
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  return site?.replace(/\/$/, "") || "http://localhost:3000";
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // block area sensitif (kalau ada)
        disallow: ["/auth/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
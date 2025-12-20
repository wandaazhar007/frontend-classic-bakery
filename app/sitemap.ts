import type { MetadataRoute } from "next";

type Product = {
  id: string;
  updatedAt?: string; // ISO string (sesuai backend products)
};

type ProductsResponse = {
  success: boolean;
  data: Product[];
};

function getSiteUrl() {
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  // fallback dev kalau lupa set env
  return site?.replace(/\/$/, "") || "http://localhost:3000";
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

  // ✅ Static routes (sesuai folder kamu)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "daily", priority: 1 },
    { url: `${siteUrl}/produk`, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/tentang-kami`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/cara-pemesanan`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/kebijakan`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/refund`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/syarat-ketentuan`, changeFrequency: "yearly", priority: 0.3 },
  ];

  // ✅ Dynamic product routes
  if (!apiBase) return staticRoutes;

  try {
    // ambil banyak agar sitemap lengkap (max 100 sesuai API)
    const res = await fetch(`${apiBase}/api/products?limit=100`, {
      // sitemap boleh caching biar stabil & cepat
      next: { revalidate: 3600 },
    });

    if (!res.ok) return staticRoutes;

    const json = (await res.json()) as ProductsResponse;
    if (!json?.success || !Array.isArray(json.data)) return staticRoutes;

    const productRoutes: MetadataRoute.Sitemap = json.data.map((p) => ({
      url: `${siteUrl}/produk/${p.id}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

    return [...staticRoutes, ...productRoutes];
  } catch {
    return staticRoutes;
  }
}
import type { Metadata } from "next";
import Script from "next/script";
import ProductsPageClient from "./ProductsPageClient";
import styles from "./ProductsPage.module.scss";

type ProductImage = { url: string; isPrimary?: boolean };

type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription?: string;
  description?: string;
  price: number;
  images?: ProductImage[];
  category?: string;
};

type ProductsResponse = {
  success: boolean;
  data: Product[];
  nextCursor?: string | null;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Produk Classic Bakery | Bolu Jadul & Gift Bolu di Tasikmalaya",
  description:
    "Lihat daftar produk Classic Bakery: bolu jadul dan gift bolu untuk hadiah & acara. Area layanan Tasikmalaya (Mangkubumi radius 30 km). Pesan via WhatsApp, pre-order H-1.",
  alternates: { canonical: "/produk" },
  openGraph: {
    title: "Produk Classic Bakery | Bolu Jadul & Gift Bolu di Tasikmalaya",
    description:
      "Bolu jadul dan gift bolu dengan rasa hangat rumahan. Area Tasikmalaya (Mangkubumi radius 30 km).",
    url: `${siteUrl}/produk`,
    siteName: "Classic Bakery",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/kue-bolu-2.png", alt: "Produk Classic Bakery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Produk Classic Bakery",
    description:
      "Bolu jadul & gift bolu Classic Bakery. Pesan mudah via WhatsApp.",
    images: ["/images/kue-bolu-2.png"],
  },
};

async function getInitialProducts(): Promise<{
  products: Product[];
  nextCursor: string | null;
}> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) return { products: [], nextCursor: null };

  try {
    const res = await fetch(`${baseUrl}/api/products?limit=6`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return { products: [], nextCursor: null };

    const json = (await res.json()) as ProductsResponse;
    if (!json?.success || !Array.isArray(json.data)) {
      return { products: [], nextCursor: null };
    }

    return {
      products: json.data.slice(0, 6),
      nextCursor: json.nextCursor ?? null,
    };
  } catch {
    return { products: [], nextCursor: null };
  }
}

export default async function ProdukPage() {
  const initial = await getInitialProducts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Produk",
            item: `${siteUrl}/produk`,
          },
        ],
      },
      {
        "@type": "WebPage",
        name: "Produk Classic Bakery",
        url: `${siteUrl}/produk`,
        description:
          "Daftar produk Classic Bakery: bolu jadul dan gift bolu untuk area Tasikmalaya (Mangkubumi radius 30 km).",
        isPartOf: { "@type": "WebSite", name: "Classic Bakery", url: siteUrl },
      },
      {
        "@type": "ItemList",
        name: "Produk Classic Bakery",
        itemListElement: initial.products.map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: p.name,
          url: `${siteUrl}/produk/${p.slug || p.id}`,
        })),
      },
    ],
  };

  return (
    <section className={styles.page}>
      <Script
        id="produk-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Produk Classic Bakery</h1>
          <p className={styles.subtitle}>
            Pilih <strong>Bolu Jadul</strong> dan <strong>Gift Bolu</strong>{" "}
            favoritmu untuk dinikmati sendiri atau hadiah. Melayani{" "}
            <strong>pickup</strong> & <strong>delivery</strong> area{" "}
            <strong>Tasikmalaya</strong> (Mangkubumi radius 30 km). Minimum order{" "}
            <strong>1</strong>, estimasi <strong>pre-order H-1</strong>.
          </p>
        </header>

        <ProductsPageClient
          initialProducts={initial.products}
          initialNextCursor={initial.nextCursor}
        />
      </div>
    </section>
  );
}
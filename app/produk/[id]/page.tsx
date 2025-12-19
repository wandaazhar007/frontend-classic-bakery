import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./ProductDetailPage.module.scss";

type ProductImage = { url: string; isPrimary?: boolean };

type Product = {
  id: string;
  name: string;
  shortDescription?: string;
  description?: string;
  price: number;
  images?: ProductImage[];
  category?: string;
};

type ProductResponse = {
  success: boolean;
  data: Product;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function formatIDR(value: number) {
  try {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `Rp ${value}`;
  }
}

function pickImage(p: Product) {
  const imgs = p.images ?? [];
  const primary = imgs.find((x) => x.isPrimary)?.url ?? imgs[0]?.url;
  return primary || "/images/kue-bolu-2.png";
}

async function getProduct(id: string): Promise<Product | null> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) return null;

  try {
    const res = await fetch(`${baseUrl}/api/products/${id}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;

    const json = (await res.json()) as ProductResponse;
    if (!json?.success || !json.data) return null;

    return json.data;
  } catch {
    return null;
  }
}

function safeDescription(p: Product) {
  const text =
    p.shortDescription?.trim() ||
    p.description?.trim() ||
    `Detail produk ${p.name} dari Classic Bakery.`;
  return text.length > 160 ? `${text.slice(0, 157)}...` : text;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProduct(params.id);
  if (!product) {
    return {
      title: "Produk tidak ditemukan | Classic Bakery",
      robots: { index: false, follow: false },
    };
  }

  const img = pickImage(product);

  return {
    title: `${product.name} | Classic Bakery`,
    description: safeDescription(product),
    alternates: { canonical: `/produk/${product.id}` },
    openGraph: {
      title: `${product.name} | Classic Bakery`,
      description: safeDescription(product),
      url: `${siteUrl}/produk/${product.id}`,
      images: [{ url: img, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Classic Bakery`,
      description: safeDescription(product),
      images: [img],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  if (!product) return notFound();

  const waText = encodeURIComponent(
    `Hallo, saya mau pesan produk ini (${product.name})`
  );
  const whatsappHref = `https://wa.me/628381428240?text=${waText}`;

  const img = pickImage(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Produk",
            item: `${siteUrl}/produk`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: `${siteUrl}/produk/${product.id}`,
          },
        ],
      },
      {
        "@type": "Product",
        name: product.name,
        description: product.description || product.shortDescription || product.name,
        image: [img].map((x) => (x.startsWith("http") ? x : `${siteUrl}${x}`)),
        brand: { "@type": "Brand", name: "Classic Bakery" },
        offers: {
          "@type": "Offer",
          priceCurrency: "IDR",
          price: product.price,
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/produk/${product.id}`,
        },
      },
    ],
  };

  return (
    <section className={styles.section}>
      <Script
        id="product-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link className={styles.crumb} href="/">
            Home
          </Link>
          <span className={styles.sep} aria-hidden="true">
            /
          </span>
          <Link className={styles.crumb} href="/produk">
            Produk
          </Link>
          <span className={styles.sep} aria-hidden="true">
            /
          </span>
          <span className={styles.current} aria-current="page">
            {product.name}
          </span>
        </nav>

        <div className={styles.grid}>
          <div className={styles.media}>
            <div className={styles.imageWrap}>
              <Image
                src={img}
                alt={`Foto ${product.name} dari Classic Bakery`}
                fill
                sizes="(max-width: 768px) 92vw, 48rem"
                priority
              />
            </div>
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{product.name}</h1>

            {product.shortDescription ? (
              <p className={styles.short}>{product.shortDescription}</p>
            ) : null}

            {product.description ? (
              <p className={styles.desc}>{product.description}</p>
            ) : null}

            <p className={styles.price}>{formatIDR(product.price)}</p>

            <a
              className={styles.cta}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan sekarang
            </a>

            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Info Pemesanan</h2>
              <ul className={styles.infoList}>
                <li>
                  <strong>Area:</strong> Mangkubumi radius 30 km
                </li>
                <li>
                  <strong>Metode:</strong> Delivery & pickup
                </li>
                <li>
                  <strong>Minimum order:</strong> 1
                </li>
                <li>
                  <strong>Estimasi:</strong> pre-order H-1
                </li>
                <li>
                  <strong>Pembayaran:</strong> cash, transfer, DANA, GoPay
                </li>
              </ul>
            </div>

            <div className={styles.hoursCard}>
              <h2 className={styles.infoTitle}>Jam Operasional</h2>
              <ul className={styles.infoList}>
                <li>Senin–Jumat: 08:00 – 17:00</li>
                <li>Sabtu: 10:00 – 15:00</li>
                <li>Minggu: 10:00 – 15:00</li>
              </ul>
            </div>

            <Link className={styles.back} href="/produk">
              ← Kembali ke halaman Produk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
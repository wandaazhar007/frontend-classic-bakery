import Link from "next/link";
import Image from "next/image";
import styles from "./featuredProduct.module.scss";

type ProductImage = {
  url: string;
  isPrimary?: boolean;
};

type Product = {
  id: string;
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

function getPrimaryImage(product: Product) {
  const images = product.images ?? [];
  const primary = images.find((img) => img.isPrimary)?.url ?? images[0]?.url;
  // fallback aman kalau images kosong
  return primary || "/images/kue-bolu-2.png";
}

export default async function FeaturedProduct() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    return (
      <section className={styles.section} aria-labelledby="featured-title">
        <div className="container">
          <h2 id="featured-title" className={styles.title}>
            Produk Unggulan
          </h2>
          <p className={styles.note}>
            NEXT_PUBLIC_API_BASE_URL belum di-set di <code>.env.local</code>.
          </p>
        </div>
      </section>
    );
  }

  let products: Product[] = [];

  try {
    const res = await fetch(`${baseUrl}/api/products?limit=6`, {
      // SEO-friendly: render server-side + tetap update berkala
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const json = (await res.json()) as ProductsResponse;
      if (json?.success && Array.isArray(json.data)) {
        products = json.data.slice(0, 6);
      }
    }
  } catch {
    // biarkan fallback UI
  }

  return (
    <section className={styles.section} aria-labelledby="featured-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="featured-title" className={styles.title}>
            Featured Products — Bolu Jadul & Gift Bolu Favorit
          </h2>

          <p className={styles.subtitle}>
            Pesan untuk <strong>pickup</strong> atau <strong>delivery</strong>{" "}
            khusus area <strong>Mangkubumi</strong> (radius 30 km). Minimum order{" "}
            <strong>1</strong>, estimasi <strong>pre-order H-1</strong>. Pembayaran
            bisa <strong>cash</strong>, <strong>transfer</strong>,{" "}
            <strong>DANA</strong>, dan <strong>GoPay</strong>.
          </p>

          <div className={styles.headerActions}>
            <Link className={styles.allLink} href="/produk">
              Lihat semua produk →
            </Link>
          </div>
        </header>

        {products.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>Produk belum bisa ditampilkan.</p>
            <p className={styles.emptyDesc}>
              Pastikan backend berjalan di <strong>http://localhost:5013</strong>{" "}
              dan endpoint <strong>GET /api/products</strong> bisa diakses.
            </p>
          </div>
        ) : (
          <div className={styles.grid} role="list" aria-label="Daftar produk unggulan">
            {products.map((p) => (
              <Link
                key={p.id}
                href={`/produk/${p.id}`}
                className={styles.card}
                role="listitem"
                aria-label={`Lihat detail produk ${p.name}`}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={getPrimaryImage(p)}
                    alt={`Foto ${p.name} dari Classic Bakery`}
                    fill
                    sizes="(max-width: 768px) 92vw, (max-width: 1024px) 44vw, 30vw"
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.price}>{formatIDR(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
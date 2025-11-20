import Image from "next/image";
import styles from "./FeaturedProductsPreview.module.scss";

type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const FEATURED_PRODUCTS: Product[] = [
  {
    name: "Bolu Jadul Lembut",
    description: "Rasa klasik yang bikin hangat kenangan keluarga.",
    price: "Rp 45.000",
    image: "/images/kue-bolu-1.png",
  },
  {
    name: "Bolu Pandan",
    description: "Aroma wangi pandan yang lembut dan menenangkan.",
    price: "Rp 49.000",
    image: "/images/kue-bolu-2.png",
  },
  {
    name: "Bolu Coklat Moist",
    description: "Favorit semua umur—coklat kaya rasa & lembut.",
    price: "Rp 42.000",
    image: "/images/kue-bolu-3.png",
  },
  {
    name: "Bolu Keju Spesial",
    description:
      "Perpaduan rasa manis dan gurih keju yang mewah, cocok untuk segala suasana.",
    price: "Rp 50.000",
    image: "/images/kue-bolu-4.png",
  },
  {
    name: "Bolu Marmer Klasik",
    description:
      "Kombinasi cantik dua rasa (vanilla & cokelat) dalam setiap gigitan.",
    price: "Rp 41.000",
    image: "/images/kue-bolu-5.png",
  },
  {
    name: "Bolu Strawberry Bliss",
    description:
      "Kue bolu dengan fermentasi strawberry asli, tekstur unik dan aroma asli buah.",
    price: "Rp 40.000",
    image: "/images/kue-bolu-6.png",
  },
];

export default function FeaturedProductsPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* LEFT BOX – product slider */}
          <div className={styles.productsPane}>
            <div className={styles.productsHeader}>
              <span className={styles.miniLabel}>Preview Menu</span>
              <h2 className={styles.productsTitle}>Bolu Favorit Pelanggan</h2>
            </div>

            <div className={styles.slider} aria-label="Featured products">
              {FEATURED_PRODUCTS.map((product) => (
                <article key={product.name} className={styles.card}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 80vw, 280px"
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{product.name}</h3>
                    <p className={styles.cardPrice}>{product.price}</p>
                    <p className={styles.cardDescription}>
                      {product.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT BOX – headline & tagline */}
          <div className={styles.textPane}>
            <span className={styles.badge}>Featured Products</span>
            <h2 className={styles.heading}>
              Preview rasa andalan Classic Bakery.
            </h2>
            <p className={styles.tagline}>
              Enam pilihan bolu lembut dengan resep rumahan, cocok untuk
              hampers, arisan, atau momen santai bersama keluarga.
            </p>

            <ul className={styles.list}>
              <li>Tekstur lembut dan moist, tidak mudah seret.</li>
              <li>Pilihan rasa klasik hingga premium yang selalu aman dibawa.</li>
              <li>Siap dipesan untuk acara kecil hingga pesanan dalam jumlah besar.</li>
            </ul>

            <p className={styles.note}>
              Ini hanya preview. Semua varian dan detail lengkap bisa kamu lihat
              di halaman produk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
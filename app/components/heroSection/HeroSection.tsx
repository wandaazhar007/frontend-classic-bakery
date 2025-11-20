'use client'
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <div className={`${styles.heroBadge} badge`}>
            Premium bolu • Harga bersahabat
          </div>

          <h1 className={styles.heroTitle}>
            Bolu lembut, manis, dan hangat untuk setiap momen spesial.
          </h1>

          <p className={styles.heroSubtitle}>
            Pilih bolu jadul, bolu kukus, dan premium gift bolu dengan kemasan
            cantik. Pesan online, ambil sendiri, atau kirim ke orang tersayang.
          </p>

          <div className={styles.heroActions}>
            <Link href="/products">
              <button type="button" className={styles.ctaPrimary}>
                Lihat Menu Bolu
              </button>
            </Link>

            <Link href="/about">
              <button type="button" className={styles.ctaSecondary}>
                Kenali Classic Bakery
              </button>
            </Link>
          </div>

          <p className={styles.heroNote}>
            Diproduksi fresh setiap hari • Bisa custom ucapan di packaging
          </p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroCard}>
            <Image
              src="/images/kue-bolu-1.png"
              alt="Bolu cake from Classic Bakery"
              width={360}
              height={260}
            />
            <div className={styles.heroCardInfo}>
              <span>Best Seller</span>
              <strong>Bolu Jadul Classic</strong>
              <span>Mulai dari Rp 45.000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
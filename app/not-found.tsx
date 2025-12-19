import Link from "next/link";
import Image from "next/image";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <section className={styles.section} aria-labelledby="nf-title">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <Image
                src="/images/logo-classic-bakery-circle.png"
                alt="Classic Bakery"
                width={56}
                height={56}
                priority
              />
            </span>
            <span className={styles.brandText}>Classic Bakery</span>
          </div>

          <h1 id="nf-title" className={styles.title}>
            404 — Halaman tidak ditemukan
          </h1>

          <p className={styles.desc}>
            Sepertinya halaman yang kamu cari tidak tersedia. Kamu bisa kembali ke
            halaman utama atau lihat daftar produk kami.
          </p>

          <div className={styles.actions}>
            <Link className={styles.primary} href="/">
              Kembali ke Home
            </Link>
            <Link className={styles.secondary} href="/produk">
              Lihat Produk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
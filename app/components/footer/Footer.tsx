import Link from "next/link";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.brandBlock}>
            <div className={styles.brandName}>Classic Bakery</div>
            <p className={styles.brandText}>
              Bolu jadul, bolu kukus, dan premium gift bolu dengan rasa hangat
              rumahan, dikemas manis untuk setiap momen spesial.
            </p>
          </div>

          <div>
            <div className={styles.columnTitle}>Menu</div>
            <div className={styles.linkList}>
              <Link href="/products?category=bolu-jadul">Bolu Jadul</Link>
              <Link href="/products?category=bolu-kukus">Bolu Kukus</Link>
              <Link href="/products?category=premium-gift">
                Premium Gift Bolu
              </Link>
            </div>
          </div>

          <div>
            <div className={styles.columnTitle}>Bantuan</div>
            <div className={styles.linkList}>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Kontak</Link>
              <Link href="/policies">Kebijakan & Ketentuan</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <span>Build with ❤️ by <strong><Link href="https://wandaazhar.vercel.app/" target="_blank">Wanda Azhar</Link></strong> in Twin Falls, ID. USA</span>
          <span>© {new Date().getFullYear()} Classic Bakery. All rights reserved.</span>
          {/* <span>Design & development by Classic Bakery Studio.</span> */}
        </div>
      </div>
    </footer>
  );
}
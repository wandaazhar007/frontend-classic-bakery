import Link from "next/link";
import styles from "./CtaAboutSection.module.scss";

const WA_LINK =
  "https://wa.me/16464671926?text=Hai%21%20Classic%20Bakery%2C%20Saya%20mau%20pesan%20bolu%20sekarang%20bisa%3F";

export default function CtaAboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <span className={styles.badge}>Siap pesan setelah kenal kami?</span>

          <h2 className={styles.heading}>
            Sudah kenal ceritanya, sekarang waktunya cobain bolunya.
          </h2>

          <p className={styles.tagline}>
            Classic Bakery dibuat dari dapur rumahan dengan rasa premium, harga
            bersahabat, dan ketulusan di setiap loyang. Pesan untuk hadiah,
            keluarga, atau sekadar memanjakan diri—kami siap menemani momen
            manismu.
          </p>

          <div className={styles.actions}>
            {/* Button 1: WhatsApp order */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <button type="button" className={styles.primaryBtn}>
                Order Via WhatsApp
              </button>
            </a>

            {/* Button 2: Products page */}
            <Link href="/products" className={styles.linkButton}>
              <button type="button" className={styles.secondaryBtn}>
                Lihat Product Kami
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
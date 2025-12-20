import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./CtaCaraPemesanan.module.scss";

export default function CtaCaraPemesanan() {
  const waHref =
    "https://wa.me/628381428240?text=" + encodeURIComponent("Halo, classic bakery");

  return (
    <section className={styles.section} aria-labelledby="cta-cara-pesan-title">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.left}>
            <p className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faStar} />
              </span>
              Siap Order?
            </p>

            <h2 id="cta-cara-pesan-title" className={styles.title}>
              Tinggal chat—bolu rumahan & gift bolu siap jadi bintang di momen spesialmu
            </h2>

            <p className={styles.subtitle}>
              Mau <strong>bolu jadul</strong> untuk ngemil, atau <strong>gift bolu</strong> untuk
              hadiah? Kami bantu dari pilih produk sampai atur <strong>pickup/delivery</strong> area{" "}
              <strong>Mangkubumi, Tasikmalaya</strong>.
            </p>

            <div className={styles.points} aria-label="Highlight layanan">
              <span className={styles.point}>
                <FontAwesomeIcon className={styles.pointIcon} icon={faStar} />
                Kemasan manis siap hadiah
              </span>
              <span className={styles.point}>
                <FontAwesomeIcon className={styles.pointIcon} icon={faStar} />
                Pre-order H-1 biar fresh
              </span>
            </div>
          </div>

          <div className={styles.right}>
            <a
              className={styles.primary}
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order via WhatsApp Classic Bakery"
            >
              <span className={styles.btnIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span>Order via WhatsApp</span>
            </a>

            <Link className={styles.secondary} href="/produk" aria-label="Lihat produk Classic Bakery">
              <span className={styles.btnIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faBagShopping} />
              </span>
              <span>Lihat Produk</span>
            </Link>

            <p className={styles.note}>
              Area layanan Mangkubumi (radius 30 km) • Cash / Transfer / DANA / GoPay
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
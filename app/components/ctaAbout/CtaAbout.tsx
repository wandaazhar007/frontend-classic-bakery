import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGift, faStar, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import styles from "./CtaAbout.module.scss";

export default function CtaAbout() {
  const waHref =
    "https://wa.me/628381428240?text=" +
    encodeURIComponent("Halo, classic bakery");

  return (
    <section className={styles.section} aria-labelledby="cta-about-title">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.left}>
            <p className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faStar} />
              </span>
              Final Push
            </p>

            <h2 id="cta-about-title" className={styles.title}>
              Siap kirim <span>gift bolu</span> atau pesan <span>bolu rumahan</span> hari ini?
            </h2>

            <p className={styles.subtitle}>
              Tinggal chat WhatsApp—kami bantu rekomendasikan produk, konfirmasi jadwal{" "}
              <strong>pre-order H-1</strong>, dan atur <strong>pickup/delivery</strong>{" "}
              khusus area <strong>Mangkubumi, Tasikmalaya</strong>.
            </p>

            <div className={styles.points} aria-label="Ringkasan layanan">
              <span className={styles.point}>
                <FontAwesomeIcon className={styles.pointIcon} icon={faGift} />
                Kemasan manis siap hadiah
              </span>
              <span className={styles.point}>
                <FontAwesomeIcon className={styles.pointIcon} icon={faTruckFast} />
                Radius 30 km (Mangkubumi)
              </span>
            </div>
          </div>

          <div className={styles.right}>
            <a
              className={styles.cta}
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order via WhatsApp Classic Bakery"
            >
              <span className={styles.ctaIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span className={styles.ctaText}>Order via WhatsApp</span>
            </a>

            <p className={styles.note}>
              Minimum order 1 • Cash / Transfer / DANA / GoPay • Pre-order H-1
            </p>

            <Link className={styles.secondaryLink} href="/produk">
              Lihat Produk Kami →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
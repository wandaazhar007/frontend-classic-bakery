import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGift, faTruckFast, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./CtaBanner.module.scss";

export default function CtaBanner() {
  const waHref =
    "https://wa.me/628381428240?text=" +
    encodeURIComponent("Halo, Classic Bakery! Saya mau pesan bolu hari ini.");

  return (
    <section className={styles.section} aria-labelledby="cta-banner-title">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className={styles.kickerText}>Final Push</span>
            </div>

            <h2 id="cta-banner-title" className={styles.title}>
              Siap pesan <span>bolu rumahan</span> atau <span>gift bolu</span> hari ini?
            </h2>

            <p className={styles.subtitle}>
              Tinggal chat WhatsApp—kami bantu rekomendasikan produk, konfirmasi jadwal{" "}
              <strong>pre-order H-1</strong>, dan pilih <strong>pickup/delivery</strong>{" "}
              khusus area <strong>Mangkubumi, Tasikmalaya</strong>.
            </p>

            <ul className={styles.points} aria-label="Keunggulan layanan">
              <li className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faGift} />
                </span>
                <span>Kemasan manis, cocok untuk hadiah</span>
              </li>
              <li className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faTruckFast} />
                </span>
                <span>Delivery area: Mangkubumi radius 30 km</span>
              </li>
            </ul>
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
              Respon cepat • Minimum order 1 • Cash / Transfer / DANA / GoPay
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import styles from "./CtaContactSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const WA_LINK =
  "https://wa.me/628381428240?text=Hai%2C%20Classic%20Bakery%21";

const INSTAGRAM_LINK = "https://www.instagram.com/wanda_azharr/";

export default function CtaContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <h2 className={styles.heading}>
            Siap pesan bolu atau mau tanya dulu?
          </h2>

          <p className={styles.tagline}>
            Classic Bakery selalu siap membantu — baik kamu ingin pesan sekarang,
            tanya ketersediaan rasa, konsultasi hampers, atau sekadar cek menu
            terbaru di Instagram.
          </p>

          <div className={styles.actions}>
            {/* Button 1: WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <button className={styles.primaryBtn}>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ marginRight: "0.4rem" }}
                />
                Kontak kami di WhatsApp
              </button>
            </a>

            {/* Button 2: Instagram */}
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <button className={styles.secondaryBtn}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ marginRight: "0.4rem" }}
                />
                Lihat di Instagram
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
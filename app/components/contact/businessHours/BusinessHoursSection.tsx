"use client";

import styles from "./BusinessHoursSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

const WHATSAPP_LINK =
  "https://wa.me/628381428240?text=Hai%2C%20Classic%20Bakery%21";

const INSTAGRAM_LINK = "https://www.instagram.com/wanda_azharr/";

const MAP_LINK =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.32028391128026!2d108.16675377275986!3d-7.339908254283904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f56eaab376031%3A0x615813f9674f8460!2sJl.%20Durma%20No.15%2C%20Cipawitra%2C%20Kec.%20Mangkubumi%2C%20Kab.%20Tasikmalaya%2C%20Jawa%20Barat%2040264%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1763686587555!5m2!1sen!2sus";

export default function BusinessHoursSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* LEFT BOX */}
        <div className={styles.leftBox}>
          <span className={styles.badge}>Hubungi & Kunjungi Classic Bakery</span>

          <h2 className={styles.heading}>
            Satu pesan WhatsApp jauhnya dari bolu favoritmu.
          </h2>

          <p className={styles.tagline}>
            Pesan bolu, tanya ketersediaan rasa, atau konsultasi hampers—tim
            Classic Bakery siap membantu lewat WhatsApp, Instagram, atau datang
            langsung ke toko.
          </p>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactRow}
          >
            <div className={styles.iconWrapWhatsapp}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>WhatsApp</span>
              <span className={styles.contactValue}>+62 838-1428-240</span>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactRow}
          >
            <div className={styles.iconWrapInstagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>Instagram</span>
              <span className={styles.contactValue}>@classicbakery.id</span>
            </div>
          </a>

          {/* Address */}
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactRow}
          >
            <div className={styles.iconWrapLocation}>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>Alamat Toko</span>
              <span className={styles.contactValue}>
                Jl. Gn. Nangka, Desa Cipawitra, Kec. Mangkubumi, Kota
                Tasikmalaya, Jawa Barat, Indonesia
              </span>
            </div>
          </a>

          {/* Business Hours */}
          <div className={styles.hoursBox}>
            <div className={styles.hoursHeader}>
              <div className={styles.iconWrapClock}>
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div>
                <span className={styles.contactLabel}>Jam Operasional</span>
                <span className={styles.contactValue}>
                  Datang atau pesan sesuai jam berikut:
                </span>
              </div>
            </div>

            <ul className={styles.hoursList}>
              <li>
                <span>Senin</span>
                <span>08:00 – 21:00</span>
              </li>
              <li>
                <span>Selasa</span>
                <span>08:00 – 21:00</span>
              </li>
              <li>
                <span>Rabu</span>
                <span>08:00 – 21:00</span>
              </li>
              <li>
                <span>Kamis</span>
                <span>08:00 – 21:00</span>
              </li>
              <li>
                <span>Jumat</span>
                <span>08:00 – 22:00</span>
              </li>
              <li>
                <span>Sabtu</span>
                <span>08:00 – 22:00</span>
              </li>
              <li>
                <span>Minggu</span>
                <span>09:00 – 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT BOX – MAP */}
        <div className={styles.mapCard}>
          <div className={styles.mapWrapper}>
            <iframe
              src={MAP_LINK}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTruckFast,
  faStore,
  faMapLocationDot,
  faClock,
  faMoneyBillWave,
  faCartShopping,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./InfoLayanan.module.scss";

export default function InfoLayanan() {
  return (
    <section className={styles.section} aria-labelledby="info-layanan-title">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>
            <span className={styles.kickerIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faStar} />
            </span>
            Info Layanan
          </p>

          <h2 id="info-layanan-title" className={styles.title}>
            Layanan Classic Bakery: pickup & delivery area Mangkubumi (Tasikmalaya)
          </h2>

          <p className={styles.subtitle}>
            Biar kamu nyaman pesan <strong>bolu rumahan</strong> dan <strong>gift bolu</strong>,
            berikut info layanan, jam operasional, dan metode pembayaran Classic Bakery.
          </p>
        </header>

        <div className={styles.grid} role="list" aria-label="Ringkasan info layanan Classic Bakery">
          {/* Pickup & Delivery */}
          <article className={styles.card} role="listitem" aria-labelledby="layanan-pickup-delivery">
            <div className={styles.cardTop}>
              <span className={styles.cardIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faTruckFast} />
              </span>
              <h3 id="layanan-pickup-delivery" className={styles.cardTitle}>
                Pickup & Delivery
              </h3>
            </div>
            <p className={styles.cardDesc}>
              Kamu bisa pilih <strong>pickup</strong> atau <strong>delivery</strong>. Kami bantu atur
              jadwal supaya bolu sampai dalam kondisi rapi dan siap dinikmati.
            </p>

            <div className={styles.badges} aria-label="Highlight layanan">
              <span className={styles.badge}>
                <FontAwesomeIcon className={styles.badgeIcon} icon={faStore} />
                Pickup tersedia
              </span>
              <span className={styles.badge}>
                <FontAwesomeIcon className={styles.badgeIcon} icon={faTruckFast} />
                Delivery tersedia
              </span>
            </div>
          </article>

          {/* Area layanan */}
          <article className={styles.card} role="listitem" aria-labelledby="layanan-area">
            <div className={styles.cardTop}>
              <span className={styles.cardIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faMapLocationDot} />
              </span>
              <h3 id="layanan-area" className={styles.cardTitle}>
                Area Layanan
              </h3>
            </div>
            <p className={styles.cardDesc}>
              Saat ini kami melayani khusus <strong>Tasikmalaya</strong>, terutama{" "}
              <strong>Mangkubumi</strong> dengan radius <strong>30 km</strong>.
            </p>

            <div className={styles.noteBox}>
              <p className={styles.noteTitle}>Catatan</p>
              <p className={styles.noteText}>
                Untuk memastikan produk tetap fresh & kemasan tetap cantik, kami fokus melayani area dekat.
              </p>
            </div>
          </article>

          {/* Pembayaran & ketentuan */}
          <article className={styles.card} role="listitem" aria-labelledby="layanan-pembayaran">
            <div className={styles.cardTop}>
              <span className={styles.cardIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </span>
              <h3 id="layanan-pembayaran" className={styles.cardTitle}>
                Pembayaran & Ketentuan Order
              </h3>
            </div>

            <ul className={styles.list} aria-label="Pembayaran dan ketentuan">
              <li className={styles.listItem}>
                <span className={styles.bulletIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                </span>
                <span>
                  Pembayaran: <strong>cash</strong>, <strong>transfer</strong>, <strong>DANA</strong>,{" "}
                  <strong>GoPay</strong>.
                </span>
              </li>

              <li className={styles.listItem}>
                <span className={styles.bulletIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
                <span>
                  Minimum order: <strong>1</strong>.
                </span>
              </li>

              <li className={styles.listItem}>
                <span className={styles.bulletIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </span>
                <span>
                  Estimasi: <strong>pre-order H-1</strong> agar bolu diproses fresh.
                </span>
              </li>
            </ul>
          </article>
        </div>

        {/* Jam operasional */}
        <div className={styles.hoursWrap} aria-labelledby="jam-operasional-title">
          <div className={styles.hoursHeader}>
            <span className={styles.hoursIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faClock} />
            </span>
            <h3 id="jam-operasional-title" className={styles.hoursTitle}>
              Jam Operasional
            </h3>
          </div>

          <div className={styles.hoursGrid} role="list" aria-label="Jam operasional Classic Bakery">
            <div className={styles.hourItem} role="listitem">
              <p className={styles.day}>Senin</p>
              <p className={styles.time}>08:00 – 17:00</p>
            </div>
            <div className={styles.hourItem} role="listitem">
              <p className={styles.day}>Selasa</p>
              <p className={styles.time}>08:00 – 17:00</p>
            </div>
            <div className={styles.hourItem} role="listitem">
              <p className={styles.day}>Rabu</p>
              <p className={styles.time}>08:00 – 17:00</p>
            </div>
            <div className={styles.hourItem} role="listitem">
              <p className={styles.day}>Kamis</p>
              <p className={styles.time}>08:00 – 17:00</p>
            </div>
            <div className={styles.hourItem} role="listitem">
              <p className={styles.day}>Jumat</p>
              <p className={styles.time}>08:00 – 17:00</p>
            </div>
            <div className={styles.hourItem} role="listitem">
              <p className={styles.day}>Sabtu</p>
              <p className={styles.time}>10:00 – 15:00</p>
            </div>
            <div className={styles.hourItem} role="listitem">
              <p className={styles.day}>Minggu</p>
              <p className={styles.time}>10:00 – 15:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
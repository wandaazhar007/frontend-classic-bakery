import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMoneyBillWave,
  faBuildingColumns,
  faHandHoldingDollar,
  faShieldHeart,
  faReceipt,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./MetodePembayaran.module.scss";

type PayItem = {
  title: string;
  desc: string;
  icon: any;
};

export default function MetodePembayaran() {
  const items: PayItem[] = [
    {
      title: "Cash (tunai)",
      desc: "Cocok untuk pickup atau saat kurir mengantar. Simple dan cepat.",
      icon: faMoneyBillWave,
    },
    {
      title: "Transfer bank",
      desc: "Rapi untuk bukti pembayaran—kami konfirmasi setelah transfer masuk.",
      icon: faBuildingColumns,
    },
    {
      title: "DANA",
      desc: "Praktis dan cepat, cocok untuk order harian bolu rumahan di Mangkubumi.",
      icon: faHandHoldingDollar,
    },
    {
      title: "GoPay",
      desc: "Pembayaran digital yang nyaman—tinggal bayar, lalu tunggu bolu siap diantar/diambil.",
      icon: faHandHoldingDollar,
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="metode-pembayaran-title">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>
            <span className={styles.kickerIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faStar} />
            </span>
            Metode Pembayaran
          </p>

          <h2 id="metode-pembayaran-title" className={styles.title}>
            Bayar mudah untuk order bolu rumahan & gift bolu
          </h2>

          <p className={styles.subtitle}>
            Classic Bakery menyediakan metode pembayaran yang fleksibel agar kamu bisa fokus
            menikmati <strong>bolu rumahan</strong> yang lembut dan{" "}
            <strong>gift bolu</strong> yang siap hadiah di{" "}
            <strong>Tasikmalaya (Mangkubumi)</strong>.
          </p>
        </header>

        <div className={styles.grid} role="list" aria-label="Daftar metode pembayaran Classic Bakery">
          {items.map((it) => (
            <article key={it.title} className={styles.card} role="listitem">
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true">
                  <FontAwesomeIcon icon={it.icon} />
                </span>
                <h3 className={styles.cardTitle}>{it.title}</h3>
              </div>
              <p className={styles.cardDesc}>{it.desc}</p>
            </article>
          ))}
        </div>

        <div className={styles.notice} aria-label="Catatan pembayaran">
          <div className={styles.noticeIcon} aria-hidden="true">
            <FontAwesomeIcon icon={faShieldHeart} />
          </div>

          <div className={styles.noticeBody}>
            <p className={styles.noticeTitle}>Tips biar proses konfirmasi makin cepat</p>

            <ul className={styles.noticeList} aria-label="Tips konfirmasi pembayaran">
              <li className={styles.noticeItem}>
                <span className={styles.bullet} aria-hidden="true">
                  <FontAwesomeIcon icon={faReceipt} />
                </span>
                <span>
                  Setelah bayar, kirim bukti pembayaran (screenshot) via WhatsApp.
                </span>
              </li>

              <li className={styles.noticeItem}>
                <span className={styles.bullet} aria-hidden="true">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span>
                  Tulis nama produk + jumlah + tanggal ambil/antar supaya order tidak tertukar.
                </span>
              </li>
            </ul>

            <p className={styles.noticeFoot}>
              Kami akan konfirmasi pesanan secepatnya—supaya bolu diproses{" "}
              <strong>fresh</strong> dan kemasan tetap <strong>rapi</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointer,
  faCreditCard,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./CaraPesan.module.scss";

export default function CaraPesan() {
  const waHref =
    "https://wa.me/628381428240?text=" +
    encodeURIComponent("Halo, Classic Bakery! Saya mau pesan bolu.");

  return (
    <section className={styles.section} aria-labelledby="cara-pesan-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="cara-pesan-title" className={styles.title}>
            Cara Pemesanan Classic Bakery
          </h2>
          <p className={styles.subtitle}>
            Mau pesan <strong>bolu rumahan</strong> atau <strong>gift bolu</strong>{" "}
            di area <strong>Mangkubumi, Tasikmalaya</strong>? Gampang—cukup 3 langkah.
          </p>
        </header>

        <div className={styles.steps} role="list" aria-label="Langkah pemesanan">
          <article className={styles.stepCard} role="listitem">
            <div className={styles.stepTop}>
              <span className={styles.stepNumber} aria-hidden="true">
                1
              </span>
              <span className={styles.stepIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faHandPointer} />
              </span>
            </div>
            <h3 className={styles.stepTitle}>Pilih produk</h3>
            <p className={styles.stepDesc}>
              Lihat varian bolu favoritmu, cek harga, lalu pilih yang paling cocok
              untuk hadiah atau dinikmati sendiri.
            </p>
            <div className={styles.stepAction}>
              <Link className={styles.linkBtn} href="/produk">
                Lihat Produk
              </Link>
            </div>
          </article>

          <article className={styles.stepCard} role="listitem">
            <div className={styles.stepTop}>
              <span className={styles.stepNumber} aria-hidden="true">
                2
              </span>
              <span className={styles.stepIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
            </div>
            <h3 className={styles.stepTitle}>Chat WhatsApp</h3>
            <p className={styles.stepDesc}>
              Kirim nama produk & jumlahnya. Kami bantu konfirmasi stok, jadwal
              <strong> pre-order H-1</strong>, serta opsi <strong>pickup/delivery</strong>.
            </p>
            <div className={styles.stepAction}>
              <a
                className={styles.primaryBtn}
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat WhatsApp Classic Bakery"
              >
                <span className={styles.btnIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>
                Chat WhatsApp
              </a>
            </div>
          </article>

          <article className={styles.stepCard} role="listitem">
            <div className={styles.stepTop}>
              <span className={styles.stepNumber} aria-hidden="true">
                3
              </span>
              <span className={styles.stepIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faCreditCard} />
              </span>
            </div>
            <h3 className={styles.stepTitle}>Bayar & ambil/antar</h3>
            <p className={styles.stepDesc}>
              Pembayaran bisa <strong>cash</strong>, <strong>transfer</strong>,{" "}
              <strong>DANA</strong>, atau <strong>GoPay</strong>. Setelah itu, tinggal{" "}
              <strong>pickup</strong> atau <strong>kami antar</strong> (radius 30 km).
            </p>

            <div className={styles.badgeRow} aria-label="Info layanan">
              <span className={styles.badge}>
                <FontAwesomeIcon icon={faTruckFast} />
                <span>Delivery area: Mangkubumi 30 km</span>
              </span>
              <span className={styles.badge}>
                <FontAwesomeIcon icon={faCreditCard} />
                <span>Metode bayar fleksibel</span>
              </span>
            </div>
          </article>
        </div>

        <div className={styles.bottomCta}>
          <p className={styles.bottomText}>
            Siap pesan hari ini? Klik tombol berikut untuk mulai chat.
          </p>
          <a
            className={styles.bottomBtn}
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mulai pesan via WhatsApp Classic Bakery"
          >
            <span className={styles.btnIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
            Order via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
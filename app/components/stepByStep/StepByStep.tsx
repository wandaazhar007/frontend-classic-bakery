import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBagShopping,
  faComments,
  faTruckFast,
  faClock,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./StepByStep.module.scss";

type StepItem = {
  num: string;
  title: string;
  desc: string;
  icon: any;
};

export default function StepByStep() {
  const waHref =
    "https://wa.me/628381428240?text=" +
    encodeURIComponent("Halo, classic bakery");

  const steps: StepItem[] = [
    {
      num: "01",
      title: "Pilih produk favoritmu",
      desc: "Pilih Bolu Jadul atau Gift Bolu yang kamu suka. Cek foto, harga, dan deskripsi—biar yakin sebelum order.",
      icon: faBagShopping,
    },
    {
      num: "02",
      title: "Chat kami via WhatsApp",
      desc: "Kirim pesan, tulis nama produk + jumlah + tanggal. Kami bantu rekomendasi rasa & konfirmasi ketersediaan.",
      icon: faWhatsapp,
    },
    {
      num: "03",
      title: "Bayar, lalu pickup / delivery",
      desc: "Pembayaran bisa cash, transfer, DANA, atau GoPay. Setelah itu tinggal pilih pickup atau delivery (Mangkubumi radius 30 km).",
      icon: faTruckFast,
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="step-title">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>
            <span className={styles.kickerIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faStar} />
            </span>
            Step by Step
          </p>

          <h2 id="step-title" className={styles.title}>
            Cara order bolu rumahan Classic Bakery—mudah & cepat
          </h2>

          <p className={styles.subtitle}>
            Kami bikin proses pemesanan simpel: pilih produk → chat WhatsApp → bayar & ambil/antar.
            Cocok untuk kamu yang cari <strong>bolu rumahan</strong> dan <strong>gift bolu</strong>{" "}
            di <strong>Tasikmalaya (Mangkubumi)</strong>.
          </p>
        </header>

        <ol className={styles.grid} aria-label="Langkah pemesanan Classic Bakery">
          {steps.map((s) => (
            <li key={s.num} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.num} aria-hidden="true">
                  {s.num}
                </span>

                <span className={styles.icon} aria-hidden="true">
                  <FontAwesomeIcon icon={s.icon} />
                </span>
              </div>

              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className={styles.meta} aria-label="Info penting pemesanan">
          <div className={styles.metaItem}>
            <span className={styles.metaIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faClock} />
            </span>
            <div className={styles.metaText}>
              <p className={styles.metaTitle}>Estimasi</p>
              <p className={styles.metaDesc}>Pre-order H-1 agar bolu diproses fresh.</p>
            </div>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faMoneyBillWave} />
            </span>
            <div className={styles.metaText}>
              <p className={styles.metaTitle}>Pembayaran</p>
              <p className={styles.metaDesc}>Cash, transfer, DANA, GoPay.</p>
            </div>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faComments} />
            </span>
            <div className={styles.metaText}>
              <p className={styles.metaTitle}>Bantuan order</p>
              <p className={styles.metaDesc}>Kami bantu rekomendasi & konfirmasi jadwal.</p>
            </div>
          </div>
        </div>

        <div className={styles.actions} aria-label="Aksi cepat">
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
        </div>
      </div>
    </section>
  );
}
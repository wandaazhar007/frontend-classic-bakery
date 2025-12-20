"use client";

import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircleQuestion,
  faChevronDown,
  faTruckFast,
  faClock,
  faMoneyBillWave,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./FaqCaraPemesanan.module.scss";

type FaqItem = {
  q: string;
  a: string;
  icon: any;
};

export default function FaqCaraPemesanan() {
  const items: FaqItem[] = useMemo(
    () => [
      {
        q: "Gimana cara order Classic Bakery paling cepat?",
        a: "Cara paling cepat: pilih produk → chat WhatsApp → konfirmasi pesanan. Tulis nama produk, jumlah, tanggal pickup/delivery, dan alamat (kalau delivery). Kami balas untuk konfirmasi.",
        icon: faWhatsapp,
      },
      {
        q: "Apakah bisa delivery dan pickup?",
        a: "Bisa keduanya. Kamu boleh pickup, atau minta delivery khusus area Mangkubumi (Tasikmalaya) dengan radius sekitar 30 km.",
        icon: faTruckFast,
      },
      {
        q: "Kenapa harus pre-order H-1?",
        a: "Karena kami mengutamakan bolu rumahan yang fresh dan teksturnya lembut. Dengan pre-order H-1, pesananmu diproses sesuai jadwal dan kemasan tetap rapi (terutama untuk gift bolu).",
        icon: faClock,
      },
      {
        q: "Metode pembayaran apa saja yang tersedia?",
        a: "Pembayaran bisa cash (tunai), transfer bank, DANA, dan GoPay. Setelah bayar, kirim bukti pembayaran via WhatsApp untuk mempercepat konfirmasi.",
        icon: faMoneyBillWave,
      },
      {
        q: "Minimal pesan berapa?",
        a: "Minimum order adalah 1. Kamu bisa pesan satu produk untuk ngemil sendiri, atau beberapa box untuk acara dan hadiah.",
        icon: faBoxOpen,
      },
      {
        q: "Kalau mau gift bolu untuk hadiah, bisa dibantu pilih paketnya?",
        a: "Bisa. Ceritakan kebutuhanmu (acara apa, untuk siapa, budget), nanti kami bantu rekomendasikan gift bolu yang paling cocok, termasuk saran kemasan agar tampil cantik saat diberikan.",
        icon: faCircleQuestion,
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section} aria-labelledby="faq-order-title">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>
            <span className={styles.kickerIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faStar} />
            </span>
            FAQ Cara Pemesanan
          </p>

          <h2 id="faq-order-title" className={styles.title}>
            Pertanyaan yang sering ditanya sebelum order
          </h2>

          <p className={styles.subtitle}>
            Biar kamu makin yakin pesan <strong>bolu rumahan</strong> dan{" "}
            <strong>gift bolu</strong> Classic Bakery di{" "}
            <strong>Tasikmalaya (Mangkubumi)</strong>.
          </p>
        </header>

        <div className={styles.accordion} role="list" aria-label="FAQ Cara Pemesanan">
          {items.map((it, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-order-content-${idx}`;
            const buttonId = `faq-order-button-${idx}`;

            return (
              <div key={it.q} className={styles.item} role="listitem">
                <button
                  id={buttonId}
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
                >
                  <span className={styles.qLeft}>
                    <span className={styles.qIcon} aria-hidden="true">
                      <FontAwesomeIcon icon={it.icon} />
                    </span>
                    <span className={styles.qText}>{it.q}</span>
                  </span>

                  <span
                    className={`${styles.chev} ${isOpen ? styles.chevOpen : ""}`}
                    aria-hidden="true"
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ""}`}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answerText}>{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faStar,
  faClock,
  faTruckFast,
  faMoneyBillWave,
  faChevronDown,
  faBoxOpen,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./FaqMini.module.scss";

type FaqItem = {
  q: string;
  a: string;
};

export default function FaqMini() {
  const faqs: FaqItem[] = useMemo(
    () => [
      {
        q: "Apakah bolunya fresh setiap hari?",
        a: "Ya. Kami fokus pada rasa yang konsisten dan bolu yang terasa fresh. Karena itu, kami menerapkan sistem pre-order H-1 agar kualitas bolu rumahan tetap maksimal saat sampai ke kamu.",
      },
      {
        q: "Bisa delivery dan pickup?",
        a: "Bisa keduanya. Kamu bisa pickup atau kami antar untuk area Mangkubumi (radius 30 km). Konfirmasi titik lokasi dan jadwalnya langsung lewat WhatsApp ya.",
      },
      {
        q: "Metode pembayarannya apa saja?",
        a: "Pembayaran fleksibel: cash, transfer, DANA, dan GoPay. Setelah konfirmasi pesanan, kami kirim detail pembayaran yang kamu pilih.",
      },
      {
        q: "Minimal order berapa dan kapan harus pesan?",
        a: "Minimum order 1. Untuk hasil terbaik (fresh & rapi), kami sarankan pre-order H-1. Kalau butuh mendadak, tetap boleh tanya dulu—selama slot masih tersedia.",
      },
      {
        q: "Bisa request untuk hadiah (gift bolu) dengan kemasan yang lebih cantik?",
        a: "Bisa. Gift bolu Classic Bakery memang kami siapkan dengan kemasan manis dan rapi. Kamu bisa tulis catatan (misalnya: “untuk ulang tahun”) saat chat WhatsApp, nanti kami bantu sesuaikan.",
      },
      {
        q: "Berapa lama estimasi proses pesanan sampai siap diambil/diantar?",
        a: "Estimasi terbaik mengikuti pre-order H-1. Setelah konfirmasi, kami kirim info jam siap pickup atau jadwal antar (khusus area Mangkubumi) agar kamu bisa atur waktu dengan nyaman.",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(idx: number) {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }

  // SEO: FAQPage schema
  const faqJsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    };
  }, [faqs]);

  return (
    <section className={styles.section} aria-labelledby="faq-mini-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container">
        <div className={styles.grid}>
          {/* LEFT COLUMN */}
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className={styles.kickerText}>FAQ Mini</span>
            </div>

            <h2 id="faq-mini-title" className={styles.title}>
              Pertanyaan yang paling sering ditanya
            </h2>

            <p className={styles.subtitle}>
              Biar kamu makin yakin pesan <strong>bolu rumahan</strong> dan{" "}
              <strong>gift bolu</strong> dari Classic Bakery. Kami melayani area{" "}
              <strong>Mangkubumi, Tasikmalaya</strong> dengan proses yang simpel dan
              ramah.
            </p>

            <div className={styles.infoList} aria-label="Info singkat layanan">
              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faTruckFast} />
                </span>
                <div className={styles.infoText}>
                  <p className={styles.infoTitle}>Area layanan</p>
                  <p className={styles.infoDesc}>Mangkubumi radius 30 km</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </span>
                <div className={styles.infoText}>
                  <p className={styles.infoTitle}>Sistem pesanan</p>
                  <p className={styles.infoDesc}>Pre-order H-1 (recommended)</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                </span>
                <div className={styles.infoText}>
                  <p className={styles.infoTitle}>Metode bayar</p>
                  <p className={styles.infoDesc}>Cash • Transfer • DANA • GoPay</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faBoxOpen} />
                </span>
                <div className={styles.infoText}>
                  <p className={styles.infoTitle}>Cocok untuk</p>
                  <p className={styles.infoDesc}>Hadiah • Acara • Ngopi santai</p>
                </div>
              </div>
            </div>

            <p className={styles.note}>
              Masih ada pertanyaan? Chat kami, respon cepat dan ramah. 😊
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.right} aria-label="FAQ accordion">
            <div className={styles.accordion}>
              {faqs.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.q} className={styles.item}>
                    <button
                      type="button"
                      className={styles.trigger}
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                    >
                      <span className={styles.qIcon} aria-hidden="true">
                        <FontAwesomeIcon icon={faCircleQuestion} />
                      </span>
                      <span className={styles.question}>{item.q}</span>
                      <span
                        className={`${styles.chev} ${isOpen ? styles.chevOpen : ""}`}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </button>

                    <div
                      id={`faq-panel-${idx}`}
                      className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                      role="region"
                      aria-label={item.q}
                    >
                      <div className={styles.panelInner}>
                        <div className={styles.panelContent}>
                          <p className={styles.answer}>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <p className={styles.hint}>
              Tips: klik pertanyaan untuk membuka jawaban.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
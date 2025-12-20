"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "../../faq/FaqPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faChevronDown,
  faClock,
  faTruck,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type FaqItem = {
  q: string;
  a: string;
};

type Props = {
  faqs: FaqItem[];
};

const WA_NUMBER = "628381428240";
const WA_TEXT = "Halo, classic bakery";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

export default function FaqPageClient({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // refs untuk hitung tinggi konten (biar tutup 100% rapih)
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  const setPanelRef = (idx: number) => (el: HTMLDivElement | null) => {
    panelRefs.current[idx] = el;
  };

  const openHeights = useMemo(() => {
    // map current heights on demand (safe)
    return faqs.map((_, idx) => {
      const el = panelRefs.current[idx];
      if (!el) return 0;
      return el.scrollHeight;
    });
  }, [faqs, openIndex]); // openIndex trigger recalculation when toggled

  // update height ketika resize (kalau jawaban wrapping berubah)
  useEffect(() => {
    function onResize() {
      // trigger re-render by setting same value (works because state update)
      setOpenIndex((prev) => prev);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>
            <span className={styles.kickerIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faCircleQuestion} />
            </span>
            FAQ Classic Bakery
          </p>

          <h1 id="faq-title" className={styles.title}>
            Pertanyaan yang Sering Ditanyakan (FAQ)
          </h1>

          <p className={styles.subtitle}>
            Cari jawaban cepat seputar <strong>bolu rumahan</strong> &{" "}
            <strong>gift bolu</strong> Classic Bakery—mulai dari cara pesan,
            area delivery <strong>Mangkubumi Tasikmalaya</strong>, jam buka,
            sampai pembayaran.
          </p>

          <div className={styles.infoStrip} aria-label="Ringkasan layanan">
            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <div>
                <p className={styles.infoLabel}>Jam Buka</p>
                <p className={styles.infoValue}>
                  Senin–Jumat 08.00–17.00 • Sabtu–Minggu 10.00–15.00
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faTruck} />
              </span>
              <div>
                <p className={styles.infoLabel}>Area</p>
                <p className={styles.infoValue}>Mangkubumi radius ± 30 km</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </span>
              <div>
                <p className={styles.infoLabel}>Bayar</p>
                <p className={styles.infoValue}>Cash • Transfer • DANA • GoPay</p>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.card}>
          <div className={styles.accordion} role="region" aria-label="FAQ Accordion">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              const maxH = isOpen ? openHeights[idx] : 0;

              return (
                <div key={item.q} className={styles.item}>
                  <button
                    type="button"
                    className={styles.trigger}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className={styles.qText}>{item.q}</span>

                    <span
                      className={`${styles.chev} ${isOpen ? styles.chevOpen : ""}`}
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${idx}`}
                    className={styles.panel}
                    role="region"
                    aria-label={`Jawaban: ${item.q}`}
                    style={{ maxHeight: `${maxH}px` }}
                  >
                    <div ref={setPanelRef(idx)} className={styles.panelInner}>
                      <p className={styles.answer}>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.ctaBox}>
            <p className={styles.ctaTitle}>Masih ada pertanyaan?</p>
            <p className={styles.ctaDesc}>
              Chat kami di WhatsApp—kami bantu rekomendasi bolu yang paling pas untuk momen kamu.
            </p>

            <a
              className={styles.waButton}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.waIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span>Chat WhatsApp Classic Bakery</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
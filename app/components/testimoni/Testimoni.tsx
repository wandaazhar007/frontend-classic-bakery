"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Testimoni.module.scss";

type Review = {
  name: string;
  text: string;
  rating: number; // 1-5
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Testimoni() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: Review[] = useMemo(
    () => [
      {
        name: "Rani S.",
        rating: 5,
        text: "Bolu rumahan-nya lembut banget dan rasanya konsisten. Aku pesan untuk keluarga di Mangkubumi, Tasikmalaya—semua suka!",
      },
      {
        name: "Dika Pratama",
        rating: 5,
        text: "Gift bolu-nya kemasannya manis dan rapi, kelihatan premium. Cocok buat hadiah tanpa perlu repot bungkus lagi.",
      },
      {
        name: "Maya Putri",
        rating: 5,
        text: "Pre-order H-1 bikin bolunya terasa fresh. Teksturnya moist, wanginya enak, dan manisnya pas (nggak bikin enek).",
      },
      {
        name: "Asep Ridwan",
        rating: 5,
        text: "Saya cari bolu Tasikmalaya yang enak tapi harga ramah—ini pas banget. Delivery cepat, admin responsif via WhatsApp.",
      },
      {
        name: "Nia Rahma",
        rating: 5,
        text: "Pesan untuk acara kecil di rumah—datangnya rapi, rasanya hangat rumahan. Anak-anak juga doyan, cepat habis!",
      },
      {
        name: "Fajar Hidayat",
        rating: 5,
        text: "Kue bolu-nya cocok buat oleh-oleh dan hadiah. Rasanya premium, tapi tetap affordable. Fix repeat order.",
      },
    ],
    []
  );

  // SEO: Reviews Schema (LocalBusiness/Bakery)
  const reviewsJsonLd = useMemo(() => {
    const bestRating = 5;
    const ratingValue =
      reviews.reduce((acc, r) => acc + r.rating, 0) / Math.max(1, reviews.length);

    return {
      "@context": "https://schema.org",
      "@type": "Bakery",
      name: "Classic Bakery",
      areaServed: "Mangkubumi, Kota Tasikmalaya, Jawa Barat, Indonesia",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Jl. Gn. Nangka, Desa Cipawitra, Kec. Mangkubumi, Kota Tasikmalaya",
        addressLocality: "Tasikmalaya",
        addressRegion: "Jawa Barat",
        addressCountry: "ID",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: Number.isFinite(ratingValue)
          ? ratingValue.toFixed(1)
          : "5.0",
        reviewCount: String(reviews.length),
        bestRating: String(bestRating),
        worstRating: "1",
      },
      review: reviews.map((r) => ({
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: String(r.rating),
          bestRating: String(bestRating),
          worstRating: "1",
        },
        author: { "@type": "Person", name: r.name },
        reviewBody: r.text,
      })),
    };
  }, [reviews]);

  // Update active dot based on scroll position
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const firstCard = el.querySelector<HTMLElement>(`[data-card="true"]`);
      if (!firstCard) return;

      const cardRect = firstCard.getBoundingClientRect();
      const cardWidth = cardRect.width;

      const styles = window.getComputedStyle(el);
      const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

      const step = cardWidth + gap;
      if (step <= 0) return;

      const idx = clamp(Math.round(el.scrollLeft / step), 0, reviews.length - 1);
      setActiveIndex(idx);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => el.removeEventListener("scroll", onScroll);
  }, [reviews.length]);

  function scrollToIndex(nextIndex: number) {
    const el = trackRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>(`[data-card="true"]`);
    if (!firstCard) return;

    const cardRect = firstCard.getBoundingClientRect();
    const cardWidth = cardRect.width;

    const styles = window.getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

    const step = cardWidth + gap;
    const idx = clamp(nextIndex, 0, reviews.length - 1);

    el.scrollTo({
      left: idx * step,
      behavior: "smooth",
    });

    setActiveIndex(idx);
  }

  function prev() {
    scrollToIndex(activeIndex - 1);
  }

  function next() {
    scrollToIndex(activeIndex + 1);
  }

  return (
    <section className={styles.section} aria-labelledby="testimoni-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />

      <div className="container">
        <header className={styles.header}>
          <div className={styles.headText}>
            <h2 id="testimoni-title" className={styles.title}>
              Testimoni Pelanggan Classic Bakery
            </h2>
            <p className={styles.subtitle}>
              Ulasan nyata dari pelanggan yang pesan <strong>bolu rumahan</strong>{" "}
              dan <strong>gift bolu</strong> di area{" "}
              <strong>Mangkubumi, Tasikmalaya</strong>.
            </p>
          </div>

          <div className={styles.controls} aria-label="Kontrol slider testimoni">
            <button
              type="button"
              className={styles.ctrlBtn}
              onClick={prev}
              aria-label="Geser ke kiri"
              disabled={activeIndex === 0}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button
              type="button"
              className={styles.ctrlBtn}
              onClick={next}
              aria-label="Geser ke kanan"
              disabled={activeIndex === reviews.length - 1}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </header>

        <div className={styles.slider} aria-label="Slider testimoni">
          <div className={styles.track} ref={trackRef}>
            {reviews.map((r, idx) => (
              <article
                key={`${r.name}-${idx}`}
                className={styles.card}
                data-card="true"
                aria-label={`Ulasan dari ${r.name}`}
              >
                <div className={styles.cardTop}>
                  <span className={styles.quote} aria-hidden="true">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </span>

                  <div className={styles.stars} aria-label={`Rating ${r.rating} dari 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={styles.star} aria-hidden="true">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    ))}
                  </div>
                </div>

                <p className={styles.text}>{r.text}</p>

                <footer className={styles.footer}>
                  <span className={styles.name}>{r.name}</span>
                  <span className={styles.badge}>Verified customer</span>
                </footer>
              </article>
            ))}
          </div>

          <div className={styles.dots} role="tablist" aria-label="Navigasi testimoni">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Lihat testimoni ${i + 1}`}
                aria-selected={i === activeIndex}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
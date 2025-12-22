"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./HeroMain.module.scss";

export default function HeroMain() {
  const images = useMemo(
    () => [
      { src: "/images/toko-classic-bakery-1.png", alt: "Classic Bakery - toko" },
      { src: "/images/kue-bolu-6.png", alt: "Bolu Classic Bakery" },
      { src: "/images/kue-bolu-2.png", alt: "Kue bolu Classic Bakery" },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Swipe state
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const waText = encodeURIComponent("Halo, classic bakery");
  const whatsappHref = `https://wa.me/628381428240?text=${waText}`;

  function goTo(index: number) {
    const safe = (index + images.length) % images.length;
    setActiveIndex(safe);
  }

  function next() {
    goTo(activeIndex + 1);
  }

  function prev() {
    goTo(activeIndex - 1);
  }

  // Auto slide every 2s
  useEffect(() => {
    const t = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(t);
  }, [images.length]);

  // Keyboard support when slider focused
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    touchDeltaX.current = 0;
  }

  function onTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current == null) return;
    const currentX = e.touches[0]?.clientX ?? 0;
    touchDeltaX.current = currentX - touchStartX.current;
  }

  function onTouchEnd() {
    const dx = touchDeltaX.current;
    // threshold
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  }

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`${styles.inner} container`}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <p className={styles.kicker}>
            Bolu rumahan Tasikmalaya • Cocok untuk hadiah & acara
          </p>

          <h1 id="hero-title" className={styles.title}>
            Classic Bakery — <span>Bolu Jadul,</span> <span>Bolu Kukus</span> &
            <span className={styles.highlight}> Premium Gift Bolu</span>
          </h1>

          <p className={styles.subTitle}>
            Rasa hangat rumahan, tekstur lembut, dan kemasan manis untuk setiap
            momen spesial.
          </p>

          <p className={styles.desc}>
            Pesan bolu dan kue favoritmu untuk dinikmati sendiri atau dijadikan
            hadiah. Kami fokus pada rasa yang konsisten, tampilan yang rapi, dan
            pengalaman order yang simpel—langsung via WhatsApp.
          </p>

          <div className={styles.ctaRow}>
            <a
              className={styles.ctaPrimary}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order via WhatsApp"
            >
              <span className={styles.ctaIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span>Order via WhatsApp</span>
            </a>

            <Link className={styles.ctaSecondary} href="/produk">
              <span className={styles.ctaIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faBagShopping} />
              </span>
              <span>Lihat Produk Kami</span>
            </Link>
          </div>

          <div className={styles.points} aria-label="Unique selling points">
            <div className={styles.pointCard}>
              <p className={styles.pointTitle}>Rasa konsisten</p>
              <p className={styles.pointDesc}>
                Bolu lembut dengan cita rasa rumahan yang nyaman di lidah.
              </p>
            </div>

            <div className={styles.pointCard}>
              <p className={styles.pointTitle}>Siap untuk hadiah</p>
              <p className={styles.pointDesc}>
                Kemasan manis dan rapi—pas untuk momen spesial & acara keluarga.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className={styles.right}>
          <div
            className={styles.slider}
            ref={sliderRef}
            tabIndex={0}
            aria-label="Galeri foto Classic Bakery"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={styles.track}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {images.map((img) => (
                <div className={styles.slide} key={img.src}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 44rem"
                    priority={img.src === images[0].src}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className={`${styles.navBtn} ${styles.navPrev}`}
              onClick={prev}
              aria-label="Foto sebelumnya"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button
              type="button"
              className={`${styles.navBtn} ${styles.navNext}`}
              onClick={next}
              aria-label="Foto selanjutnya"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <div className={styles.dots} aria-label="Pilih foto">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Tampilkan foto ${i + 1}`}
                  aria-current={i === activeIndex ? "true" : "false"}
                />
              ))}
            </div>
          </div>

          {/* <p className={styles.sliderHint}>
            Geser foto ke kiri/kanan atau klik tombol panah.
          </p> */}
        </div>
      </div>
    </section>
  );
}
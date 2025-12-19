import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./HeroAbout.module.scss";

export default function HeroAbout() {
  const waHref =
    "https://wa.me/628381428240?text=" +
    encodeURIComponent("Halo, classic bakery");

  return (
    <section className={styles.section} aria-labelledby="about-hero-title">
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <p className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className={styles.kickerText}>Tentang Classic Bakery</span>
            </p>

            <h1 id="about-hero-title" className={styles.title}>
              Kisah Manis di Balik Classic Bakery
            </h1>

            <p className={styles.subheadline}>
              Bolu rumahan yang dibuat sepenuh hati, untuk menemani setiap momen keluarga.
            </p>

            <p className={styles.description}>
              Classic Bakery lahir dari dapur kecil yang penuh cinta. Kami menghadirkan{" "}
              <strong>bolu rumahan</strong> yang lembut dengan rasa premium namun tetap{" "}
              <strong>harga bersahabat</strong>—cocok untuk dinikmati sendiri maupun{" "}
              <strong>gift bolu</strong> untuk orang tersayang. Melayani{" "}
              <strong>pickup</strong> dan <strong>delivery</strong> khusus area{" "}
              <strong>Mangkubumi, Tasikmalaya</strong>.
            </p>

            <div className={styles.ctaRow} aria-label="Tombol aksi utama">
              <a
                className={styles.ctaPrimary}
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order via WhatsApp Classic Bakery"
              >
                <span className={styles.ctaIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>
                <span>Order via WhatsApp</span>
              </a>

              <Link className={styles.ctaSecondary} href="/produk" aria-label="Lihat produk Classic Bakery">
                <span className={styles.ctaIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faBagShopping} />
                </span>
                <span>Lihat Produk Kami</span>
              </Link>
            </div>

            <div className={styles.points} aria-label="Keunggulan utama">
              <div className={styles.point}>
                <span className={styles.pointDot} aria-hidden="true" />
                <p className={styles.pointText}>
                  <strong>Bahan premium</strong>, rasa konsisten—tetap ramah di kantong.
                </p>
              </div>

              <div className={styles.point}>
                <span className={styles.pointDot} aria-hidden="true" />
                <p className={styles.pointText}>
                  <strong>Gift-ready</strong> & siap antar: area <strong>Mangkubumi</strong> (radius 30 km).
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right} aria-label="Foto Classic Bakery">
            <div className={styles.imageWrap}>
              <Image
                src="/images/toko-classic-bakery-1.png"
                alt="Toko Classic Bakery di Tasikmalaya (Mangkubumi) — bolu rumahan & gift bolu"
                fill
                priority
                sizes="(max-width: 768px) 92vw, (max-width: 1024px) 44vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
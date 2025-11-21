import Image from "next/image";
import styles from "./BrandOverviewSection.module.scss";

export default function BrandOverviewSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* LEFT BOX — TEXT */}
        <div className={styles.textBox}>
          <span className={styles.badge}>Tentang Kami</span>

          <h1 className={styles.heading}>
            Kisah Manis di Balik <br /> Classic Bakery.
          </h1>

          <p className={styles.tagline}>
            Bolu premium yang dibuat dengan ketulusan dari hati—lembut, manis
            pas, dan tetap ramah di kantong.
          </p>

          <p className={styles.description}>
            Classic Bakery lahir dari dapur kecil dengan satu tujuan sederhana:
            menghadirkan rasa rumahan yang hangat untuk setiap keluarga. Kami
            percaya bahwa kebahagiaan tidak harus mahal. Karena itu, setiap bolu
            dibuat fresh setiap hari menggunakan bahan pilihan agar aman dinikmati
            siapa saja. Dari hadiah untuk orang tersayang hingga suguhan untuk
            momen sederhana di rumah—Classic Bakery selalu siap menemani
            momen-momen kecil yang layak dirayakan.
          </p>
        </div>

        {/* RIGHT BOX — IMAGE */}
        <div className={styles.imageCard}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/toko-classic-bakery-1.png"
              alt="Classic Bakery Store"
              fill
              sizes="(max-width: 768px) 90vw, 450px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
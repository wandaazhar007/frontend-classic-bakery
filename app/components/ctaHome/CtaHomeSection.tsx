import Link from "next/link";
import styles from "./CtaHomeSection.module.scss";

const CTA_CARDS = [
  {
    title: "Butuh bolu lembut untuk hari ini?",
    text: "Pesan bolu premium rasa rumahan untuk teman ngopi, arisan, atau kumpul keluarga malam ini.",
  },
  {
    title: "Mau kirim hadiah manis yang berkesan?",
    text: "Classic Bakery siap bantu kamu kirimkan bolu dalam kemasan cantik, cocok untuk hadiah dan hampers.",
  },
  {
    title: "Rencanakan momen spesial tanpa ribet.",
    text: "Dari ulang tahun sampai acara kantor, kamu bisa pesan bolu dalam jumlah kecil atau besar dengan mudah.",
  },
];

const WA_LINK =
  "https://wa.me/16464671926?text=Hai%21%20Classic%20Bakery%2C%20Saya%20mau%20pesan%20bolu%20sekarang%20bisa%3F";

export default function CtaHomeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.badge}>Siap pesan sekarang?</span>
          <h2 className={styles.heading}>
            Biar Classic Bakery yang urus bolu, kamu fokus ke momennya.
          </h2>
          <p className={styles.tagline}>
            Dengan bahan premium, harga bersahabat, dan kemasan rapi siap
            hadiah, kamu bisa pesan bolu kapan saja—untuk keluarga, sahabat,
            atau diri sendiri.
          </p>
        </div>

        <div className={styles.slider} aria-label="Call to action cards">
          {CTA_CARDS.map((card) => (
            <article key={card.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>

              <div className={styles.actions}>
                {/* Button 1: Order via WhatsApp */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  <button type="button" className={styles.primaryBtn}>
                    Order Via WhatsApp
                  </button>
                </a>

                {/* Button 2: Lihat Produk Kami */}
                <Link href="/products" className={styles.linkButton}>
                  <button type="button" className={styles.secondaryBtn}>
                    Lihat Produk Kami
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
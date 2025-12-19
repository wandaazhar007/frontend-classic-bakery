import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCakeCandles,
  faGift,
  faBoxOpen,
  faHandHoldingHeart,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./BrandPromise.module.scss";

type PromiseItem = {
  title: string;
  desc: string;
  icon: any;
};

export default function BrandPromise() {
  const items: PromiseItem[] = [
    {
      title: "Rasa premium, harga bersahabat",
      desc: "Kami jaga kualitas bahan dan rasa, tanpa bikin harga jadi berat. Cocok untuk bolu rumahan sehari-hari maupun gift bolu.",
      icon: faStar,
    },
    {
      title: "Tekstur lembut & manisnya pas",
      desc: "Bolu dibuat supaya lembut, ringan, dan tidak ‘enek’—enak untuk semua umur, dari anak sampai orang tua.",
      icon: faCakeCandles,
    },
    {
      title: "Gift-ready: kemasan cantik siap hadiah",
      desc: "Setiap pesanan bisa tampil rapi dan manis—pas untuk bingkisan keluarga, acara kantor, atau hadiah sederhana yang berkesan.",
      icon: faGift,
    },
    {
      title: "Bebas pilih kemasan",
      desc: "Mau box, mika, atau gift box—kamu bisa pilih sesuai kebutuhan (makan sendiri vs untuk hadiah/hampers).",
      icon: faBoxOpen,
    },
    {
      title: "Dibuat oleh baker rumahan berpengalaman",
      desc: "Bukan produksi massal. Kami bikin dengan tangan sendiri dan detail—karena rasa rumahan yang hangat itu ada di prosesnya.",
      icon: faHandHoldingHeart,
    },
    {
      title: "Dibuat fresh setiap hari",
      desc: "Agar kualitas tetap maksimal, kami utamakan pesanan yang fresh dan rapi saat sampai ke kamu—terutama untuk bolu Tasikmalaya area Mangkubumi.",
      icon: faClock,
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="brand-promise-title">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>
            <span className={styles.kickerIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faStar} />
            </span>
            Brand Promise
          </p>

          <h2 id="brand-promise-title" className={styles.title}>
            Janji Classic Bakery di setiap bolu yang kamu pesan
          </h2>

          <p className={styles.subtitle}>
            Kami ingin setiap irisan terasa hangat seperti di rumah:{" "}
            <strong>bolu rumahan</strong> yang lembut, cocok untuk{" "}
            <strong>gift bolu</strong>, dengan kualitas yang konsisten untuk kamu di{" "}
            <strong>Mangkubumi, Tasikmalaya</strong>.
          </p>
        </header>

        <div className={styles.grid} role="list" aria-label="Poin brand promise Classic Bakery">
          {items.map((it) => (
            <article key={it.title} className={styles.card} role="listitem">
              <div className={styles.icon} aria-hidden="true">
                <FontAwesomeIcon icon={it.icon} />
              </div>
              <h3 className={styles.cardTitle}>{it.title}</h3>
              <p className={styles.cardDesc}>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
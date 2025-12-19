import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faGift,
  faCakeCandles,
  faLeaf,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./KenapaPilihKami.module.scss";

type Point = {
  title: string;
  desc: string;
  icon: any;
};

export default function KenapaPilihKami() {
  const points: Point[] = [
    {
      title: "Rasa konsisten, bolu rumahan yang selalu jadi favorit",
      desc: "Bolu rumahan Classic Bakery dibuat dengan resep yang konsisten—lembut, wangi, dan nyaman di lidah untuk dinikmati sendiri atau jadi hadiah.",
      icon: faHeart,
    },
    {
      title: "Kemasan manis untuk gift bolu yang terlihat premium",
      desc: "Gift bolu kami dikemas rapi dan cantik—cocok untuk kejutan kecil, hampers, dan momen spesial tanpa ribet.",
      icon: faGift,
    },
    {
      title: "Cocok untuk acara keluarga & kantor",
      desc: "Bolu Tasikmalaya ini pas untuk arisan, ulang tahun, pengajian, atau snack meeting. Tinggal pilih varian, kami siapkan.",
      icon: faCakeCandles,
    },
    {
      title: "Fresh dibuat untuk pre-order H-1",
      desc: "Kami fokus pada kualitas dan kesegaran. Sistem pre-order H-1 membantu bolu datang dalam kondisi terbaik.",
      icon: faLeaf,
    },
    {
      title: "Harga ramah, rasa tetap istimewa",
      desc: "Harga bersahabat untuk semua kalangan—tetap enak, tetap cantik, tetap layak jadi hadiah.",
      icon: faWallet,
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="why-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="why-title" className={styles.title}>
            Kenapa Pilih Classic Bakery?
          </h2>
          <p className={styles.subtitle}>
            Dari <strong>bolu rumahan</strong> yang konsisten sampai{" "}
            <strong>gift bolu</strong> yang cantik, Classic Bakery hadir sebagai
            pilihan <strong>bolu Tasikmalaya</strong> yang praktis untuk hadiah,
            acara, atau dinikmati sendiri.
          </p>
        </header>

        <div className={styles.grid} role="list" aria-label="Alasan memilih Classic Bakery">
          {points.map((p) => (
            <article key={p.title} className={styles.card} role="listitem">
              <div className={styles.iconWrap} aria-hidden="true">
                <FontAwesomeIcon icon={p.icon} />
              </div>

              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
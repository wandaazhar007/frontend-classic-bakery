import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./ReviewsSection.module.scss";

type Review = {
  name: string;
  text: string;
};

const REVIEWS: Review[] = [
  {
    name: "Dina",
    text: "Bolunya lembut banget dan manisnya pas. Keluarga langsung habis dalam sekali duduk!",
  },
  {
    name: "Rizky",
    text: "Harga bersahabat, tapi rasa dan kemasannya berasa premium. Cocok banget buat hantaran.",
  },
  {
    name: "Caroline",
    text: "Pesan untuk ulang tahun kantor, semua bilang bolunya moist dan tidak bikin seret.",
  },
  {
    name: "Ayu",
    text: "Suka karena selalu dibuat fresh. Wangi bolunya berasa banget begitu kotak dibuka.",
  },
  {
    name: "Hendra",
    text: "Adminnya ramah, bantu pilih varian dan kemasan sesuai budget. Pelayanan juara.",
  },
  {
    name: "Mira",
    text: "Kemasannya cantik, tinggal kasih kartu ucapan. Praktis banget buat hadiah mendadak.",
  },
  {
    name: "Andi",
    text: "Sudah repeat order beberapa kali, rasa konsisten enak. Anak-anak di rumah selalu request.",
  },
  {
    name: "Lala",
    text: "Classic Bakery bikin momen kumpul keluarga terasa lebih hangat. Recommended banget!",
  },
];

export default function ReviewsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.badge}>Apa kata mereka?</span>
          <h2 className={styles.heading}>
            Review hangat dari pelanggan Classic Bakery.
          </h2>
          <p className={styles.tagline}>
            Dari hadiah, ulang tahun, hingga kumpul santai di rumah—bolu
            Classic Bakery sudah menemani banyak momen spesial dengan rasa yang
            premium, harga yang tetap bersahabat.
          </p>
        </div>

        <div className={styles.slider} aria-label="Customer reviews">
          {REVIEWS.map((review) => (
            <article key={review.name} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FontAwesomeIcon key={idx} icon={faStar} />
                ))}
              </div>
              <p className={styles.text}>&quot;{review.text}&quot;</p>
              <p className={styles.name}>— {review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
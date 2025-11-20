import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faLeaf,
  faGift,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./WhyChooseUsSection.module.scss";

const reasons = [
  {
    icon: faGem,
    title: "Rasa premium, harga bersahabat",
    text: "Bolu dibuat dengan bahan pilihan dan resep premium, tanpa menaikkan harga berlebihan—ramah kantong untuk keluarga.",
  },
  {
    icon: faLeaf,
    title: "Selalu fresh setiap hari",
    text: "Dipanggang fresh sesuai pesanan, bukan stok lama. Tekstur lembut, moist, dan siap dinikmati kapan saja.",
  },
  {
    icon: faGift,
    title: "Siap untuk hadiah & momen spesial",
    text: "Kemasan cantik dan rapi, cocok sebagai hadiah, hampers, atau oleh-oleh yang terlihat premium namun tetap hangat.",
  },
  {
    icon: faHeart,
    title: "Hangat, tulus, & kekeluargaan",
    text: "Dibuat dengan ketulusan seperti di dapur rumah sendiri—layanan ramah, siap membantu tiap kebutuhan pesananmu.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.badge}>Kenapa Classic Bakery?</span>
          <h2 className={styles.heading}>
            Karena setiap bolu dibuat premium, tapi tetap terasa rumahan.
          </h2>
          <p className={styles.tagline}>
            Classic Bakery menggabungkan bahan berkualitas, harga terjangkau,
            dan layanan hangat, sehingga kamu bisa berbagi bolu di setiap
            momen—tanpa harus takut kantong jebol.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason) => (
            <article key={reason.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <FontAwesomeIcon icon={reason.icon} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardText}>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
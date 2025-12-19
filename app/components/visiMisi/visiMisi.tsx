import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBullseye,
  faFlagCheckered,
  faHandHoldingHeart,
  faShieldHeart,
  faRepeat,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./VisiMisi.module.scss";

export default function VisiMisi() {
  return (
    <section className={styles.section} aria-labelledby="visi-misi-title">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>
            <span className={styles.kickerIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faStar} />
            </span>
            Visi & Misi
          </p>

          <h2 id="visi-misi-title" className={styles.title}>
            Visi, Misi, dan Nilai yang kami pegang
          </h2>

          <p className={styles.subtitle}>
            Biar kamu makin yakin pesan <strong>bolu rumahan</strong> dan{" "}
            <strong>gift bolu</strong> dari Classic Bakery di{" "}
            <strong>Tasikmalaya (Mangkubumi)</strong>—kami membangun brand ini dengan
            prinsip yang jelas dan konsisten.
          </p>
        </header>

        <div className={styles.grid}>
          {/* Vision */}
          <article className={styles.card} aria-labelledby="visi-title">
            <div className={styles.cardTop}>
              <span className={styles.cardIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faBullseye} />
              </span>
              <h3 id="visi-title" className={styles.cardTitle}>
                Vision
              </h3>
            </div>

            <p className={styles.cardDesc}>
              Menjadi bakery rumahan terpercaya yang menghadirkan rasa premium dengan
              harga bersahabat untuk seluruh keluarga Indonesia.
            </p>
          </article>

          {/* Mission */}
          <article className={styles.card} aria-labelledby="misi-title">
            <div className={styles.cardTop}>
              <span className={styles.cardIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faFlagCheckered} />
              </span>
              <h3 id="misi-title" className={styles.cardTitle}>
                Mission
              </h3>
            </div>

            <ul className={styles.list} aria-label="Misi Classic Bakery">
              <li className={styles.listItem}>
                <span className={styles.bulletIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faShieldHeart} />
                </span>
                <span>Menggunakan bahan premium tanpa menaikkan harga berlebihan.</span>
              </li>

              <li className={styles.listItem}>
                <span className={styles.bulletIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faRepeat} />
                </span>
                <span>Menyajikan bolu fresh setiap hari dengan rasa yang konsisten.</span>
              </li>

              <li className={styles.listItem}>
                <span className={styles.bulletIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faHandHoldingHeart} />
                </span>
                <span>Menjadi pilihan utama untuk hadiah & oleh-oleh yang berkesan.</span>
              </li>

              <li className={styles.listItem}>
                <span className={styles.bulletIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>Membangun brand yang dekat, ramah, dan tulus.</span>
              </li>
            </ul>
          </article>

          {/* Values */}
          <article className={styles.card} aria-labelledby="values-title">
            <div className={styles.cardTop}>
              <span className={styles.cardIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <h3 id="values-title" className={styles.cardTitle}>
                Brand Values
              </h3>
            </div>

            <div className={styles.values} role="list" aria-label="Nilai brand Classic Bakery">
              <span className={styles.valueChip} role="listitem">
                <FontAwesomeIcon className={styles.valueChipIcon} icon={faHandHoldingHeart} />
                Ketulusan
              </span>

              <span className={styles.valueChip} role="listitem">
                <FontAwesomeIcon className={styles.valueChipIcon} icon={faShieldHeart} />
                Kualitas
              </span>

              <span className={styles.valueChip} role="listitem">
                <FontAwesomeIcon className={styles.valueChipIcon} icon={faStar} />
                Kehangatan
              </span>

              <span className={styles.valueChip} role="listitem">
                <FontAwesomeIcon className={styles.valueChipIcon} icon={faRepeat} />
                Konsistensi
              </span>

              <span className={styles.valueChip} role="listitem">
                <FontAwesomeIcon className={styles.valueChipIcon} icon={faWallet} />
                Aksesibilitas (harga terjangkau)
              </span>
            </div>

            <p className={styles.valueNote}>
              Nilai-nilai ini yang bikin Classic Bakery tetap terasa “rumahan”, meski
              tampil rapi dan siap jadi <strong>gift bolu</strong>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
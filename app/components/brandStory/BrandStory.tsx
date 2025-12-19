import Link from "next/link";
import styles from "./BrandStory.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function BrandStory() {
  return (
    <section className={styles.section} aria-labelledby="brand-story-title">
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT: Story */}
          <div className={styles.left}>
            <p className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faStar} />
              </span>
              Brand Story
            </p>

            <h2 id="brand-story-title" className={styles.title}>
              Lahir dari dapur kecil, dibuat untuk momen yang besar
            </h2>

            <p className={styles.subheadline}>
              Classic Bakery menghadirkan <strong>bolu rumahan</strong> yang lembut,
              hangat, dan terasa premium—tetap <strong>ramah di kantong</strong>.
            </p>

            <div className={styles.story}>
              <p>
                Classic Bakery bermula dari kebiasaan membuat bolu untuk keluarga sendiri.
                Dari sana, kami ingin membagikan rasa yang “rumahan”—lembut, wangi, dan
                menenangkan—kepada lebih banyak orang, terutama yang mencari{" "}
                <strong>bolu Tasikmalaya</strong> dengan kualitas yang konsisten.
              </p>

              <p>
                Setiap adonan kami olah dengan teliti memakai bahan pilihan, karena kami
                percaya kue yang dibuat dengan ketulusan akan terasa berbeda. Dan untuk
                momen spesial, kami siapkan <strong>gift bolu</strong> dengan kemasan yang
                manis—siap jadi hadiah tanpa perlu repot.
              </p>

              <p>
                Di Classic Bakery, bolu bukan sekadar kue. Ia adalah bentuk kecil dari
                perhatian—untuk teman ngopi, untuk keluarga, untuk acara, atau untuk hadiah
                sederhana yang membuat hari seseorang jadi lebih hangat.
              </p>
            </div>

            <div className={styles.ctaRow} aria-label="Aksi selanjutnya">
              <Link href="/produk" className={styles.ctaSecondary}>
                Lihat Produk Kami →
              </Link>
            </div>
          </div>

          {/* RIGHT: Highlights (SEO-friendly supporting facts) */}
          <aside className={styles.right} aria-label="Ringkasan nilai Classic Bakery">
            <div className={styles.card}>
              <p className={styles.cardTitle}>Fokus Produk</p>
              <p className={styles.cardDesc}>
                Andalan kami: <strong>Bolu Jadul</strong> & <strong>Gift Bolu</strong>.
                Rasa klasik yang bikin hangat, kemasan cantik siap hadiah.
              </p>
            </div>

            <div className={styles.card}>
              <p className={styles.cardTitle}>Area Layanan</p>
              <p className={styles.cardDesc}>
                Pickup & delivery khusus <strong>Mangkubumi, Tasikmalaya</strong>{" "}
                (radius <strong>30 km</strong>).
              </p>
            </div>

            <div className={styles.card}>
              <p className={styles.cardTitle}>Cara Pesan</p>
              <p className={styles.cardDesc}>
                Sistem <strong>pre-order H-1</strong> agar kualitas bolu rumahan tetap fresh
                saat sampai ke kamu.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
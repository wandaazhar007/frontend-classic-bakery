import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.topRow}>
          <div className={styles.brandBlock}>
            <div className={styles.brandName}>Classic Bakery</div>
            <p className={styles.tagline}>Bolu lembut, rasa rumahan, siap jadi hadiah manis.</p>
          </div>

          <div className={styles.columns}>
            <div>
              <h4>Menu</h4>
              <ul>
                <li>Produk</li>
                <li>Galeri</li>
                <li>Testimoni</li>
              </ul>
            </div>
            <div>
              <h4>Bantuan</h4>
              <ul>
                <li>Cara pesan</li>
                <li>Pengiriman</li>
                <li>Kontak</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <span>© {year} Classic Bakery. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
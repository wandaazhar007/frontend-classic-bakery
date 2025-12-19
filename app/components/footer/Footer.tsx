import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationArrow,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  const waText = encodeURIComponent("Hallo, Classic Bakery");
  const whatsappLink = `https://wa.me/628381428240?text=${waText}`;

  return (
    <footer className={styles.footer} aria-labelledby="footer-title">
      <h2 id="footer-title" className={styles.srOnly}>
        Footer
      </h2>

      <div className={`${styles.top} container`}>
        {/* LEFT */}
        <div className={styles.left}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandLogo}>
              <Image
                src="/images/logo-classic-bakery-circle.png"
                alt="Classic Bakery logo"
                width={44}
                height={44}
              />
            </span>
            <span className={styles.brandName}>Classic Bakery</span>
          </Link>

          <p className={styles.desc}>
            Bolu jadul, bolu kukus, dan premium gift bolu dengan rasa hangat
            rumahan, dikemas manis untuk setiap momen spesial.
          </p>

          <div className={styles.social} aria-label="Social links">
            <a
              className={styles.socialBtn}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp Classic Bakery"
              title="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a
              className={styles.socialBtn}
              href="https://www.instagram.com/wanda_azharr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Classic Bakery"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              className={styles.socialBtn}
              href="https://maps.app.goo.gl/odVcs58scJ2ceVmZ8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lokasi Classic Bakery di Google Maps"
              title="Google Maps"
            >
              <FontAwesomeIcon icon={faLocationArrow} />
            </a>
          </div>
        </div>

        {/* MIDDLE */}
        <nav className={styles.middle} aria-label="Footer navigation">
          <div className={styles.linksGrid}>
            <ul className={styles.linkCol}>
              <li>
                <Link className={styles.link} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/produk">
                  Produk
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/tentang-kami">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/cara-pemesanan">
                  Cara Pesan
                </Link>
              </li>
            </ul>

            <ul className={styles.linkCol}>
              <li>
                <Link className={styles.link} href="/faq">
                  Faq
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/kebijakan">
                  Kebijakan
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/syarat-ketentuan">
                  Syarat &amp; Ketentuan
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/pengembalian-dana">
                  Refund
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* RIGHT */}
        <div className={styles.right}>
          <h3 className={styles.rightTitle}>Kontak</h3>

          <address className={styles.address}>
            <p>
              Jl. Gn. Nangka, Desa Cipawitra, Kec. Mangkubumi, Kota Tasikmalaya,
              Jawa Barat, Indonesia
            </p>

            <p>
              <FontAwesomeIcon icon={faWhatsapp} className={styles.iconLink} />
              WhatsApp:{" "}
              <Link
                className={styles.inlineLink}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                +62 838-1428-240
              </Link>
            </p>

            <p>
              <FontAwesomeIcon icon={faEnvelope} className={styles.iconLink} />
              Email:{" "}
              <Link className={styles.inlineLink} href="mailto:admin@classicbakery.com">
                admin@classicbakery.com
              </Link>
            </p>
          </address>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <div className={`${styles.bottomInner} container`}>
          <p className={styles.bottomLeft}>
            Build with ❤️ by{" "}
            <Link
              className={styles.author}
              href="https://wandaazhar.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wanda Azhar
            </Link>{" "}
            in Detroit, MI. USA
          </p>

          <p className={styles.bottomRight}>
            © {year} Classic Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
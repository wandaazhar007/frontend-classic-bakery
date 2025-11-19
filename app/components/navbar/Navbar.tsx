"use client";

import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCake, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.logoIcon}>
            <FontAwesomeIcon icon={faCake} />
          </span>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Classic Bakery</span>
            <span className={styles.tagline}>Bahan premium yang tulus dari hati</span>
          </div>
        </Link>

        <nav className={styles.navLinks}>
          <Link href="/products">Produk</Link>
          <Link href="/gallery">Galeri</Link>
          <Link href="/testimonials">Testimoni</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/cart" aria-label="Lihat keranjang" className={styles.iconButton}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span className={styles.cartBadge}>0</span>
          </Link>
          <Link href="/auth/login" aria-label="Masuk akun" className={styles.iconButton}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
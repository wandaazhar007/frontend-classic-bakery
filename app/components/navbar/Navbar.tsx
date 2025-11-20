"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Menu" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.inner}>
          {/* Brand + Logo */}
          <Link href="/" className={styles.brand}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/logo-classic-bakery-cake.png"
                alt="Classic Bakery"
                fill
                sizes="120px"
                priority
              />
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>Classic Bakery</span>
              <span className={styles.brandTagline}>
                Premium bolu, harga bersahabat
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className={styles.navLinks} aria-label="Main navigation">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className={styles.actionsDesktop}>
            <Link href="/cart">
              <button type="button" className={styles.cartBtn}>
                <FontAwesomeIcon icon={faShoppingBag} />
                <span>Cart</span>
              </button>
            </Link>
            <Link href="/auth/login">
              <button type="button" className={styles.primaryBtn}>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ marginRight: "0.35rem" }}
                />
                Masuk
              </button>
            </Link>
          </div>

          {/* Mobile actions: user dropdown + hamburger */}
          <div className={styles.actionsMobile}>
            <button
              type="button"
              className={styles.iconButton}
              onClick={toggleUserMenu}
              aria-label="User & cart menu"
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button
              type="button"
              className={styles.iconButton}
              onClick={toggleSidebar}
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={isSidebarOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown for login + cart */}
        {isUserMenuOpen && (
          <div className={styles.userDropdown}>
            <button
              type="button"
              className={styles.userDropdownItem}
              onClick={closeUserMenu}
            >
              <Link href="/cart">
                <span>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    style={{ marginRight: "0.4rem" }}
                  />
                  Cart
                </span>
              </Link>
            </button>
            <button
              type="button"
              className={styles.userDropdownItem}
              onClick={closeUserMenu}
            >
              <Link href="/auth/login">
                <span>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginRight: "0.4rem" }}
                  />
                  Masuk
                </span>
              </Link>
            </button>
          </div>
        )}
      </header>

      {/* Sidebar overlay for mobile navigation */}
      <div
        className={`${styles.sidebarOverlay} ${isSidebarOpen ? styles.sidebarOverlayVisible : ""
          }`}
        onClick={closeSidebar}
      />

      <aside
        className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ""
          }`}
        aria-hidden={!isSidebarOpen}
      >
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarTitle}>Menu</span>
          <button
            type="button"
            className={styles.iconButton}
            onClick={closeSidebar}
            aria-label="Close navigation"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.sidebarLink}
              onClick={closeSidebar}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
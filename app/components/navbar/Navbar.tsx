"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./Navbar.module.scss";

type NavItem = {
  label: string;
  href: string;
};

export default function Navbar() {
  const pathname = usePathname();

  // open state (controls CSS animation)
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Produk", href: "/produk" },
      { label: "Tentang Kami", href: "/about" },
      { label: "Cara Pemesanan", href: "/cara-pemesanan" },
    ],
    []
  );

  const whatsappHref = "https://wa.me/628381428240";

  function closeMobile() {
    setIsMobileOpen(false);
  }

  // Lock scroll (X & Y) when mobile drawer open
  useEffect(() => {
    if (!isMobileOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyOverflowX = document.body.style.overflowX;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalHtmlOverflowX = document.documentElement.style.overflowX;

    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overflowX = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.overflowX = originalBodyOverflowX;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.documentElement.style.overflowX = originalHtmlOverflowX;
    };
  }, [isMobileOpen]);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMobile();
    }
    if (isMobileOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileOpen]);

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        {/* Left: logo + title */}
        <Link href="/" className={styles.brand} onClick={closeMobile}>
          <span className={styles.brandLogo}>
            <Image
              src="/images/logo-classic-bakery-cake.png"
              alt="Classic Bakery logo"
              width={44}
              height={44}
              priority
            />
          </span>
          <span className={styles.brandText}>CLASSIC BAKERY</span>
        </Link>

        {/* Center: desktop menu */}
        <nav className={styles.navDesktop} aria-label="Primary">
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

              return (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: CTA (desktop) + mobile toggle */}
        <div className={styles.actions}>
          <a
            className={styles.cta}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order sekarang via WhatsApp"
          >
            <span className={styles.ctaIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
            <span className={styles.ctaText}>Order Sekarang</span>
            <span className={styles.ctaIconRight} aria-hidden="true">
              <FontAwesomeIcon icon={faBagShopping} />
            </span>
          </a>

          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setIsMobileOpen(true)}
            aria-label="Buka menu"
            aria-haspopup="dialog"
            aria-controls="mobile-menu"
            aria-expanded={isMobileOpen}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile overlay + drawer (always rendered, but truly hidden when closed via CSS) */}
      <div
        className={`${styles.overlay} ${isMobileOpen ? styles.overlayOpen : ""}`}
        onClick={closeMobile}
        aria-hidden={!isMobileOpen}
      />

      <aside
        id="mobile-menu"
        className={`${styles.drawer} ${isMobileOpen ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal={isMobileOpen ? "true" : "false"}
        aria-label="Menu"
      >
        <div className={styles.drawerHeader}>
          <div className={styles.drawerBrand}>
            <span className={styles.drawerLogo}>
              <Image
                src="/images/logo-classic-bakery-cake.png"
                alt="Classic Bakery logo"
                width={40}
                height={40}
              />
            </span>
            <span className={styles.drawerTitle}>CLASSIC BAKERY</span>
          </div>

          <button
            type="button"
            className={styles.drawerClose}
            onClick={closeMobile}
            aria-label="Tutup menu"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <nav className={styles.navMobile} aria-label="Mobile primary">
          <ul className={styles.mobileList}>
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

              return (
                <li key={item.href} className={styles.mobileItem}>
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            className={styles.mobileCta}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
          >
            <span className={styles.mobileCtaIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
            <span>Order Sekarang</span>
          </a>
        </nav>
      </aside>
    </header>
  );
}
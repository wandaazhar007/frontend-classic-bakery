"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./LoginPage.module.scss";

type Mode = "signin" | "signup";

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>("signin");

  const isSignIn = mode === "signin";

  const heading = isSignIn
    ? "Welcome back"
    : "Buat akun Classic Bakery";
  const subheading = isSignIn
    ? "Sign in untuk melanjutkan pesanan, melihat riwayat order, dan menyimpan bolu favoritmu."
    : "Daftar untuk menyimpan data pesanan, alamat, dan bolu favorit agar checkout jadi lebih cepat.";

  const primaryLabel = isSignIn ? "Sign in" : "Create account";

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Link href="/" className={styles.backLink}>
          ← Back to home
        </Link>

        <div className={styles.card}>
          {/* Logo */}
          <div className={styles.logoCenter}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/logo-classic-bakery-circle.png"
                alt="Classic Bakery Logo"
                fill
                sizes="150px"
                priority
              />
            </div>
          </div>

          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.subheading}>{subheading}</p>

          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              type="button"
              className={`${styles.tab} ${mode === "signup" ? styles.tabActive : ""
                }`}
              onClick={() => setMode("signup")}
            >
              Sign Up
            </button>
            <button
              type="button"
              className={`${styles.tab} ${mode === "signin" ? styles.tabActive : ""
                }`}
              onClick={() => setMode("signin")}
            >
              Sign In
            </button>
          </div>

          {/* Form */}
          <form className={styles.form}>
            {mode === "signup" && (
              <>
                <label className={styles.label} htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  className={styles.input}
                  placeholder="Your name"
                />
              </>
            )}

            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="name@example.com"
            />

            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder={
                isSignIn ? "Enter your password" : "Create a strong password"
              }
            />

            <button type="submit" className={styles.primaryButton}>
              {primaryLabel}
            </button>
          </form>

          {/* Divider */}
          <div className={styles.divider}>
            <span />
            <span className={styles.dividerText}>OR CONTINUE WITH</span>
            <span />
          </div>

          {/* Google button */}
          <button type="button" className={styles.googleButton}>
            <span className={styles.googleIcon}>
              <Image src="/google.svg" alt="Google" width={18} height={18} />
            </span>
            <span>
              {isSignIn ? "Continue with Google" : "Sign up with Google"}
            </span>
          </button>

          <p className={styles.termsText}>
            By continuing, you agree to our{" "}
            <Link href="/policies" className={styles.linkInline}>
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className={styles.linkInline}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
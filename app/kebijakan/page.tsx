import type { Metadata } from "next";
import Link from "next/link";
import styles from "./KebijakanPage.module.scss";

const SITE_NAME = "Classic Bakery";
const PAGE_TITLE = "Kebijakan Layanan — Classic Bakery (Tasikmalaya)";
const PAGE_DESC =
  "Kebijakan layanan Classic Bakery untuk pemesanan bolu rumahan & gift bolu: pre-order H-1, pickup/delivery area Mangkubumi (radius 30 km), pembayaran, perubahan jadwal, komplain, dan ketentuan refund.";

const UPDATED_AT = "2025-12-19"; // YYYY-MM-DD
const UPDATED_LABEL = "19 Desember 2025";

const WA_NUMBER = "628381428240";
const WA_TEXT = "Halo, classic bakery";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "kebijakan classic bakery",
    "kebijakan layanan classic bakery",
    "kebijakan pemesanan bolu",
    "bolu rumahan Tasikmalaya",
    "gift bolu Tasikmalaya",
    "Mangkubumi Tasikmalaya",
    "pre-order bolu H-1",
    "pickup delivery bolu",
    "pembayaran cash transfer dana gopay",
    "refund bolu",
  ],
  alternates: { canonical: "/kebijakan" },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/kebijakan",
    siteName: SITE_NAME,
    locale: "id_ID",
    images: [
      {
        url: "/images/logo-classic-bakery-circle.png",
        width: 800,
        height: 800,
        alt: "Classic Bakery — bolu rumahan & gift bolu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/logo-classic-bakery-circle.png"],
  },
  robots: { index: true, follow: true },
};

export default function KebijakanPage() {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Kebijakan", item: "/kebijakan" },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    inLanguage: "id-ID",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: "/" },
    dateModified: UPDATED_AT,
  };

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kebijakan Layanan Classic Bakery",
    description: PAGE_DESC,
    datePublished: UPDATED_AT,
    dateModified: UPDATED_AT,
    inLanguage: "id-ID",
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/kebijakan" },
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      <section className={styles.section} aria-labelledby="kebijakan-title">
        <div className="container">
          <article className={styles.card}>
            <header className={styles.header}>
              <p className={styles.kicker}>Kebijakan Layanan</p>

              <h1 id="kebijakan-title" className={styles.title}>
                Kebijakan & Ketentuan Classic Bakery
              </h1>

              <p className={styles.meta}>
                Terakhir diperbarui: <strong>{UPDATED_LABEL}</strong>
              </p>

              <p className={styles.lead}>
                Halaman ini menjelaskan kebijakan layanan Classic Bakery untuk pemesanan{" "}
                <strong>bolu rumahan</strong> dan <strong>gift bolu</strong> di{" "}
                <strong>Tasikmalaya</strong> (khusus area <strong>Mangkubumi</strong>). Dengan
                melakukan pemesanan, kamu dianggap telah membaca dan menyetujui kebijakan berikut.
              </p>

              <div className={styles.quick}>
                <div className={styles.quickItem}>
                  <p className={styles.quickLabel}>Order</p>
                  <p className={styles.quickValue}>
                    via WhatsApp{" "}
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                      {WA_NUMBER}
                    </a>
                  </p>
                </div>

                <div className={styles.quickItem}>
                  <p className={styles.quickLabel}>Area</p>
                  <p className={styles.quickValue}>Mangkubumi radius ± 30 km</p>
                </div>

                <div className={styles.quickItem}>
                  <p className={styles.quickLabel}>Estimasi</p>
                  <p className={styles.quickValue}>Pre-order H-1 (selama slot tersedia)</p>
                </div>
              </div>

              <div className={styles.links}>
                <Link className={styles.linkPill} href="/cara-pemesanan">
                  Lihat Cara Pemesanan
                </Link>
                <Link className={styles.linkPill} href="/produk">
                  Lihat Produk
                </Link>
              </div>
            </header>

            <hr className={styles.divider} />

            <section className={styles.block} aria-labelledby="kebijakan-1">
              <h2 id="kebijakan-1" className={styles.h2}>
                1) Cara Pemesanan
              </h2>
              <ul className={styles.list}>
                <li>
                  Pilih produk dari halaman{" "}
                  <Link href="/produk">
                    <strong>Produk</strong>
                  </Link>{" "}
                  (contoh: Bolu Jadul / Gift Bolu).
                </li>
                <li>
                  Chat kami via WhatsApp dan tulis detail: <strong>nama produk</strong>,{" "}
                  <strong>jumlah</strong>, <strong>tanggal</strong>, opsi{" "}
                  <strong>pickup</strong>/<strong>delivery</strong>, serta <strong>alamat</strong>{" "}
                  (jika delivery).
                </li>
                <li>
                  Pesanan dianggap <strong>terkonfirmasi</strong> setelah ada balasan konfirmasi dari
                  admin Classic Bakery.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="kebijakan-2">
              <h2 id="kebijakan-2" className={styles.h2}>
                2) Pre-order, Produksi Fresh, dan Ketersediaan Slot
              </h2>
              <ul className={styles.list}>
                <li>
                  Kami mengutamakan proses <strong>fresh</strong> agar rasa konsisten dan tekstur
                  lembut.
                </li>
                <li>
                  Rekomendasi pemesanan: <strong>pre-order H-1</strong> (bisa H-1 selama slot masih
                  tersedia).
                </li>
                <li>
                  Minimum order: <strong>1</strong>.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="kebijakan-3">
              <h2 id="kebijakan-3" className={styles.h2}>
                3) Pickup & Delivery
              </h2>
              <ul className={styles.list}>
                <li>
                  Layanan tersedia untuk <strong>pickup</strong> maupun <strong>delivery</strong>.
                </li>
                <li>
                  Area layanan: <strong>Mangkubumi, Tasikmalaya</strong> (radius{" "}
                  <strong>± 30 km</strong>).
                </li>
                <li>
                  Pengiriman menggunakan kurir instan / sesuai kesepakatan saat konfirmasi (tergantung
                  jarak & ketersediaan).
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="kebijakan-4">
              <h2 id="kebijakan-4" className={styles.h2}>
                4) Metode Pembayaran
              </h2>
              <p className={styles.p}>
                Pembayaran yang tersedia untuk order bolu rumahan & gift bolu:
              </p>
              <ul className={styles.list}>
                <li>Cash (tunai)</li>
                <li>Transfer bank</li>
                <li>DANA</li>
                <li>GoPay</li>
              </ul>
              <p className={styles.note}>
                Tips: Setelah bayar, kirim bukti pembayaran via WhatsApp agar konfirmasi lebih cepat.
              </p>
            </section>

            <section className={styles.block} aria-labelledby="kebijakan-5">
              <h2 id="kebijakan-5" className={styles.h2}>
                5) Perubahan Jadwal & Pembatalan
              </h2>
              <ul className={styles.list}>
                <li>
                  Jika ingin ubah jadwal pickup/delivery, hubungi kami secepatnya agar kami bisa cek
                  slot produksi.
                </li>
                <li>
                  Pembatalan bersifat <strong>kondisional</strong> karena produk diproses fresh,
                  terutama untuk jadwal yang sudah dekat.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="kebijakan-6">
              <h2 id="kebijakan-6" className={styles.h2}>
                6) Komplain, Kualitas Produk, dan Solusi
              </h2>
              <ul className={styles.list}>
                <li>
                  Jika ada kendala (produk tidak sesuai, kerusakan kemasan saat diterima, dll.), segera
                  hubungi kami via WhatsApp dengan foto/video kondisi produk.
                </li>
                <li>
                  Kami akan meninjau laporan dan memberikan solusi terbaik (misalnya: penggantian / penyesuaian) sesuai kasus.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="kebijakan-7">
              <h2 id="kebijakan-7" className={styles.h2}>
                7) Ketentuan Refund
              </h2>
              <ul className={styles.list}>
                <li>
                  Refund hanya dapat diproses untuk kasus tertentu (misalnya pesanan tidak diproses sesuai konfirmasi).
                </li>
                <li>
                  Untuk pesanan yang sudah masuk proses produksi, refund dapat terbatas karena produk dibuat fresh sesuai pesanan.
                </li>
                <li>
                  Semua permintaan refund dikomunikasikan melalui WhatsApp agar jelas dan terdokumentasi.
                </li>
              </ul>
              <p className={styles.note}>
                Untuk kebijakan pengembalian dana lebih detail, kamu bisa juga cek halaman{" "}
                <Link href="/pengembalian-dana">
                  <strong>Refund</strong>
                </Link>{" "}
                (jika tersedia).
              </p>
            </section>

            <section className={styles.block} aria-labelledby="kebijakan-8">
              <h2 id="kebijakan-8" className={styles.h2}>
                8) Informasi & Kontak Resmi
              </h2>
              <ul className={styles.list}>
                <li>
                  WhatsApp:{" "}
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <strong>{WA_NUMBER}</strong>
                  </a>
                </li>
                <li>
                  Email: <strong>admin@classicbakery.com</strong>
                </li>
                <li>
                  Area: <strong>Mangkubumi, Kota Tasikmalaya, Jawa Barat</strong>
                </li>
              </ul>
            </section>

            <footer className={styles.footer}>
              <p className={styles.footerText}>
                Butuh bantuan cepat? Chat kami via WhatsApp — kami bantu pilih produk, atur jadwal, dan
                konfirmasi pembayaran.
              </p>
              <a
                className={styles.waButton}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat WhatsApp Classic Bakery"
              >
                Chat WhatsApp Classic Bakery
              </a>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
}
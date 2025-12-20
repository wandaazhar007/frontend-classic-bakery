import type { Metadata } from "next";
import Link from "next/link";
import styles from "./RefundPage.module.scss";

const SITE_NAME = "Classic Bakery";
const PAGE_TITLE = "Refund Policy — Classic Bakery (Tasikmalaya)";
const PAGE_DESC =
  "Kebijakan pengembalian dana (refund) Classic Bakery untuk bolu rumahan & gift bolu: syarat refund, proses klaim, waktu pemrosesan, dan ketentuan perubahan/pembatalan pesanan.";

const UPDATED_AT = "2025-12-19"; // YYYY-MM-DD
const UPDATED_LABEL = "19 Desember 2025";

const WA_NUMBER = "628381428240";
const WA_TEXT = "Halo, classic bakery";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "refund classic bakery",
    "refund policy classic bakery",
    "pengembalian dana bolu",
    "refund bolu Tasikmalaya",
    "bolu rumahan Tasikmalaya",
    "gift bolu Tasikmalaya",
    "Mangkubumi Tasikmalaya",
    "pembatalan pesanan bolu",
    "komplain bolu",
  ],
  alternates: { canonical: "/refund" },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/refund",
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

export default function RefundPage() {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Refund", item: "/refund" },
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
    headline: "Refund Policy Classic Bakery",
    description: PAGE_DESC,
    datePublished: UPDATED_AT,
    dateModified: UPDATED_AT,
    inLanguage: "id-ID",
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/refund" },
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

      <section className={styles.section} aria-labelledby="refund-title">
        <div className="container">
          <article className={styles.card}>
            <header className={styles.header}>
              <p className={styles.kicker}>Refund Policy</p>

              <h1 id="refund-title" className={styles.title}>
                Kebijakan Pengembalian Dana (Refund) Classic Bakery
              </h1>

              <p className={styles.meta}>
                Terakhir diperbarui: <strong>{UPDATED_LABEL}</strong>
              </p>

              <p className={styles.lead}>
                Classic Bakery memproduksi <strong>bolu rumahan</strong> dan <strong>gift bolu</strong>{" "}
                secara fresh (umumnya <strong>pre-order H-1</strong>). Karena itu, refund bersifat
                kondisional dan ditentukan berdasarkan status pesanan serta bukti yang disampaikan.
              </p>

              <div className={styles.links}>
                <Link className={styles.linkPill} href="/kebijakan">
                  Lihat Kebijakan Layanan
                </Link>
                <Link className={styles.linkPill} href="/cara-pemesanan">
                  Lihat Cara Pemesanan
                </Link>
              </div>
            </header>

            <hr className={styles.divider} />

            <section className={styles.block} aria-labelledby="refund-1">
              <h2 id="refund-1" className={styles.h2}>
                1) Kapan Refund Bisa Diproses?
              </h2>
              <p className={styles.p}>
                Refund umumnya bisa dipertimbangkan jika terjadi kondisi berikut (dibuktikan dan
                diverifikasi):
              </p>
              <ul className={styles.list}>
                <li>
                  Pesanan sudah dibayar tetapi <strong>tidak dapat diproses</strong> karena kendala dari pihak Classic Bakery.
                </li>
                <li>
                  Terjadi <strong>kesalahan pesanan</strong> yang bersifat substansial (misalnya produk yang dikirim berbeda dari yang dikonfirmasi),
                  dan tidak ada solusi penggantian yang disepakati.
                </li>
                <li>
                  Pesanan dibatalkan oleh Classic Bakery sebelum masuk proses produksi.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="refund-2">
              <h2 id="refund-2" className={styles.h2}>
                2) Kapan Refund Tidak Bisa / Terbatas?
              </h2>
              <ul className={styles.list}>
                <li>
                  Pesanan sudah <strong>masuk proses produksi</strong> (karena dibuat fresh sesuai order).
                </li>
                <li>
                  Pembatalan mendadak dari pelanggan saat jadwal produksi sudah berjalan atau mendekati jadwal pickup/delivery.
                </li>
                <li>
                  Kendala yang berasal dari pihak pelanggan (contoh: alamat tidak jelas, tidak bisa dihubungi, penjadwalan ulang berulang).
                </li>
              </ul>
              <p className={styles.note}>
                Jika refund tidak memungkinkan, kami tetap berusaha memberikan solusi terbaik (misalnya penjadwalan ulang) bila masih memungkinkan.
              </p>
            </section>

            <section className={styles.block} aria-labelledby="refund-3">
              <h2 id="refund-3" className={styles.h2}>
                3) Komplain Produk & Bukti yang Dibutuhkan
              </h2>
              <ul className={styles.list}>
                <li>
                  Laporkan kendala sesegera mungkin via WhatsApp dan sertakan{" "}
                  <strong>foto/video</strong> kondisi produk serta kemasan.
                </li>
                <li>
                  Cantumkan <strong>nama pemesan</strong>, <strong>tanggal pesanan</strong>, dan detail produk.
                </li>
                <li>
                  Tim kami akan meninjau laporan dan menawarkan solusi (penggantian/penyesuaian) sesuai kasus.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="refund-4">
              <h2 id="refund-4" className={styles.h2}>
                4) Proses Pengajuan Refund
              </h2>
              <ol className={styles.ordered}>
                <li>
                  Hubungi WhatsApp Classic Bakery dan tulis alasan refund + detail pesanan.
                </li>
                <li>
                  Kirim bukti pembayaran + bukti pendukung (jika ada komplain kualitas/produk).
                </li>
                <li>
                  Kami verifikasi status pesanan (belum diproses / sudah produksi / sudah dikirim).
                </li>
                <li>
                  Jika disetujui, refund diproses ke metode yang disepakati (transfer/e-wallet).
                </li>
              </ol>
            </section>

            <section className={styles.block} aria-labelledby="refund-5">
              <h2 id="refund-5" className={styles.h2}>
                5) Estimasi Waktu Pemrosesan
              </h2>
              <ul className={styles.list}>
                <li>
                  Verifikasi awal: biasanya melalui chat WhatsApp setelah data lengkap diterima.
                </li>
                <li>
                  Pemrosesan refund: bergantung metode pembayaran (transfer/e-wallet) dan jadwal operasional.
                </li>
              </ul>
              <p className={styles.note}>
                Untuk memastikan proses cepat, pastikan data pesanan dan bukti pembayaran lengkap saat menghubungi kami.
              </p>
            </section>

            <section className={styles.block} aria-labelledby="refund-6">
              <h2 id="refund-6" className={styles.h2}>
                6) Kontak Resmi
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
                Ingin tanya dulu sebelum order? Chat kami—kami bantu pilih bolu yang cocok dan atur pickup/delivery.
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
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./SyaratKetentuan.module.scss";

const SITE_NAME = "Classic Bakery";
const PAGE_TITLE = "Syarat & Ketentuan — Classic Bakery (Tasikmalaya)";
const PAGE_DESC =
  "Syarat dan ketentuan Classic Bakery untuk pemesanan bolu rumahan & gift bolu di Tasikmalaya (Mangkubumi): pemesanan, pembayaran, delivery/pickup, komplain, refund, dan penggunaan konten.";

const UPDATED_AT = "2025-12-19"; // YYYY-MM-DD
const UPDATED_LABEL = "19 Desember 2025";

const WA_NUMBER = "628381428240";
const WA_TEXT = "Halo, classic bakery";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "syarat dan ketentuan classic bakery",
    "terms and conditions classic bakery",
    "bolu rumahan Tasikmalaya",
    "gift bolu Tasikmalaya",
    "Mangkubumi Tasikmalaya",
    "pre-order bolu H-1",
    "pickup delivery bolu",
    "pembayaran dana gopay transfer",
    "refund bolu",
  ],
  alternates: { canonical: "/syaratKetentuan" },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/syaratKetentuan",
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

export default function SyaratKetentuanPage() {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Syarat & Ketentuan", item: "/syaratKetentuan" },
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
    headline: "Syarat & Ketentuan Classic Bakery",
    description: PAGE_DESC,
    datePublished: UPDATED_AT,
    dateModified: UPDATED_AT,
    inLanguage: "id-ID",
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/syaratKetentuan" },
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

      <section className={styles.section} aria-labelledby="sk-title">
        <div className="container">
          <article className={styles.card}>
            <header className={styles.header}>
              <p className={styles.kicker}>Syarat & Ketentuan</p>

              <h1 id="sk-title" className={styles.title}>
                Syarat & Ketentuan Classic Bakery
              </h1>

              <p className={styles.meta}>
                Terakhir diperbarui: <strong>{UPDATED_LABEL}</strong>
              </p>

              <p className={styles.lead}>
                Syarat dan ketentuan ini mengatur penggunaan website serta proses pemesanan{" "}
                <strong>bolu rumahan</strong> dan <strong>gift bolu</strong> Classic Bakery di{" "}
                <strong>Tasikmalaya (Mangkubumi)</strong>. Dengan mengakses website atau melakukan
                pemesanan, kamu setuju dengan ketentuan berikut.
              </p>

              <div className={styles.links}>
                <Link className={styles.linkPill} href="/kebijakan">
                  Kebijakan Layanan
                </Link>
                <Link className={styles.linkPill} href="/refund">
                  Refund Policy
                </Link>
                <Link className={styles.linkPill} href="/cara-pemesanan">
                  Cara Pemesanan
                </Link>
              </div>
            </header>

            <hr className={styles.divider} />

            <section className={styles.block} aria-labelledby="sk-1">
              <h2 id="sk-1" className={styles.h2}>
                1) Ruang Lingkup Layanan
              </h2>
              <ul className={styles.list}>
                <li>
                  Classic Bakery melayani pemesanan <strong>pickup</strong> dan <strong>delivery</strong>{" "}
                  khusus area <strong>Mangkubumi, Tasikmalaya</strong> (radius ± 30 km).
                </li>
                <li>
                  Informasi produk (nama, harga, deskripsi) dapat berubah sewaktu-waktu mengikuti ketersediaan bahan dan kebutuhan operasional.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="sk-2">
              <h2 id="sk-2" className={styles.h2}>
                2) Pemesanan & Konfirmasi
              </h2>
              <ul className={styles.list}>
                <li>
                  Pemesanan dilakukan melalui WhatsApp{" "}
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <strong>{WA_NUMBER}</strong>
                  </a>
                  .
                </li>
                <li>
                  Pesanan dianggap <strong>valid</strong> setelah ada konfirmasi dari admin Classic Bakery.
                </li>
                <li>
                  Kami menyarankan <strong>pre-order H-1</strong> agar produksi fresh dan jadwal lebih aman.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="sk-3">
              <h2 id="sk-3" className={styles.h2}>
                3) Harga, Pembayaran, dan Bukti Transfer
              </h2>
              <p className={styles.p}>Metode pembayaran yang tersedia:</p>
              <ul className={styles.list}>
                <li>Cash (tunai)</li>
                <li>Transfer bank</li>
                <li>DANA</li>
                <li>GoPay</li>
              </ul>
              <p className={styles.note}>
                Untuk mempercepat proses, kirim bukti pembayaran setelah melakukan pembayaran.
              </p>
            </section>

            <section className={styles.block} aria-labelledby="sk-4">
              <h2 id="sk-4" className={styles.h2}>
                4) Pengiriman, Pickup, dan Ketepatan Alamat
              </h2>
              <ul className={styles.list}>
                <li>
                  Untuk delivery, pelanggan wajib memberikan alamat yang jelas dan dapat dihubungi.
                </li>
                <li>
                  Keterlambatan akibat informasi alamat yang kurang jelas dapat memengaruhi waktu pengantaran.
                </li>
                <li>
                  Biaya pengiriman (jika ada) diinformasikan saat konfirmasi pesanan, tergantung jarak & ketersediaan kurir.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="sk-5">
              <h2 id="sk-5" className={styles.h2}>
                5) Perubahan Pesanan & Pembatalan
              </h2>
              <ul className={styles.list}>
                <li>
                  Permintaan perubahan jadwal/produk sebaiknya dilakukan lebih awal agar kami bisa menyesuaikan slot produksi.
                </li>
                <li>
                  Pembatalan pesanan bersifat <strong>kondisional</strong>, terutama jika pesanan sudah masuk proses produksi.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="sk-6">
              <h2 id="sk-6" className={styles.h2}>
                6) Komplain, Kualitas, dan Penyelesaian
              </h2>
              <ul className={styles.list}>
                <li>
                  Jika ada kendala, segera hubungi kami dan sertakan bukti (foto/video) kondisi produk dan kemasan.
                </li>
                <li>
                  Kami akan meninjau laporan dan menawarkan solusi terbaik (misalnya penyesuaian / penggantian) sesuai kasus.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="sk-7">
              <h2 id="sk-7" className={styles.h2}>
                7) Refund Policy
              </h2>
              <ul className={styles.list}>
                <li>
                  Refund mengikuti kebijakan pengembalian dana yang tercantum pada halaman{" "}
                  <Link href="/refund">
                    <strong>Refund Policy</strong>
                  </Link>
                  .
                </li>
                <li>
                  Karena produk dibuat fresh sesuai pesanan, refund dapat terbatas jika pesanan sudah masuk proses produksi.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="sk-8">
              <h2 id="sk-8" className={styles.h2}>
                8) Hak Kekayaan Intelektual
              </h2>
              <ul className={styles.list}>
                <li>
                  Konten website (teks, desain, gambar, logo) adalah milik Classic Bakery dan tidak boleh digunakan tanpa izin.
                </li>
                <li>
                  Penggunaan konten untuk repost (misalnya review pelanggan) harus tetap mencantumkan sumber dan tidak merugikan pihak lain.
                </li>
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="sk-9">
              <h2 id="sk-9" className={styles.h2}>
                9) Kontak Resmi
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
                Masih ada pertanyaan? Chat kami via WhatsApp—kami bantu jelaskan alur order dan rekomendasi produk terbaik.
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
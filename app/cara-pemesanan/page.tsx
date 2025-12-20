import type { Metadata } from "next";
import Link from "next/link";

const SITE_NAME = "Classic Bakery";

const PAGE_TITLE =
  "Cara Pemesanan — Order Bolu Jadul & Gift Bolu via WhatsApp | Classic Bakery";
const PAGE_DESC =
  "Cara pesan Classic Bakery: pilih produk → chat WhatsApp → bayar & ambil/antar. Bolu rumahan lembut (bolu jadul & gift bolu) untuk area Mangkubumi, Tasikmalaya (radius 30 km).";

const WA_NUMBER = "628381428240";
const WA_TEXT = "Halo, classic bakery";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "cara pemesanan classic bakery",
    "cara pesan bolu",
    "order bolu via whatsapp",
    "bolu rumahan",
    "bolu jadul",
    "gift bolu",
    "bolu Tasikmalaya",
    "Mangkubumi",
    "delivery bolu Mangkubumi",
    "pickup bolu Tasikmalaya",
    "pre-order bolu",
    "pembayaran dana gopay transfer cash",
  ],
  alternates: { canonical: "/cara-pemesanan" },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/cara-pemesanan",
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

export default function CaraPemesananPage() {
  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cara Pemesanan Classic Bakery",
    description:
      "Tiga langkah mudah untuk order bolu rumahan (bolu jadul & gift bolu) di Classic Bakery melalui WhatsApp: pilih produk, chat WhatsApp, bayar lalu pickup/delivery.",
    inLanguage: "id-ID",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Pilih produk",
        text: "Pilih Bolu Jadul atau Gift Bolu favoritmu dari halaman produk Classic Bakery.",
        url: "/produk",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Chat WhatsApp",
        text: "Kirim pesan via WhatsApp untuk konfirmasi stok, tanggal pre-order (H-1), dan detail pesanan.",
        url: WA_LINK,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Bayar & ambil/antar",
        text: "Lakukan pembayaran (cash/transfer/DANA/GoPay), lalu pilih pickup atau delivery area Mangkubumi (radius 30 km).",
      },
    ],
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Cara Pemesanan", item: "/cara-pemesanan" },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    inLanguage: "id-ID",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: "/" },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />

      {/* HERO / INTRO (nanti bisa dipisah jadi component) */}
      <section className="section" aria-labelledby="cara-pesan-title">
        <div className="container">
          <p
            style={{
              display: "inline-flex",
              width: "fit-content",
              padding: "0.8rem 1.1rem",
              borderRadius: "999rem",
              background: "rgba(255,255,255,0.82)",
              border: "0.1rem solid rgba(240,230,255,1)",
              boxShadow: "0 0.4rem 1.2rem rgba(0,0,0,0.06)",
              fontWeight: 900,
              letterSpacing: "0.08rem",
            }}
          >
            Cara Pemesanan
          </p>

          <h1
            id="cara-pesan-title"
            style={{
              marginTop: "1.2rem",
              fontSize: "3.2rem",
              lineHeight: 1.15,
              fontWeight: 900,
            }}
          >
            Order Bolu Jadul & Gift Bolu dalam 3 langkah simpel
          </h1>

          <p style={{ marginTop: "1.2rem", fontSize: "1.6rem", lineHeight: 1.9, maxWidth: "86rem" }}>
            Classic Bakery menghadirkan <strong>bolu rumahan</strong> yang lembut, manisnya pas,
            dan siap jadi <strong>gift bolu</strong>. Proses pesan dibuat mudah lewat WhatsApp,
            khusus untuk area <strong>Mangkubumi, Tasikmalaya</strong>.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.6rem" }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order via WhatsApp Classic Bakery"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.2rem 1.6rem",
                borderRadius: "1.6rem",
                fontWeight: 900,
                border: "0.1rem solid rgba(240,230,255,1)",
                background: "rgba(255,255,255,0.9)",
              }}
            >
              Order via WhatsApp
            </a>

            <Link
              href="/produk"
              aria-label="Lihat produk Classic Bakery"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.2rem 1.6rem",
                borderRadius: "1.6rem",
                fontWeight: 900,
                border: "0.1rem solid rgba(240,230,255,1)",
                background: "rgba(255,255,255,0.9)",
              }}
            >
              Lihat Produk
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION PLACEHOLDERS (akan dibuat terpisah seperti halaman Tentang Kami) */}
      <section className="section" aria-label="Struktur section halaman Cara Pemesanan">
        <div className="container">
          <div style={{ maxWidth: "92rem", display: "grid", gap: "1rem" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 900 }}>
              Section yang akan kita isi selanjutnya
            </h2>

            <ul style={{ paddingLeft: "1.8rem", listStyle: "disc" }}>
              <li style={{ fontSize: "1.5rem", lineHeight: 1.9 }}>
                Step-by-step (Pilih produk → Chat WA → Bayar & ambil/antar)
              </li>
              <li style={{ fontSize: "1.5rem", lineHeight: 1.9 }}>
                Info layanan: pickup & delivery (Mangkubumi radius 30 km)
              </li>
              <li style={{ fontSize: "1.5rem", lineHeight: 1.9 }}>
                Metode pembayaran: cash / transfer / DANA / GoPay
              </li>
              <li style={{ fontSize: "1.5rem", lineHeight: 1.9 }}>
                Ketentuan order: minimum 1, pre-order H-1
              </li>
              <li style={{ fontSize: "1.5rem", lineHeight: 1.9 }}>
                FAQ Cara Pesan + CTA WhatsApp penutup
              </li>
            </ul>

            <p style={{ marginTop: "0.8rem", fontSize: "1.4rem", lineHeight: 1.9 }}>
              Catatan: Halaman ini memang sengaja disusun dengan beberapa section terpisah
              (component) agar rapi, mudah dirawat, dan SEO-friendly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
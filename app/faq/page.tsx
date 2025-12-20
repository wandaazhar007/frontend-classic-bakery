import type { Metadata } from "next";
import FaqPageClient from "../components/faqPageClient/FaqPageClient";
import styles from "./FaqPage.module.scss";

type FaqItem = {
  q: string;
  a: string;
};

const SITE_NAME = "Classic Bakery";
const PAGE_TITLE = "FAQ — Classic Bakery (Bolu Rumahan & Gift Bolu Tasikmalaya)";
const PAGE_DESC =
  "Pertanyaan yang paling sering ditanyakan tentang Classic Bakery: cara pesan bolu rumahan & gift bolu, area delivery Mangkubumi Tasikmalaya, jam operasional, pre-order H-1, pembayaran, dan kebijakan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "faq classic bakery",
    "bolu rumahan tasikmalaya",
    "gift bolu tasikmalaya",
    "bolu mangkubumi",
    "cara pesan bolu",
    "delivery bolu tasikmalaya",
    "pre-order bolu h-1",
    "pembayaran dana gopay",
    "pickup bolu",
    "refund bolu",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/faq",
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

function buildJsonLdFaq(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}

function buildJsonLdBreadcrumbs() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: "/faq" },
    ],
  };
}

function buildJsonLdWebPage() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    inLanguage: "id-ID",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: "/" },
  };
}

export default function FaqPage() {
  const faqs: FaqItem[] = [
    {
      q: "Classic Bakery jual apa saja?",
      a: "Kami fokus pada bolu rumahan yang hangat dan lembut—terutama Bolu Jadul dan Gift Bolu yang siap jadi hadiah. Menu bisa berubah mengikuti stok dan slot produksi.",
    },
    {
      q: "Bagaimana cara pesan bolu di Classic Bakery?",
      a: "Simpel: pilih produk → chat WhatsApp → bayar → pickup atau delivery. Kamu bisa mulai dari halaman Produk, lalu tulis nama produk, jumlah, tanggal, dan opsi ambil/antar.",
    },
    {
      q: "Apakah bisa delivery dan pickup?",
      a: "Bisa keduanya. Kamu boleh pickup sesuai jadwal yang disepakati, atau pilih delivery untuk area layanan kami.",
    },
    {
      q: "Area delivery Classic Bakery sampai mana?",
      a: "Khusus Tasikmalaya, terutama Mangkubumi dan sekitarnya dengan radius ± 30 km. Untuk lokasi di luar area, silakan chat dulu—kami cek kemungkinan dan slot.",
    },
    {
      q: "Apakah harus pre-order? Bisa pesan hari ini?",
      a: "Rekomendasi kami pre-order H-1 agar produk dibuat fresh dan rasanya konsisten. Pesan hari yang sama bisa saja jika slot produksi masih tersedia (konfirmasi via WhatsApp).",
    },
    {
      q: "Minimum order berapa?",
      a: "Minimum order 1. Untuk gift bolu (hadiah) biasanya pelanggan order lebih dari 1 untuk acara atau momen spesial.",
    },
    {
      q: "Jam operasional Classic Bakery kapan?",
      a: "Senin–Jumat: 08.00–17.00. Sabtu–Minggu: 10.00–15.00. Untuk pickup/delivery, jadwalnya akan kami konfirmasi saat order.",
    },
    {
      q: "Metode pembayaran apa saja yang tersedia?",
      a: "Kami menerima cash (tunai), transfer bank, DANA, dan GoPay. Setelah bayar, kirim bukti pembayaran via WhatsApp untuk mempercepat konfirmasi.",
    },
    {
      q: "Bisa request tulisan ucapan di gift bolu?",
      a: "Bisa—tinggal tulis pesan ucapan saat chat order. Kami akan sesuaikan selama masih sesuai dengan kapasitas kemasan dan ketersediaan perlengkapan.",
    },
    {
      q: "Apakah produknya halal?",
      a: "Kami menggunakan bahan-bahan yang umum digunakan untuk bakery rumahan. Jika kamu punya kebutuhan khusus (alergi/ingredient tertentu), chat dulu agar kami bisa bantu cek.",
    },
    {
      q: "Kalau produk datang rusak atau tidak sesuai, gimana?",
      a: "Segera hubungi kami via WhatsApp dan sertakan foto/video kondisi produk & kemasan. Kami akan evaluasi dan bantu solusi terbaik sesuai kasus.",
    },
    {
      q: "Apakah ada refund?",
      a: "Refund bersifat kondisional karena produk dibuat fresh sesuai pesanan. Detailnya bisa kamu lihat di halaman Refund Policy, atau chat kami untuk kasus spesifik.",
    },
  ];

  const jsonLdFaq = buildJsonLdFaq(faqs);
  const jsonLdBreadcrumbs = buildJsonLdBreadcrumbs();
  const jsonLdWebPage = buildJsonLdWebPage();

  return (
    <main className={styles.page}>
      {/* JSON-LD */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <FaqPageClient faqs={faqs} />
    </main>
  );
}
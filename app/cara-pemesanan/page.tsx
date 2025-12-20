import type { Metadata } from "next";
import Link from "next/link";
import StepByStep from "../components/stepByStep/StepByStep";
import InfoLayanan from "../components/infoLayanan/InfoLayanan";
import MetodePembayaran from "../components/metodePembayaran/MetodePembayaran";
import FaqCaraPemesanan from "../components/faqCaraPemesanan/FaqCaraPemesanan";

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

      <StepByStep />
      <InfoLayanan />
      <MetodePembayaran />
      <FaqCaraPemesanan />
    </main>
  );
}
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroAbout from "../components/heroAbout/HeroAbout";
import BrandStory from "../components/brandStory/BrandStory";

const SITE_NAME = "Classic Bakery";
const PAGE_TITLE = "Tentang Kami — Kisah Manis di Balik Classic Bakery";
const PAGE_DESC =
  "Kenalan dengan Classic Bakery: bolu rumahan lembut dengan rasa premium dan harga bersahabat. Cocok untuk hadiah (gift bolu) dan momen keluarga di Tasikmalaya (Mangkubumi).";

const WA_NUMBER = "628381428240";
const WA_TEXT = "Halo, Classic Bakery! Saya mau tanya dan pesan bolu.";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Classic Bakery",
    "tentang classic bakery",
    "bolu rumahan",
    "bolu jadul",
    "gift bolu",
    "bolu premium",
    "harga bersahabat",
    "bolu Tasikmalaya",
    "Mangkubumi",
    "kue bolu untuk hadiah",
    "bolu lembut",
  ],
  alternates: {
    canonical: "/tentang-kami",
  },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/tentang-kami",
    siteName: SITE_NAME,
    locale: "id_ID",
    images: [
      {
        url: "/images/logo-classic-bakery-circle.png",
        width: 800,
        height: 800,
        alt: "Logo Classic Bakery — bolu rumahan & gift bolu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/logo-classic-bakery-circle.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TentangKamiPage() {
  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Classic Bakery",
    description:
      "Bolu rumahan lembut dengan rasa premium dan harga bersahabat. Cocok untuk gift bolu dan momen keluarga. Layanan pickup & delivery area Mangkubumi, Tasikmalaya.",
    areaServed: "Mangkubumi, Kota Tasikmalaya, Jawa Barat, Indonesia",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. Gn. Nangka, Desa Cipawitra, Kec. Mangkubumi, Kota Tasikmalaya, Jawa Barat, Indonesia",
      addressLocality: "Tasikmalaya",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
    telephone: "+62 838-1428-240",
    sameAs: [
      "https://www.instagram.com/wanda_azharr",
      "https://maps.app.goo.gl/odVcs58scJ2ceVmZ8",
      `https://wa.me/${WA_NUMBER}`,
    ],
    image: ["/images/logo-classic-bakery-circle.png"],
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tentang Kami",
        item: "/tentang-kami",
      },
    ],
  };

  const jsonLdAboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    inLanguage: "id-ID",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: "/",
    },
    about: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAboutPage) }}
      />

      <HeroAbout />
      <BrandStory />
    </main>
  );
}
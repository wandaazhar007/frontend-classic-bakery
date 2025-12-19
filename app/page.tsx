import type { Metadata } from "next";
import Script from "next/script";
import HeroMain from "./components/heroMain/HeroMain";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Classic Bakery Tasikmalaya | Bolu Jadul, Bolu Kukus & Gift Bolu",
  description:
    "Classic Bakery Tasikmalaya menyediakan bolu jadul, bolu kukus, dan premium gift bolu dengan rasa hangat rumahan. Pesan mudah via WhatsApp dan lihat produk terbaru kami.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Classic Bakery",
    "Bolu Tasikmalaya",
    "Bolu jadul",
    "Bolu kukus",
    "Gift bolu",
    "Kue bolu",
    "Bakery Tasikmalaya",
    "Pesan bolu via WhatsApp",
  ],
  openGraph: {
    title: "Classic Bakery Tasikmalaya | Bolu Jadul, Bolu Kukus & Gift Bolu",
    description:
      "Bolu jadul, bolu kukus, dan premium gift bolu dengan rasa hangat rumahan—dikemas manis untuk setiap momen spesial.",
    url: siteUrl,
    siteName: "Classic Bakery",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/toko-classic-bakery-1.png",
        alt: "Classic Bakery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Classic Bakery Tasikmalaya | Bolu Jadul, Bolu Kukus & Gift Bolu",
    description:
      "Bolu jadul, bolu kukus, dan premium gift bolu dengan rasa hangat rumahan—pesan via WhatsApp.",
    images: ["/images/toko-classic-bakery-1.png"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Classic Bakery Tasikmalaya",
        url: siteUrl,
        description:
          "Bolu jadul, bolu kukus, dan premium gift bolu dengan rasa hangat rumahan. Pesan mudah via WhatsApp dan lihat produk terbaru.",
        isPartOf: {
          "@type": "WebSite",
          name: "Classic Bakery",
          url: siteUrl,
        },
      },
      {
        "@type": "Bakery",
        name: "Classic Bakery",
        url: siteUrl,
        image: [`${siteUrl}/images/toko-classic-bakery-1.png`],
        email: "admin@classicbakery.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Gn. Nangka, Desa Cipawitra, Kec. Mangkubumi",
          addressLocality: "Kota Tasikmalaya",
          addressRegion: "Jawa Barat",
          addressCountry: "ID",
        },
        sameAs: [
          "https://www.instagram.com/wanda_azharr",
          "https://maps.app.goo.gl/odVcs58scJ2ceVmZ8",
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroMain />
    </>
  );
}
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles/_globals.scss";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Classic Bakery",
    template: "%s | Classic Bakery",
  },
  description:
    "Classic Bakery menyediakan aneka bolu dan kue dengan rasa lembut, tampilan cantik, dan harga ramah. Cocok untuk hadiah, acara keluarga, dan dinikmati sendiri.",
  icons: {
    icon: "/images/logo-classic-bakery-cake.ico",
    shortcut: "/images/logo-classic-bakery-cake.ico",
    apple: "/images/logo-classic-bakery-circle.png",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Classic Bakery",
    title: "Classic Bakery",
    description:
      "Aneka bolu dan kue dengan rasa lembut, tampilan cantik, dan harga ramah—siap untuk hadiah atau dinikmati kapan saja.",
    locale: "id_ID",
    images: [
      {
        url: "/images/toko-classic-bakery-1.png",
        alt: "Classic Bakery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Classic Bakery",
    description:
      "Aneka bolu dan kue dengan rasa lembut, tampilan cantik, dan harga ramah.",
    images: ["/images/toko-classic-bakery-1.png"],
  },
  category: "food",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Classic Bakery",
        url: siteUrl,
        logo: `${siteUrl}/images/logo-classic-bakery-circle.png`,
        email: "admin@classicbakery.com",
      },
      {
        "@type": "WebSite",
        name: "Classic Bakery",
        url: siteUrl,
      },
    ],
  };

  return (
    <html lang="id">
      <body>
        <Script
          id="classic-bakery-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
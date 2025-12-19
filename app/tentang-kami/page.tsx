import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

      {/* NOTE:
        Halaman ini akan dipecah menjadi beberapa section component (seperti Home).
        Untuk sekarang, kita siapkan struktur + copy SEO-friendly dulu.
      */}

      {/* SECTION: Hero About */}
      <section aria-labelledby="about-hero-title" className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gap: "1.6rem",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  padding: "0.8rem 1.1rem",
                  borderRadius: "999rem",
                  background: "rgba(255,255,255,0.8)",
                  border: "0.1rem solid rgba(240,230,255,1)",
                  marginBottom: "1.2rem",
                  fontWeight: 900,
                }}
              >
                Tentang Kami
              </p>

              <h1
                id="about-hero-title"
                style={{
                  fontSize: "3.2rem",
                  lineHeight: 1.15,
                  marginBottom: "1.2rem",
                  fontWeight: 900,
                }}
              >
                Kisah Manis di Balik Classic Bakery
              </h1>

              <p style={{ fontSize: "1.6rem", lineHeight: 1.8, maxWidth: "72rem" }}>
                <strong>Bolu rumahan</strong> yang dibuat sepenuh hati, untuk menemani
                setiap momen keluarga. Kami fokus menghadirkan rasa yang lembut dan
                terasa premium—namun tetap <strong>harga bersahabat</strong>, cocok
                untuk dinikmati sendiri maupun jadi <strong>gift bolu</strong>.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.6rem" }}>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  aria-label="Chat WhatsApp Classic Bakery"
                >
                  Chat WhatsApp
                </a>

                <Link
                  href="/produk"
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

            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <Image
                src="/images/logo-classic-bakery-circle.png"
                alt="Classic Bakery — bolu rumahan Tasikmalaya dan gift bolu"
                width={140}
                height={140}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Brand Story */}
      <section aria-labelledby="story-title" className="section">
        <div className="container">
          <h2 id="story-title" style={{ fontSize: "2.4rem", fontWeight: 900, marginBottom: "1.2rem" }}>
            Cerita Kami
          </h2>
          <div style={{ maxWidth: "86rem", display: "grid", gap: "1rem" }}>
            <p style={{ fontSize: "1.5rem", lineHeight: 1.9 }}>
              Classic Bakery lahir dari dapur kecil yang penuh cinta. Berawal dari kebiasaan
              membuat kue untuk keluarga sendiri, kami ingin menghadirkan rasa rumahan yang
              lembut dan premium kepada lebih banyak orang—namun tetap dengan harga yang ramah
              di kantong.
            </p>
            <p style={{ fontSize: "1.5rem", lineHeight: 1.9 }}>
              Setiap bolu dibuat dengan bahan pilihan, tanpa mengurangi kualitas. Kami percaya
              bahwa makanan yang dibuat dengan ketulusan akan selalu terasa berbeda. Di Classic
              Bakery, setiap lapis bolu bukan sekadar kue—tapi hadiah, perhatian, dan bentuk kecil
              dari kasih sayang.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION PLACEHOLDERS: nanti dipisah menjadi components */}
      <section aria-label="Placeholder sections" className="section">
        <div className="container">
          <div style={{ maxWidth: "92rem", display: "grid", gap: "1rem" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 900 }}>
              Selanjutnya akan kita isi dengan beberapa section
            </h2>
            <ul style={{ paddingLeft: "1.8rem", listStyle: "disc" }}>
              <li style={{ fontSize: "1.5rem", lineHeight: 1.9 }}>
                Brand Promise / Kenapa Classic Bakery (rasa premium, harga bersahabat, tekstur lembut)
              </li>
              <li style={{ fontSize: "1.5rem", lineHeight: 1.9 }}>
                Layanan & Area (pickup + delivery Mangkubumi radius 30 km, pre-order H-1, pembayaran)
              </li>
              <li style={{ fontSize: "1.5rem", lineHeight: 1.9 }}>
                Jam Operasional
              </li>
              <li style={{ fontSize: "1.5rem", lineHeight: 1.9 }}>
                Mini Testimoni + CTA akhir
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
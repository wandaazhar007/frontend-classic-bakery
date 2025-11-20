"use client";

import { useState } from "react";
import styles from "./FAQSection.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FAQ_ITEMS = [
  {
    q: "Apakah semua bolu dibuat fresh setiap hari?",
    a: "Ya! Semua bolu dibuat fresh setiap hari sesuai pesanan, bukan stok kemarin. Karena Classic Bakery mengutamakan rasa lembut dan kualitas terbaik untuk tiap pelanggan.",
  },
  {
    q: "Bisakah saya request kemasan untuk hadiah?",
    a: "Bisa banget! Kami menyediakan gift box cantik, pita hias, dan kartu ucapan agar bolu kamu siap diberikan sebagai hadiah premium namun tetap bersahabat di harga.",
  },
  {
    q: "Apakah bisa pesan H-1?",
    a: "Bisa. Kamu dapat pesan H-1 selama slot masih tersedia. Untuk tanggal yang ramai seperti weekend atau hari libur, kami sarankan pesan lebih awal.",
  },
  {
    q: "Ada minimal order?",
    a: "Tidak ada minimal order. Kamu bisa pesan 1 box saja ataupun banyak sekaligus untuk acara keluarga, arisan, atau kantor.",
  },
  {
    q: "Apakah Classic Bakery menerima pesanan dalam jumlah besar?",
    a: "Ya, kami dapat mengerjakan pesanan dalam jumlah besar untuk acara kantor, ulang tahun, syukuran, atau event lainnya. Silakan WhatsApp kami untuk konsultasi.",
  },
  {
    q: "Bolu tahan berapa lama?",
    a: "Bolu tahan 1–2 hari di suhu ruang karena dibuat tanpa bahan pengawet. Untuk hasil terbaik, simpan di tempat sejuk dan tertutup.",
  },
  {
    q: "Pengiriman menggunakan jasa apa?",
    a: "Kami menggunakan kurir instan atau pengiriman yang kamu pilih. Untuk pengiriman jauh, kamu bisa konsultasikan agar tekstur bolu tetap aman.",
  },
  {
    q: "Apakah bisa custom pesan seperti tulisan di box?",
    a: "Bisa! Kamu dapat request tulisan ucapan sederhana di box agar lebih personal dan bermakna.",
  },
  {
    q: "Apa yang membuat Classic Bakery berbeda?",
    a: "Kami menawarkan rasa premium harga terjangkau, dibuat sepenuh hati layaknya bolu rumahan, dengan kemasan cantik yang siap dijadikan hadiah.",
  },
];

const images = [
  {
    image: "/images/kue-bolu-6.png",
    alt: "Classic Bakery cake",
  },
  {
    image: "/images/kue-bolu-5.png",
    alt: "Classic Bakery cake",
  },
  {
    image: "/images/kue-bolu-4.png",
    alt: "Classic Bakery cake",
  },
  {
    image: "/images/kue-bolu-3.png",
    alt: "Classic Bakery cake",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left: Gallery */}
        <div className={styles.gallery}>
          {images.map((img) => (
            <div key={img.image} className={styles.imageWrapper}>
              <Image
                src={img.image}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
          ))}
        </div>

        {/* Right: FAQ */}
        <div className={styles.faqBox}>
          <span className={styles.badge}>FAQ</span>
          <h2 className={styles.heading}>
            Pertanyaan yang sering ditanyakan pelanggan kami.
          </h2>
          <p className={styles.tagline}>
            Semua yang perlu kamu tahu tentang pemesanan, pengiriman, dan
            kualitas bolu premium Classic Bakery—dibuat dengan ketulusan, harga
            tetap bersahabat.
          </p>

          <div className={styles.accordion}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className={styles.item}>
                <button className={styles.question} onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`${styles.icon} ${openIndex === i ? styles.iconOpen : ""
                      }`}
                  />
                </button>

                <div
                  className={`${styles.answer} ${openIndex === i ? styles.answerOpen : ""
                    }`}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
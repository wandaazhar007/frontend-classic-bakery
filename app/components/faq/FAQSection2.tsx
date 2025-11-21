"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./FAQSection2.module.scss";

type FAQItem = {
  question: string;
  answer: string;
};

const LEFT_FAQ: FAQItem[] = [
  {
    question: "Berapa lama saya harus pesan sebelum tanggal acara?",
    answer:
      "Untuk pesanan reguler, pemesanan H-1 biasanya masih memungkinkan selama slot produksi tersedia. Untuk acara besar atau hampers, kami sarankan minimal 3–5 hari sebelumnya agar kami bisa menyiapkan semuanya dengan rapi.",
  },
  {
    question: "Bisakah saya mengubah jadwal atau detail pesanan yang sudah dikonfirmasi?",
    answer:
      "Perubahan jadwal atau detail pesanan masih bisa dilakukan selama produksi belum dimulai. Silakan hubungi kami secepat mungkin via WhatsApp agar tim kami dapat membantu cek ketersediaan dan penyesuaiannya.",
  },
  {
    question: "Apakah bisa request tulisan khusus di box atau kartu ucapan?",
    answer:
      "Bisa. Kamu dapat menuliskan teks ucapan singkat saat pemesanan. Kami akan menuliskannya di kartu atau pada bagian luar kemasan agar bolu terasa lebih personal dan berkesan.",
  },
  {
    question: "Apakah rasa bolu akan tetap aman jika dikirim dengan kurir?",
    answer:
      "Kami mengemas bolu dengan rapi agar tetap aman selama di perjalanan. Namun, untuk menjaga tekstur dan tampilan, kami tetap menyarankan pengiriman instan atau pengambilan langsung jika memungkinkan.",
  },
];

const RIGHT_FAQ: FAQItem[] = [
  {
    question: "Bagaimana cara memastikan pembayaran saya sudah diterima?",
    answer:
      "Setelah transfer, kamu bisa kirim bukti pembayaran melalui WhatsApp. Tim kami akan melakukan pengecekan dan mengkonfirmasi bahwa pesanan sudah tercatat dan masuk jadwal produksi.",
  },
  {
    question: "Apakah Classic Bakery menyediakan sample sebelum pemesanan besar?",
    answer:
      "Untuk beberapa jenis bolu, kamu bisa memesan dalam jumlah kecil terlebih dahulu sebagai sample. Ini membantu kamu memastikan rasa dan tekstur sebelum memesan dalam jumlah banyak.",
  },
  {
    question: "Apa yang terjadi jika saya terlambat mengambil pesanan?",
    answer:
      "Kami akan tetap menyimpan bolu pesananmu hingga jam operasional berakhir di hari tersebut. Namun, untuk menjaga kualitas, kami rekomendasikan pengambilan sesuai jam yang telah disepakati.",
  },
  {
    question: "Apakah ada pilihan bolu yang lebih manis atau kurang manis?",
    answer:
      "Beberapa varian bolu kami punya karakter manis yang berbeda. Kamu bisa konsultasi sebelumnya—kami akan bantu rekomendasikan varian yang manisnya pas sesuai selera kamu dan keluarga.",
  },
  {
    question: "Bisakah saya memesan bolu tanpa dekorasi atau tanpa kemasan gift box?",
    answer:
      "Tentu bisa. Kamu dapat memilih opsi kemasan sederhana tanpa dekorasi tambahan jika ingin fokus pada rasa atau menekan budget. Silakan informasikan saat pemesanan.",
  },
  {
    question: "Apakah Classic Bakery menerima kerja sama corporate atau reseller?",
    answer:
      "Ya, untuk kerja sama corporate, hampers perusahaan, atau reseller, kamu dapat menghubungi kami via WhatsApp untuk diskusi lebih lanjut mengenai kuantitas, harga khusus, dan jadwal produksi.",
  },
];

export default function FAQSection2() {
  const [openLeftIndex, setOpenLeftIndex] = useState<number | null>(null);
  const [openRightIndex, setOpenRightIndex] = useState<number | null>(null);

  const toggleLeft = (index: number) => {
    setOpenLeftIndex(openLeftIndex === index ? null : index);
  };

  const toggleRight = (index: number) => {
    setOpenRightIndex(openRightIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* LEFT BOX */}
        <div className={styles.leftBox}>
          <span className={styles.badge}>Butuh info lebih detail?</span>
          <h2 className={styles.heading}>
            FAQ lanjutan untuk kamu yang ingin pesan dengan lebih tenang.
          </h2>
          <p className={styles.tagline}>
            Di bagian ini, kami jelaskan hal-hal penting seperti perubahan
            pesanan, pengiriman, pembayaran, hingga kerja sama acara besar.
            Tujuannya satu: supaya kamu merasa aman sebelum memesan bolu dari
            Classic Bakery.
          </p>

          <div className={styles.accordion}>
            {LEFT_FAQ.map((item, index) => (
              <div key={item.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.questionRow}
                  onClick={() => toggleLeft(index)}
                >
                  <span>{item.question}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`${styles.icon} ${openLeftIndex === index ? styles.iconOpen : ""
                      }`}
                  />
                </button>
                <div
                  className={`${styles.answer} ${openLeftIndex === index ? styles.answerOpen : ""
                    }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className={styles.rightBox}>
          <div className={styles.accordionRight}>
            {RIGHT_FAQ.map((item, index) => (
              <div key={item.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.questionRow}
                  onClick={() => toggleRight(index)}
                >
                  <span>{item.question}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`${styles.icon} ${openRightIndex === index ? styles.iconOpen : ""
                      }`}
                  />
                </button>
                <div
                  className={`${styles.answer} ${openRightIndex === index ? styles.answerOpen : ""
                    }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import styles from "./TermConditionSection.module.scss";

export default function TermConditionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Logo di tengah atas */}
        <div className={styles.logoCenter}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo-classic-bakery-circle.png"
              alt="Classic Bakery Logo"
              fill
              sizes="160px"
              priority
            />
          </div>
        </div>

        {/* Heading + Tagline */}
        <h1 className={styles.heading}>Kebijakan & Ketentuan Classic Bakery</h1>
        <p className={styles.tagline}>
          Terima kasih telah memilih Classic Bakery. Dengan melakukan pemesanan,
          Anda menyetujui kebijakan dan ketentuan berikut yang dibuat untuk
          menjaga kenyamanan, kejelasan, dan kualitas layanan kami.
        </p>

        {/* Isi Terms & Conditions */}
        <div className={styles.content}>
          <h2>1. Pemesanan</h2>
          <ul>
            <li>Pemesanan dapat dilakukan melalui WhatsApp, Instagram, atau datang langsung ke toko.</li>
            <li>Pesanan dianggap sah setelah kami mengkonfirmasi detail pesanan melalui pesan.</li>
            <li>Untuk pesanan jumlah besar atau acara penting, kami menyarankan pemesanan minimal 3–5 hari sebelumnya.</li>
          </ul>

          <h2>2. Pembayaran</h2>
          <ul>
            <li>Pembayaran dilakukan melalui transfer bank atau metode lain yang diinformasikan oleh Classic Bakery.</li>
            <li>Proses produksi akan dimulai setelah pembayaran terkonfirmasi.</li>
            <li>Pelanggan wajib mengirimkan bukti pembayaran sebagai verifikasi.</li>
          </ul>

          <h2>3. Pembatalan Pesanan</h2>
          <ul>
            <li>Pembatalan dapat dilakukan sebelum proses produksi dimulai.</li>
            <li>Jika pembatalan dilakukan setelah produksi berjalan, pembayaran tidak dapat dikembalikan.</li>
            <li>Untuk pesanan corporate atau dalam jumlah besar, dapat berlaku kebijakan pembatalan khusus yang akan dijelaskan saat pemesanan.</li>
          </ul>

          <h2>4. Produksi & Kualitas Produk</h2>
          <ul>
            <li>Semua bolu dibuat fresh setiap hari tanpa penggunaan bahan pengawet berlebihan.</li>
            <li>Perbedaan kecil pada warna, tekstur, atau dekorasi dapat terjadi karena produk dibuat secara manual.</li>
            <li>Kami menjaga kebersihan dan kualitas produksi sesuai standar dapur makanan rumahan yang higienis.</li>
          </ul>

          <h2>5. Pengambilan Pesanan</h2>
          <ul>
            <li>Pelanggan diharapkan mengambil pesanan sesuai jadwal yang telah disepakati.</li>
            <li>Kami akan menyimpan pesanan hingga jam operasional berakhir pada hari pengambilan.</li>
            <li>Perubahan kualitas karena keterlambatan pengambilan di luar kendali kami bukan menjadi tanggung jawab Classic Bakery.</li>
          </ul>

          <h2>6. Pengiriman</h2>
          <ul>
            <li>Pengiriman dilakukan menggunakan kurir instan atau jasa kirim lain sesuai kesepakatan dengan pelanggan.</li>
            <li>Biaya pengiriman menjadi tanggungan pelanggan dan mengikuti tarif layanan kurir.</li>
            <li>Kami selalu berusaha mengemas produk seaman mungkin, namun risiko kerusakan selama perjalanan menjadi tanggung jawab jasa pengiriman.</li>
          </ul>

          <h2>7. Komplain & Pengembalian Dana</h2>
          <ul>
            <li>Komplain terkait kualitas produk harus disertai foto/video dan disampaikan maksimal 1×24 jam setelah pesanan diterima.</li>
            <li>Penggantian produk atau pengembalian dana hanya dapat diproses apabila terbukti terjadi kesalahan dari pihak Classic Bakery.</li>
            <li>Kesalahan alamat, keterlambatan pengambilan, atau perubahan keputusan pribadi tidak termasuk dalam alasan pengembalian dana.</li>
          </ul>

          <h2>8. Penggunaan Konten & Hak Cipta</h2>
          <ul>
            <li>Seluruh foto, desain, logo, dan materi promosi Classic Bakery dilindungi hak cipta.</li>
            <li>Pelanggan tidak diperkenankan menggunakan konten tersebut untuk kepentingan komersial tanpa izin tertulis.</li>
            <li>Classic Bakery dapat membagikan ulang foto atau testimoni pelanggan yang menandai akun kami sebagai bentuk apresiasi.</li>
          </ul>

          <h2>9. Perubahan Kebijakan</h2>
          <ul>
            <li>Classic Bakery berhak mengubah atau memperbarui kebijakan ini sewaktu-waktu.</li>
            <li>Perubahan kebijakan akan diterapkan setelah ditayangkan di halaman ini.</li>
          </ul>

          <h2>10. Kontak</h2>
          <ul>
            <li>
              Untuk pertanyaan lebih lanjut, silakan hubungi kami melalui WhatsApp di{" "}
              <strong>+62 838-1428-240</strong> atau melalui media sosial resmi Classic Bakery.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CartPage.module.scss";

type CartItem = {
  id: number;
  name: string;
  price: number; // in Rupiah
  image: string;
  qty: number;
};

const INITIAL_ITEMS: CartItem[] = [
  {
    id: 1,
    name: "Bolu Jadul Classic",
    price: 45000,
    image: "/images/kue-bolu-1.png",
    qty: 1,
  },
  {
    id: 2,
    name: "Bolu Coklat Moist",
    price: 48000,
    image: "/images/kue-bolu-1.png",
    qty: 2,
  },
];

function formatRupiah(value: number) {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS);

  const handleIncrease = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
    [items]
  );

  const deliveryFee = items.length === 0 ? 0 : 10000;
  const total = subtotal + deliveryFee;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Keranjang Belanja</h1>
          <p className={styles.tagline}>
            Cek kembali pesanan bolu kamu sebelum melanjutkan ke pembayaran.
          </p>
        </header>

        <div className={styles.layout}>
          {/* LEFT: Cart items */}
          <div className={styles.itemsPanel}>
            {items.length === 0 ? (
              <div className={styles.emptyState}>
                <p>Keranjangmu masih kosong.</p>
                <Link href="/products" className={styles.linkProducts}>
                  Lihat semua produk
                </Link>
              </div>
            ) : (
              <ul className={styles.itemsList}>
                {items.map((item) => (
                  <li key={item.id} className={styles.itemRow}>
                    <div className={styles.itemImageWrapper}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="96px"
                      />
                    </div>

                    <div className={styles.itemInfo}>
                      <div className={styles.itemHeader}>
                        <h2 className={styles.itemName}>{item.name}</h2>
                        <button
                          type="button"
                          className={styles.removeBtn}
                          onClick={() => handleRemove(item.id)}
                        >
                          Hapus
                        </button>
                      </div>

                      <p className={styles.itemPrice}>
                        {formatRupiah(item.price)}
                      </p>

                      <div className={styles.itemFooter}>
                        <div className={styles.qtyControls}>
                          <button
                            type="button"
                            onClick={() => handleDecrease(item.id)}
                          >
                            −
                          </button>
                          <span>{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => handleIncrease(item.id)}
                          >
                            +
                          </button>
                        </div>

                        <p className={styles.itemTotal}>
                          {formatRupiah(item.price * item.qty)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* RIGHT: Summary */}
          <aside className={styles.summaryPanel}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryHeading}>Ringkasan Pesanan</h2>

              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>{formatRupiah(subtotal)}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Estimasi ongkir</span>
                <span>{deliveryFee === 0 ? "-" : formatRupiah(deliveryFee)}</span>
              </div>

              <div className={styles.summaryDivider} />

              <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                <span>Total</span>
                <span>{formatRupiah(total)}</span>
              </div>

              <button
                type="button"
                className={styles.checkoutBtn}
                disabled={items.length === 0}
              >
                Lanjut ke pembayaran
              </button>

              <p className={styles.summaryNote}>
                Pembayaran akan diproses melalui Midtrans setelah kamu
                mengkonfirmasi detail pesanan di langkah berikutnya.
              </p>
            </div>

            <Link href="/products" className={styles.backToProducts}>
              ← Tambah bolu lain
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
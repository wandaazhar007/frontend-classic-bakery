"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ProductsPage.module.scss";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Bolu Jadul Classic",
    price: "Rp 45.000",
    image: "/images/kue-bolu-1.png",
  },
  {
    id: 2,
    name: "Bolu Coklat Moist",
    price: "Rp 48.000",
    image: "/images/kue-bolu-2.png",
  },
  {
    id: 3,
    name: "Bolu Pandan Lembut",
    price: "Rp 45.000",
    image: "/images/kue-bolu-3.png",
  },
  {
    id: 4,
    name: "Bolu Keju Premium",
    price: "Rp 50.000",
    image: "/images/kue-bolu-4.png",
  },
  {
    id: 5,
    name: "Bolu Marmer Klasik",
    price: "Rp 47.000",
    image: "/images/kue-bolu-5.png",
  },
  {
    id: 6,
    name: "Bolu Strawberry Cream",
    price: "Rp 48.000",
    image: "/images/kue-bolu-6.png",
  },
];

export default function ProductsPage() {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const handleAddToCart = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] && prev[id] > 0 ? prev[id] : 1,
    }));
  };

  const increaseQty = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQty = (id: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Pilih Bolu Favoritmu</h1>
          <p className={styles.tagline}>
            Enam pilihan bolu lembut dengan rasa premium dan harga bersahabat.
            Klik “Add to Cart” untuk mulai menyiapkan keranjang pesananmu.
          </p>
        </header>

        <div className={styles.grid}>
          {PRODUCTS.map((product) => {
            const qty = quantities[product.id] || 0;

            return (
              <article key={product.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 45vw, (max-width: 1200px) 15vw, 10vw"
                  />
                </div>

                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{product.name}</h2>
                  <p className={styles.cardPrice}>{product.price}</p>

                  <div className={styles.cardActions}>
                    {qty === 0 ? (
                      <button
                        type="button"
                        className={styles.addButton}
                        onClick={() => handleAddToCart(product.id)}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div className={styles.qtyControls}>
                        <button
                          type="button"
                          className={styles.qtyBtn}
                          onClick={() => decreaseQty(product.id)}
                        >
                          −
                        </button>
                        <span className={styles.qtyValue}>{qty}</span>
                        <button
                          type="button"
                          className={styles.qtyBtn}
                          onClick={() => increaseQty(product.id)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
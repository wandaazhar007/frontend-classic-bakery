"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./ProductsPage.module.scss";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

const PAGE_SIZE = 12;

type ProductImage = {
  url: string;
  isPrimary: boolean;
};

type Product = {
  id: string;
  name: string;
  shortDescription: string;
  description?: string;
  priceMin: number;
  priceMax: number;
  category: string;
  images: ProductImage[];
};

type ProductsApiResponse = {
  success: boolean;
  data: Product[];
  nextCursor: number | null;
};

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Local cart state: productId -> quantity
  const [cartItems, setCartItems] = useState<Record<string, number>>({});

  // 👉 Fetch products (no search param; search handled on frontend with .includes)
  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setIsLoading(true);
        setErrorMessage(null);
        setAllProducts([]);
        setPage(1);
        setHasMore(true);

        const params = new URLSearchParams();
        params.set("limit", "200"); // enough for multiple pages of 12
        if (selectedCategory) params.set("category", selectedCategory);

        const url = `${API_BASE_URL}/api/products?${params.toString()}`;
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const json: ProductsApiResponse = await res.json();
        const products = json.data || [];

        setAllProducts(products);
        setHasMore(products.length > PAGE_SIZE);
      } catch (err: any) {
        if (err.name === "AbortError") return;
        console.error("Failed to load products:", err);
        setErrorMessage("Gagal memuat produk. Coba lagi sebentar lagi.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, [selectedCategory]);

  // 👉 Frontend search: match beginning/middle/end (name OR shortDescription)
  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return allProducts;

    return allProducts.filter((p) => {
      const haystack =
        `${p.name} ${p.shortDescription ?? ""}`.toLowerCase();
      return haystack.includes(term);
    });
  }, [allProducts, searchTerm]);

  const visibleProducts = useMemo(
    () => filteredProducts.slice(0, page * PAGE_SIZE),
    [filteredProducts, page]
  );

  const handleLoadMore = () => {
    const nextPage = page + 1;
    const nextVisibleCount = nextPage * PAGE_SIZE;

    setPage(nextPage);
    setHasMore(nextVisibleCount < filteredProducts.length);
  };

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchTerm(e.target.value);
    // reset paging when search changes
    setPage(1);
    setHasMore(true);
  };

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedCategory(e.target.value);
  };

  // 👉 Cart handlers
  const handleAddToCart = (productId: string) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] ? prev[productId] + 1 : 1,
    }));
  };

  const handleIncrease = (productId: string) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] ?? 0) + 1,
    }));
  };

  const handleDecrease = (productId: string) => {
    setCartItems((prev) => {
      const current = prev[productId] ?? 0;
      if (current <= 1) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: current - 1 };
    });
  };

  // 👉 Skeleton placeholders
  const renderSkeletonCards = () => {
    const skeletonCount = PAGE_SIZE;
    const cards = Array.from({ length: skeletonCount }, (_, i) => i);

    return (
      <div className={styles.grid}>
        {cards.map((key) => (
          <article
            key={`skeleton-${key}`}
            className={`${styles.card} ${styles.skeletonCard}`}
          >
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonBody}>
              <div
                className={`${styles.skeletonLine} ${styles.skeletonLineMedium}`}
              />
              <div
                className={`${styles.skeletonLine} ${styles.skeletonLineFull}`}
              />
              <div
                className={`${styles.skeletonLine} ${styles.skeletonLineShort}`}
              />
            </div>
          </article>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headingBlock}>
          <h1 className={styles.heading}>Pilih Bolu Favoritmu</h1>
          <p className={styles.subheading}>
            Enam pilihan bolu lembut dengan rasa premium dan harga bersahabat.
            Klik &quot;Add to Cart&quot; untuk mulai menyiapkan keranjang
            pesananmu.
          </p>
        </div>

        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Cari bolu (misal: coklat, pandan, keju)..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />

          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className={styles.select}
          >
            <option value="">Semua kategori</option>
            <option value="bolu-jadul">Bolu Jadul</option>
            <option value="bolu-premium">Bolu Premium</option>
            <option value="bolu-modern">Bolu Modern</option>
            <option value="bolu-buah">Bolu Buah</option>
            <option value="bolu-coklat">Bolu Coklat</option>
          </select>
        </div>
      </header>

      {errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}

      {/* Skeleton on first load or while refetching */}
      {isLoading && visibleProducts.length === 0 ? (
        renderSkeletonCards()
      ) : (
        <InfiniteScroll
          dataLength={visibleProducts.length}
          next={handleLoadMore}
          hasMore={hasMore}
          loader={
            !isLoading && hasMore ? (
              <div className={styles.loader}>Memuat produk...</div>
            ) : null
          }
          scrollThreshold={0.85}
          className={styles.infiniteWrapper}
        >
          <div className={styles.grid}>
            {visibleProducts.map((product) => {
              const primaryImage =
                product.images.find((img) => img.isPrimary) ||
                product.images[0] || {
                  url: "/images/kue-bolu-2.png",
                  isPrimary: true,
                };

              const rawUrl = primaryImage.url || "/images/kue-bolu-2.png";
              const imageUrl =
                rawUrl.startsWith("http") || rawUrl.startsWith("/")
                  ? rawUrl
                  : `/${rawUrl}`;

              const qty = cartItems[product.id] ?? 0;

              return (
                <article key={product.id} className={styles.card}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={imageUrl}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 12vw"
                      className={styles.cardImage}
                    />
                  </div>

                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>{product.name}</h2>
                    <p className={styles.cardDescription}>
                      {product.shortDescription}
                    </p>
                    <p className={styles.cardPrice}>
                      Rp {product.priceMin.toLocaleString("id-ID")} –{" "}
                      {product.priceMax.toLocaleString("id-ID")}
                    </p>

                    {qty === 0 ? (
                      <button
                        type="button"
                        className={styles.addToCartButton}
                        onClick={() => handleAddToCart(product.id)}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div className={styles.quantityControls}>
                        <button
                          type="button"
                          className={styles.quantityButton}
                          onClick={() => handleDecrease(product.id)}
                          aria-label="Kurangi jumlah"
                        >
                          –
                        </button>
                        <span className={styles.quantityValue}>{qty}</span>
                        <button
                          type="button"
                          className={styles.quantityButton}
                          onClick={() => handleIncrease(product.id)}
                          aria-label="Tambah jumlah"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}

            {!isLoading && visibleProducts.length === 0 && (
              <p className={styles.emptyState}>
                Belum ada produk yang cocok dengan pencarian kamu.
              </p>
            )}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}
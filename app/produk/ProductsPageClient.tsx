"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProductsPage.module.scss";

type ProductImage = { url: string; isPrimary?: boolean };

type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription?: string;
  description?: string;
  price: number;
  images?: ProductImage[];
  category?: string;
};

type ProductsResponse = {
  success: boolean;
  data: Product[];
  nextCursor?: string | null;
};

function formatIDR(value: number) {
  try {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `Rp ${value}`;
  }
}

function getPrimaryImage(product: Product) {
  const images = product.images ?? [];
  const primary = images.find((img) => img.isPrimary)?.url ?? images[0]?.url;
  return primary || "/images/kue-bolu-2.png";
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function useDebouncedValue<T>(value: T, ms: number) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = window.setTimeout(() => setDebounced(value), ms);
    return () => window.clearTimeout(t);
  }, [value, ms]);
  return debounced;
}

export default function ProductsPageClient({
  initialProducts,
  initialNextCursor,
}: {
  initialProducts: Product[];
  initialNextCursor: string | null;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebouncedValue(search, 300);

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [nextCursor, setNextCursor] = useState<string | null>(initialNextCursor);

  // Cursor stack: index = page. Page 1 cursor = null, page 2 cursor = <nextCursor page1>, dst.
  const [cursorStack, setCursorStack] = useState<(string | null)[]>([null]);
  const currentPage = cursorStack.length;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const lastRequestedKeyRef = useRef<string>("init");

  const canPrev = cursorStack.length > 1;
  const canNext = Boolean(nextCursor);

  const queryKey = useMemo(() => {
    const q = debouncedSearch.trim();
    return `search=${q}`;
  }, [debouncedSearch]);

  async function loadProducts(opts: {
    cursor: string | null;
    pushCursorToStack?: string | null;
    replaceStack?: boolean;
    newStackIfReplace?: (string | null)[];
  }) {
    if (!baseUrl) {
      setErrorMsg("NEXT_PUBLIC_API_BASE_URL belum di-set di .env.local.");
      return;
    }

    const q = debouncedSearch.trim();
    const limit = 6;

    const url = new URL(`${baseUrl}/api/products`);
    url.searchParams.set("limit", String(limit));
    if (q) url.searchParams.set("search", q);
    if (opts.cursor) url.searchParams.set("startAfterName", opts.cursor);

    // key untuk mencegah race condition (ketik cepat)
    const reqKey = `${q}__${opts.cursor ?? "FIRST"}`;
    lastRequestedKeyRef.current = reqKey;

    setIsLoading(true);
    setErrorMsg(null);

    try {
      const [res] = await Promise.all([
        fetch(url.toString(), { cache: "no-store" }),
        delay(450),
      ]);

      if (lastRequestedKeyRef.current !== reqKey) return;

      if (!res.ok) {
        setErrorMsg("Gagal memuat produk. Coba lagi.");
        setProducts([]);
        setNextCursor(null);
        return;
      }

      const json = (await res.json()) as ProductsResponse;
      if (!json?.success || !Array.isArray(json.data)) {
        setErrorMsg("Format response API tidak sesuai.");
        setProducts([]);
        setNextCursor(null);
        return;
      }

      if (opts.replaceStack && opts.newStackIfReplace) {
        setCursorStack(opts.newStackIfReplace);
      } else if (opts.pushCursorToStack !== undefined) {
        setCursorStack((prev) => [...prev, opts.pushCursorToStack!]);
      }

      setProducts(json.data.slice(0, 6));
      setNextCursor(json.nextCursor ?? null);
    } catch {
      if (lastRequestedKeyRef.current !== reqKey) return;
      setErrorMsg("Tidak bisa terhubung ke server. Pastikan backend sudah jalan.");
      setProducts([]);
      setNextCursor(null);
    } finally {
      if (lastRequestedKeyRef.current === reqKey) setIsLoading(false);
    }
  }

  // Live search: reset pagination & load page 1
  useEffect(() => {
    const newStack: (string | null)[] = [null];
    setCursorStack(newStack);
    loadProducts({
      cursor: null,
      replaceStack: true,
      newStackIfReplace: newStack,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryKey]);

  function onPrev() {
    if (!canPrev || isLoading) return;

    const newStack = cursorStack.slice(0, -1);
    const prevCursor = newStack[newStack.length - 1] ?? null;

    setCursorStack(newStack);
    loadProducts({ cursor: prevCursor, replaceStack: true, newStackIfReplace: newStack });
  }

  function onNext() {
    if (!canNext || isLoading || !nextCursor) return;
    loadProducts({ cursor: nextCursor, pushCursorToStack: nextCursor });
  }

  const showSkeleton = isLoading;

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <div className={styles.searchWrap}>
          <label className={styles.searchLabel} htmlFor="search-products">
            Cari produk
          </label>
          <input
            id="search-products"
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Contoh: bolu, gift, coklat..."
            type="search"
            autoComplete="off"
          />
          <p className={styles.searchHint}>Live search otomatis saat kamu mengetik.</p>
        </div>
      </div>

      {errorMsg ? (
        <div className={styles.stateBox} role="alert">
          <p className={styles.stateTitle}>Oops…</p>
          <p className={styles.stateDesc}>{errorMsg}</p>
        </div>
      ) : null}

      {showSkeleton ? (
        <div className={styles.grid} aria-label="Loading produk">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles.skeletonCard} aria-hidden="true">
              <div className={styles.skeletonImage} />
              <div className={styles.skeletonBody}>
                <div className={styles.skeletonLine} />
                <div className={styles.skeletonLineSmall} />
              </div>
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className={styles.stateBox}>
          <p className={styles.stateTitle}>Produk tidak ditemukan.</p>
          <p className={styles.stateDesc}>
            Coba kata kunci lain, atau hapus pencarian untuk melihat semua produk.
          </p>
        </div>
      ) : (
        <div className={styles.grid} role="list" aria-label="Daftar produk">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/produk/${p.slug || p.id}`}
              className={styles.card}
              role="listitem"
              aria-label={`Buka detail produk ${p.name}`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={getPrimaryImage(p)}
                  alt={`Foto ${p.name} dari Classic Bakery`}
                  fill
                  sizes="(max-width: 768px) 48vw, (max-width: 1024px) 30vw, 24vw"
                />
              </div>

              <div className={styles.cardBody}>
                <h2 className={styles.name}>{p.name}</h2>
                <p className={styles.price}>{formatIDR(p.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className={styles.paginationBottom} aria-label="Pagination produk">
        <button
          type="button"
          className={styles.pageBtn}
          onClick={onPrev}
          disabled={!canPrev || showSkeleton}
          aria-disabled={!canPrev || showSkeleton}
        >
          Prev
        </button>

        <span className={styles.pageInfo} aria-live="polite">
          Halaman {currentPage}
        </span>

        <button
          type="button"
          className={styles.pageBtn}
          onClick={onNext}
          disabled={!canNext || showSkeleton}
          aria-disabled={!canNext || showSkeleton}
        >
          Next
        </button>
      </div>
    </div>
  );
}
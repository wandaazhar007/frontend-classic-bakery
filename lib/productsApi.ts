// lib/productsApi.ts
import { apiGet } from "./apiClient";

export type ProductImage = {
  url: string;
  isPrimary: boolean;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description?: string;
  priceMin: number;
  priceMax: number;
  category: string;
  images: ProductImage[];
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
};

export type GetProductsParams = {
  search?: string;
  category?: string;
  limit?: number;
  activeOnly?: boolean;
};

type ProductsApiResponse = {
  success: boolean;
  data: Product[];
  nextCursor: number | null;
};

export async function getProducts(
  params: GetProductsParams = {}
): Promise<Product[]> {
  const response = await apiGet<ProductsApiResponse>("/api/products", {
    query: {
      search: params.search,
      category: params.category,
      limit: params.limit ?? 20,
      activeOnly: params.activeOnly ?? true,
    },
  });

  return response.data;
}
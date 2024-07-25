import { api } from '@/lib/api'

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  photoUrl: string;
}

interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface ProductsResponse {
  content: Product[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}


export async function getAllProduct(): Promise<ProductsResponse> {
  const result = await api.get<ProductsResponse>("/api/v1/products");
  console.log(result.data);
  return result.data;
}
import { api } from '@/lib/api'

interface Category {
  id: number;
  nameCategory: string;
}

interface Attribute {
  id: number;
  name: string;
  value: string;
}

interface Deal {
  id: number;
  dealPrice: number;
  dealExpiration: string;
}

interface ProductsResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  status: string;
  cod: string;
  photoUrl: string;
  rating: number;
  categories: Category[];
  tags: string[];
  attributes: Attribute[];
  deal: Deal;
}


export async function getProductDetails(id: string): Promise<ProductsResponse> {
  const result = await api.get<ProductsResponse>(`/api/v1/products/details/${id}`)
  return result.data;
}

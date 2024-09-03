import { api } from "@/lib/api";
import type { ProductsResponse } from "./get-all-products";

type ProductCategoryProps = {
  category:string
}

export async function getProductCategory({category}:ProductCategoryProps): Promise<ProductsResponse> {
  const result = await api.get<ProductsResponse>("/api/v1/product", {
    params: {
      nameCategory: category
    }
  });
  console.log(result.data);
  return result.data;
}
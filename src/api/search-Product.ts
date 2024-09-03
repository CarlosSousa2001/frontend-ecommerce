import { api } from "@/lib/api";
import type { ProductsResponse } from "./get-all-products";

type SearchParams = {
  page: number | null;
  product:string | null;
}


export async function searchProduct({page, product}:SearchParams) {
  const result = await api.get<ProductsResponse>("/api/v1/product", 
    {
      params: {
        page,
        name:product,
      }
    }
  );

  //console.log(result.data)
  return result.data;
}
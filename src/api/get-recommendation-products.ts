import { api } from "@/lib/api";
import type { Product } from "./get-all-products";

export async function getRecommendationProduct() {
  const result = await api.get<Product[]>("api/v1/recommendations/1");
 // console.log(result.data);
  return result.data;
}
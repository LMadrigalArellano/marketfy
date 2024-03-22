//API being used:
//https://github.com/keikaavousi/fake-store-api

import { SingleProduct } from "@/interfaces/products/single-product";

export const getProducts = async (): Promise<SingleProduct[]> => {
  return await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => json);
}

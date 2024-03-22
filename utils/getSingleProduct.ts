import { SingleProduct } from "@/interfaces/products/single-product";
import { notFound } from "next/navigation";

export const getSingleProduct = async (id: string): Promise<SingleProduct> => {

  try {
    const product = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => json);
  
    return product;
    
  } catch (error) {
    notFound();
  }
}
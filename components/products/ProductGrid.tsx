'use client';

import { SingleProduct } from "@/interfaces/products/single-product";
import { ProductCard } from "./ProductCard";
import { useAppSelector } from "@/store";

export const ProductGrid = () => {

  const products: SingleProduct[] = useAppSelector(state => state.products.products);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-10 gap-10'>
      {
        products.map((product) => (
          <>
            <ProductCard 
              key={product.id} 
              product={ product }
            />
          </>
        ))
      }
    </div>
  )
}

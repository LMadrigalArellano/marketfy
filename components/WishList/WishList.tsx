'use client';

import { SingleProduct } from '@/interfaces';
import { useAppSelector } from '@/store';
import { ProductGrid } from '..';

export const WishList = () => {

  const products: SingleProduct[] = useAppSelector(state => state.products.products);
  
  return (
    <ProductGrid products={products}/>
  )
}

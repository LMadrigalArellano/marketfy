'use client'

import { CartProduct } from "@/interfaces";
import ProductInCart from "./ProductInCart"
import { useAppSelector } from "@/store";

const ProductsInCartGrid = () => {

  const productsInCart: CartProduct[] = useAppSelector(state => state.cart.cart);
  
  return (
    <div>
      {
        productsInCart.map( product => (
          <ProductInCart key={product.id} product={product} />
        )) 
      }
    </div>
  )
}

export default ProductsInCartGrid;




'use client'

import { CartProduct } from "@/interfaces";
import ProductInCart from "./ProductInCart"
import { useAppDispatch, useAppSelector } from "@/store";
import { calculateTotalItems } from "@/store/cart/cart-store";
import { useEffect } from "react";

const ProductsInCartGrid = () => {

  const dispatch = useAppDispatch();
  const productsInCart: CartProduct[] = useAppSelector(state => state.cart.cart);
  
  useEffect(() => {
    dispatch(calculateTotalItems());
  }, [productsInCart])

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




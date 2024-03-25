'use client'

import { QuantitySelector } from "@/components";
import { CartProduct, SingleProduct } from "@/interfaces";
import { useAppDispatch } from "@/store";
import { addProductToCart, calculateTotalItems, setSummaryInformation } from "@/store/cart/cart-store";
import { useState } from "react";

interface Props {
  product: SingleProduct,
}

export default ({ product }: Props) => {

  const [quantity, setQuantity] = useState<number>(1);

  const cartProduct: CartProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: quantity,
    image: product.image
  }

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch( addProductToCart(cartProduct) );
    dispatch( calculateTotalItems() );
    dispatch( setSummaryInformation() );
  }

  return (
    <>
      <QuantitySelector quantity={cartProduct.quantity} onQuantityChanged={setQuantity}/>

      <button 
        className='btn-primary my-5'
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </>
  )
}

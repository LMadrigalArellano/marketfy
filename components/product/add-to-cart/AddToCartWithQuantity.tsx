'use client'

import { AddToCartButton, QuantitySelector } from "@/components";
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

  return (
    <>
      <QuantitySelector quantity={cartProduct.quantity} onQuantityChanged={setQuantity}/>

      <AddToCartButton product={cartProduct}/>
    </>
  )
}

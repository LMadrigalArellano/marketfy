'use client'

import { CartProduct, SingleProduct } from "@/interfaces";
import { useAppDispatch } from "@/store";
import { addProductToCart, calculateTotalItems, setSummaryInformation } from "@/store/cart/cart-store";

interface Props {
  product: CartProduct,
}

const AddToCartButton = ({ product }: Props) => {

  const cartProduct: CartProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: product.quantity,
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
      <button 
        className='btn-primary my-5'
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </>
  )
}

export { AddToCartButton };

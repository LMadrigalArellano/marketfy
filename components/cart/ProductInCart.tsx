'use client'

import Image from "next/image";

import { CartProduct } from "@/interfaces"

interface Props {
  product: CartProduct,
}

export default ({ product }: Props) => {
  return (
    <div key={product.id} className='flex mb-5'>
    <Image
      src={product.image}
      width={100}
      height={100}
      alt={product.title}
      className='mr-5 rounded'
      style={{
        height: '100px',
        width: '100px',
      }}
    />

    <div>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <p>{product.quantity} item(s) selected</p>
      <button className='underline mt-3'>
        Remove
      </button>
    </div>
  </div>
  )
}

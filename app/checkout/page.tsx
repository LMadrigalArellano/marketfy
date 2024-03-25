import { getProducts } from '@/utils/getProducts';
import Link from 'next/link';
import React from 'react'
import ProductsToPay from './ui/ProductsToPay';
import VerifyOrder from './ui/VerifyOrder';

export default async () => {  
  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px0'>

      <div className='flex flex-col w-[1000px]'>

        <h1>Verify order</h1>

        <div className='grid grid-cols-2 sm:grid-cols-2 gap-10'>

          <ProductsToPay/>

          <VerifyOrder/>

        </div>
      </div>
    </div>
  )
}
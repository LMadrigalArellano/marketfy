import { getProducts } from '@/utils/getProducts';
import Link from 'next/link';
import React from 'react'
import ProductsToPay from './ui/ProductsToPay';
import VerifyOrder from './ui/VerifyOrder';
import { Title } from '@/components';

const VerifyOrderPage = () => {  
  return (
    <>
      <Title text='Verify Order'/>
      <div className='flex justify-center items-center mb-72 px-10 sm:px0'>
      <div className='flex flex-col w-[1000px]'>
        <div className='grid grid-cols-2 sm:grid-cols-2 gap-10'>
          <ProductsToPay/>
          <VerifyOrder/>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyOrderPage;
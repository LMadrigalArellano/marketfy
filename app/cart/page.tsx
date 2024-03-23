import ProductsInCartGrid from '@/components/cart/ProductsInCartGrid';
import Link from 'next/link';
import React from 'react'

export default async () => {  
  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px0'>

      <div className='flex flex-col w-[1000px]'>

        <h1>Cart</h1>

        <div className='grid grid-cols-2 sm:grid-cols-2 gap-10'>

          <div className='flex flex-col mt-5'>
            <span className='text-xl'>Add more items</span>
            <Link href='/catalog' className='underline mb-5'>
              Continue shopping
            </Link>

            <ProductsInCartGrid />
          </div>

            <div className='bg-white rounded-xl shadow-xl p-7'>

              <h2 className='text-2xl mb-2'>
                Order summary
              </h2>

              <div className='grid grid-cols-2'>
                <span>Products amount</span>
                <span className='text-right'>3 products</span>
              </div>

              <div className='grid grid-cols-2'>
                <span>Subtotal</span>
                <span className='text-right'>$333</span>
              </div>

              <div className='grid grid-cols-2'>
                <span className='text-2xl mt-5'>Total: </span>
                <span className='text-2xl mt-5 text-right'>$333</span>
              </div>

              <div className='mt-5 mb-2 w-full'>
              <Link 
                className='flex btn-primary justify-center'
                href='/checkout'>
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
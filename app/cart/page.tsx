import { QuantitySelector } from '@/components';
import { getProducts } from '@/utils/getProducts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async () => {

  const productsInCart = await getProducts(); //TODO: Manage with Redux
  
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

            {
              productsInCart.map( product => (
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
                    <QuantitySelector quantity={3}/>
                    <button className='underline mt-3'>
                      Remove
                    </button>
                  </div>
                </div>
              ))
            }
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
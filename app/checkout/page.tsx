import { getProducts } from '@/utils/getProducts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async () => {

  const productsInCart = await getProducts(); //TODO: Manage with Redux
  
  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px0'>

      <div className='flex flex-col w-[1000px]'>

        <h1>Verify order</h1>

        <div className='grid grid-cols-2 sm:grid-cols-2 gap-10'>

          <div className='flex flex-col mt-5'>
            <span className='text-xl'>Adjust items</span>
            <Link href='/cart' className='underline mb-5'>
              Edit cart
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
                    <p>${product.price} x 3</p>
                    <p className='font-bold'>Subtotal: ${product.price * 3}</p>
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
                <span>Impuestos (15%)</span>
                <span className='text-right'>$33</span>
              </div>

              <div className='grid grid-cols-2'>
                <span className='text-2xl mt-5'>Total: </span>
                <span className='text-2xl mt-5 text-right'>$333</span>
              </div>

              <div className='mt-5 mb-2 w-full'>
              <Link 
                className='flex btn-primary justify-center'
                href='/checkout/address'>
                Pay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
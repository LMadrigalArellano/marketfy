'use client';

import { SingleOrder } from "@/interfaces";
import { useAppSelector } from "@/store";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image';


interface Props {
  id: string
}

const OrderData = ({ id }: Props) => {

  const [loaded, setLoaded] = useState(false);

  const currentOrder: (SingleOrder | undefined) = 
    useAppSelector(state => state.orders.orders).find((order) => order.id === id);

  if(!currentOrder) return notFound();

  useEffect(() => {
    setLoaded(true);
  },[]);

  if(!loaded) return <p>Loading...</p>

  const { cart, summaryInformation } = currentOrder.orderSummary;
  const { subTotal, taxes, total, productsAmount } = summaryInformation;

  return (
    <>
      <div className='flex flex-col mt-5'>
        {
          cart.map( product => (
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
                <p>${product.price} x {product.quantity}</p>
                <p className='font-bold'>Subtotal: ${product.price * 3}</p>
              </div>
            </div>
          ))
        }
      </div>

      <div className='bg-white rounded-xl shadow-xl p-7 h-[240px]'>

        <h2 className='text-2xl mb-2'>
          Order summary
        </h2>

        <div className='grid grid-cols-2'>
          <span>Date: </span>
          <span className='text-right'>{ (new Date(currentOrder.date)).toLocaleString("en-US") }</span>
        </div>

        <div className='grid grid-cols-2'>
          <span>Products amount: </span>
          <span className='text-right'>{ productsAmount } item{productsAmount > 1 ? 's' : ''} </span>
        </div>

        <div className='grid grid-cols-2'>
          <span>Subtotal: </span>
          <span className='text-right'>${ subTotal.toFixed(2) }</span>
        </div>

        <div className='grid grid-cols-2'>
          <span>Taxes (16%): </span>
          <span className='text-right'>${ taxes.toFixed(2) }</span>
        </div>

        <div className='grid grid-cols-2'>
          <span className='text-2xl mt-5'>Total: </span>
          <span className='text-2xl mt-5 text-right'>${total.toFixed(2)}</span>
        </div>
        <div className='mt-5 mb-2 w-full'>
      </div>
    </div>
  </>
  )
}


export default OrderData;
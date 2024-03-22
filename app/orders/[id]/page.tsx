import { getProducts } from '@/utils/getProducts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  params: {
    id: string;
  }
}

export default async ({ params }: Props) => {

  const { id } = params;
  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px0'>

      <div className='flex flex-col w-[1000px]'>

        <h1>Order with id</h1>        
      </div>
    </div>
  )
}

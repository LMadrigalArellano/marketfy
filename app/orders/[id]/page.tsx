import React from 'react'
import OrderData from './ui/OrderData';

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

      <div className='grid grid-cols-2 sm:grid-cols-2 gap-10'>

        <OrderData id={id}/>

      </div>
    </div>
  </div>
  )
}

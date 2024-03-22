import { QuantitySelector } from '@/components';
import { titleFont } from '@/config/fonts';
import { getSingleProduct } from '@/utils/getSingleProduct';
import { Metadata } from 'next';
import Image from 'next/image';

interface Props {
  params: { 
    id: string 
  }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {

  try {
    const {id, title} = await getSingleProduct(params.id); //TODO: Make this request response available everywhere in the page
  
    return {
      title: `#${ id } - ${ title }`,
      description: `Details of the product ${title}`,
    }
    
  } catch (error) {

    return {
      title: 'Product page',
      description: 'Details of the product',
    } 
  }
}

const ProductPage = async ({ params }: Props) => {

  const {id, title, price, description, image } = await getSingleProduct(params.id); //TODO: Make this request response available everywhere in the page

  
  return (
    <div className='mt-5 mb-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
      <div className='col-span-1 lg:col-span-2'>
        <Image 
        src={image}
        alt={title}
        sizes='100vw'
        width={0}
        height={0}
        objectFit='cover'
        style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className='col-span-1 lg:col-span-2 px-5'>
        <h1 className={` antialiased font-bold text-xl `}>
          { title }
        </h1>
        <p className='text-lg mb-5'>
          ${ price }
        </p>

        <h3 className='font-bold text-sm'>
          Quantity
        </h3>
        <QuantitySelector quantity={ 1 }/>

        <button className='btn-primary my-5'>
          Add to cart
        </button>

        <h3 className='font-bold text-sm'>
          Description
        </h3>
          <p className='font-light'>
            { description }
          </p>
      </div>

    </div>
  )
}

export default ProductPage;
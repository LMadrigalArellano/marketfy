import Link from "next/link";
import { SingleProduct } from "..";
import Image from "next/image";
import { HeartIcon } from "@primer/octicons-react";

interface Props { 
  product: SingleProduct
}

export const ProductCard = ({ product }: Props) => {

  const { id, title, image, description, price, rating} = product;

  return (
    <div className="mx-auto right-0 mt-2 w-80">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800 border-b">
          <Image
            key={ id }
            src={ image }
            width={ 100 }
            height={ 100 }
            alt={ title }
            priority={ false }
          />          
          <p className="pt-2 text-lg font-semibold text-gray-50 text-ellipsis overflow-hidden w-72 h-16 text-center">
            {title}
          </p>
          <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{rating.rate}</p>
          </div>

          <p className="pt-2 text-lg font-semibold text-gray-50 text-center">
            {`$${price}`}
          </p>
          <div className="mt-5">
            <Link
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              href={`/product/${ id }`}
            >
              Details
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link href="/account/campaigns" className="px-4 py-2 hover:bg-gray-100 flex">
            <div className="text-red-600">
            <HeartIcon/>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Not a favorite
              </p>
              <p className="text-xs text-gray-500">Favorite</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

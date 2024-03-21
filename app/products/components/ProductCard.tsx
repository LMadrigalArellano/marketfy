import Link from "next/link";
import { SingleProduct } from "..";
import Image from "next/image";
import { HeartIcon } from "@primer/octicons-react";

interface Props { 
  product: SingleProduct
}

export const ProductCard = ({ product }: Props) => {

  const { id, title, image, description, price } = product;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800 border-b">
          <Image
            key={ id }
            src={ image }
            width={ 100 }
            height={ 100 }
            alt={ title }
            priority={ false }
            objectFit="object-contain"
          />          
          <p className="pt-2 text-lg font-semibold text-gray-50 text-ellipsis overflow-hidden whitespace-nowrap w-48">
            {title}
          </p>
          <p className="text-sm text-gray-100 text-ellipsis overflow-hidden w-auto h-10">
          {description}
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

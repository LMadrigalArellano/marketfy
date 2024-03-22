import Link from "next/link";
import { SingleProduct } from "../../app/products";
import Image from "next/image";

interface Props { 
  product: SingleProduct
}

export const ProductCard = ({ product }: Props) => {

  const { id, title, image, description, price, rating} = product;

  return (
      <div className="rounded-md fade-inm-10 w-80">
        <Image 
          src={ image }
          alt={ title }
          className="w-full object-cover max-h-52 min-h-52 cursor-pointer transition-opacity hover:opacity-95"
          width={300}
          height={300}
          priority={false}
        />
        <div className="p-4 flex flex-col">
          <Link 
            className="hover:text-blue-600"
            href={`/product/${ id }`}
          >
            {title}
          </Link>
          <span className="font-bold">${price}</span>
        </div>
      </div>    
  )
}

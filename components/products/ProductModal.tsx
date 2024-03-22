import { SingleProduct } from "@/interfaces/products/single-product";
import Image from "next/image";

interface Props {
  product: SingleProduct
}

export const ProductModal = async ({ product }: Props) => {

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{product.id} {product.title}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={product.image}
              width={150}
              height={150}
              alt={`Product's image ${product.title}`}
              className="mb-5 mt-5"
            />
            <div className="flex flex-wrap">
              <p className="mr-2 mb-2 capitalize">{product.description}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg ">
            <p className="text-sm text-gray-600">Rating</p>
            <div className="text-base font-medium text-navy-700">
              <span className="mr-2 capitalize">{product.rating.rate}</span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">
              Price
            </p>
            <span className="text-base font-medium text-navy-700">
              ${ product.price }
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">
              Category
            </p>
            <span className="text-base font-medium text-navy-700 capitalize">
              { product.category }
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">
              Actions
            </p>
            <span className="text-base font-medium text-navy-700 flex">
              Add to cart | Add to wishlist
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

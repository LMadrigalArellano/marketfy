import { SingleProduct } from "../../app/products"
import { ProductCard } from "./ProductCard";

interface Props {
  products: SingleProduct[];
}

export const ProductGrid = ({ products } : Props) => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-10 gap-10'>
      {
        products.map((product) => (
          <>
            <ProductCard 
              key={product.id} 
              product={ product }
            />
          </>
        ))
      }
    </div>
  )
}

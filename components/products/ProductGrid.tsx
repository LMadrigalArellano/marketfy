'use client';

import { SingleProduct } from "@/interfaces/products/single-product";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { SearchBar } from "..";

interface Props {
  products: SingleProduct[];
}

export const ProductGrid = ({products}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setLoaded(true);
  },[]);

  if(!loaded) return <p>Loading...</p>

  return (
    <>
      <SearchBar setSearchText={setSearchText}/>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-10 gap-10'>
        {
          products
          .filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()))
          .map((product) => (
              <ProductCard 
                key={product.id} 
                product={ product }
              />
          ))
        }
      </div>
    </>
  )
}

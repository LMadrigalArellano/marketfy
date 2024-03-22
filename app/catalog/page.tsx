import { Metadata } from 'next';
import React from 'react';
import { SingleProduct } from '../products';
import { ProductGrid } from '../../components/products/ProductGrid';

//API being used:
//https://github.com/keikaavousi/fake-store-api

const getProducts = async (): Promise<SingleProduct[]> => {
  return await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => json);
}


export const metadata: Metadata = {
  title: 'Catalog',
  description: 'Catalog Page',
  keywords: ['Catalog page', 'Browse products', 'catalog']
};

const CatalogPage = async () => {

  const products = await getProducts();

  return (
    <>
      <h1 className='text-5xl'>Catalog page</h1>
      <ProductGrid products={ products }/>
    </>
  )
}

export default CatalogPage;

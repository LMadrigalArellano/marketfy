import { Metadata } from 'next';
import React from 'react';
import { ProductGrid } from '../../components/products/ProductGrid';
import { SingleProduct } from '@/interfaces/products/single-product';
import { getProducts } from '@/utils/getProducts';

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

import { Metadata } from 'next';
import React from 'react';
import { ProductGrid } from '../../components/products/ProductGrid';

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'Catalog Page',
  keywords: ['Catalog page', 'Browse products', 'catalog']
};

const CatalogPage = async () => {
  return (
    <>
      <h1 className='text-5xl'>Catalog page</h1>
      <ProductGrid />
    </>
  )
}

export default CatalogPage;

import { Metadata } from 'next';
import React from 'react';
import { ProductGrid } from '../../components/products/ProductGrid';
import { Title } from '@/components';

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'Catalog Page',
  keywords: ['Catalog page', 'Browse products', 'catalog']
};

const CatalogPage = async () => {
  return (
    <>
      <Title text={'Product Catalog'}/>
      <ProductGrid />
    </>
  )
}

export default CatalogPage;

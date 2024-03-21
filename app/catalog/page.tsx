import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Catalog',
  description: 'Catalog Page',
  keywords: ['Catalog page', 'Browse products', 'catalog']
};

const CatalogPage = () => {
  return (
    <>
      <h1 className='text-7xl'>Catalog page</h1>
    </>
  )
}

export default CatalogPage;

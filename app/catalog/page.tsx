import { Metadata } from 'next';
import React from 'react';
import { Catalog, IsAuth, Title } from '@/components';

const CatalogPage = async () => {
  return (
    <IsAuth>
      <Title text={'Product Catalog'}/>
      <Catalog />
    </IsAuth>
  )
}

export default CatalogPage;

import { Metadata } from 'next';
import React from 'react';
import { Catalog, Title } from '@/components';

const CatalogPage = async () => {
  return (
    <>
      <Title text={'Product Catalog'}/>
      <Catalog />
    </>
  )
}

export default CatalogPage;

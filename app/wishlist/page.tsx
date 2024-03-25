import React from 'react';
import { Title, WishList } from '@/components';

const WishListPage = async () => {
  return (
    <>
      <Title text={'Wishlist'}/>
      <WishList />
    </>
  )
}

export default WishListPage;

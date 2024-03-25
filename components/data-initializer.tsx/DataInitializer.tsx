'use client'

import { calculateTotalItems, setInitialProductsInCart, setSummaryInformation } from '@/store/cart/cart-store';
import { setInitialProducts } from '@/store/products/products-store';
import { loadState } from '@/utils/localStorage';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export const DataInitializer = () => {

  const [persistedState] = useState(loadState());
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(setInitialProductsInCart(persistedState.cart));
		dispatch(setInitialProducts(persistedState.products));
    dispatch( calculateTotalItems() );
		dispatch( setSummaryInformation() );
  }, []);

	return (
		<></>
	);
}

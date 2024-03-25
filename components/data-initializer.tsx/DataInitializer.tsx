'use client'

import { calculateTotalItems, setInitialProductsInCart, setSummaryInformation } from '@/store/cart/cart-store';
import { setInitialProducts } from '@/store/products/products-store';
import { setInitialOrders } from '@/store/orders/orders.store';
import { loadState } from '@/utils/localStorage';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export const DataInitializer = () => {

  const [persistedState] = useState(loadState());
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch( setInitialProductsInCart(persistedState.cart) );
		dispatch( setInitialProducts(persistedState.products) );
		dispatch( setInitialOrders(persistedState.orders) );
    dispatch( calculateTotalItems() );
		dispatch( setSummaryInformation() );
  }, []);

	return (
		<></>
	);
}

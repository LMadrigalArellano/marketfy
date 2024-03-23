import { configureStore } from '@reduxjs/toolkit'

import sideMenuReducer from './ui/sideMenuSlice';
import productsReducer from './products/products-store';
import cartReducer from './cart/cart-store';


import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { saveState, loadState } from '@/utils/localStorage';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
    products: productsReducer,
    cart: cartReducer
  },
  preloadedState: {
    products: persistedState.products,
    cart: persistedState.cart,
  },
});

store.subscribe(() => {
  saveState({
    products: store.getState().products,
    cart: store.getState().cart
  });
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
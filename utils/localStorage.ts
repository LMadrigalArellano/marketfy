'use client';

import { CartState, ProductsState } from "@/interfaces";

interface parsedValues {
  products: ProductsState
  cart: CartState
}

const defaultValue: parsedValues = {
  products: {
    products: [],
  },
  cart: {
    cart: [],
    totalItems: 0
  }
}

export const loadState = ():parsedValues => {

  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return defaultValue;
    }

    return JSON.parse(serializedState);

  } catch (error) {
    return defaultValue;

  }
}

export const saveState = (state: any) => {

  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);

  } catch (error) {
    
  }

}
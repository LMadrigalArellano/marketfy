import { CartProduct } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CartState {
  cart: CartProduct[];
}

const initialState: CartState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addProductToCart(state, action: PayloadAction<CartProduct>){

      const newProduct = action.payload;

      state.cart.push(newProduct);

    },

    updateProductQuantity(state, quantity) {
      console.log(quantity);
      state.cart.map((cartItem) => console.log(cartItem));
    }

  //   removeProduct(state,),
  }
});

export const { addProductToCart, updateProductQuantity} = cartSlice.actions

export default cartSlice.reducer
import { CartProduct } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CartState {
  cart: CartProduct[];
  totalItems: number;
}

const initialState: CartState = {
  cart: [],
  totalItems: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    calculateTotalItems(state){
      state.totalItems = state.cart.reduce((total, item) => total += item.quantity, 0 );
    },

    addProductToCart(state, action: PayloadAction<CartProduct>){
      const newProduct = action.payload;
      const indexOfProductInCart = state.cart.map(x => x.id).indexOf(newProduct.id);

      if( indexOfProductInCart !== -1){
        state.cart[indexOfProductInCart].quantity += newProduct.quantity;
        return;
      }
      state.cart.push(newProduct);
    },

    // updateProductQuantity(state, quantity) {
    //   console.log(quantity);
    //   state.cart.map((cartItem) => console.log(cartItem));
    // },

    removeProduct(state, action: PayloadAction<CartProduct>) {
      state.cart = state.cart.filter((product) => product.id !== action.payload.id );
    }
  }
});

export const { addProductToCart, removeProduct, calculateTotalItems} = cartSlice.actions

export default cartSlice.reducer
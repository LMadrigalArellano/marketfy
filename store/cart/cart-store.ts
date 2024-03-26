import { CartProduct, CartState } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: CartState = {
  "cart": [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "quantity": 1,
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "quantity": 1,
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "quantity": 1,
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    }
  ],
  "totalItems": 3,
  "summaryInformation": {
    "productsAmount": 3,
    "subTotal": 188.24,
    "taxes": 30.1184,
    "total": 218.35840000000002
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    setInitialProductsInCart(state, action: PayloadAction<CartState>){
      if(action.payload.cart.length > 0){
        state.cart = action.payload.cart;
      }
    },

    calculateTotalItems(state){
      state.totalItems = state.cart.reduce((total, item) => total += item.quantity, 0 );
    },

    setSummaryInformation: (state) => {

      const subTotal = state.cart.reduce(
        (subTotal, product) => (product.quantity * product.price) + subTotal,
        0
      );

      const taxes = subTotal * 0.16;
      const total = subTotal + taxes;
      
      state.summaryInformation = {
        productsAmount: state.totalItems,
        subTotal,
        taxes,
        total,
      }
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
    },

    clearCart(state) {
      state.cart = [];
    }
  }
});

export const { 
  setInitialProductsInCart, 
  addProductToCart, 
  removeProduct, 
  calculateTotalItems,
  setSummaryInformation,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
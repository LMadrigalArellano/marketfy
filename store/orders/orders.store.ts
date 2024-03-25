import { OrdersState, SingleOrder } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: OrdersState = {
  orders: [
  {
    id: '123',
    date: new Date(),
    orderSummary: {
      cart: [
        {
          "id": 1,
          "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 33,
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "quantity": 1,
        },
        {
          "id": 2,
          "title": "Mens Casual Premium Slim Fit T-Shirts ",
          "price": 33,
          "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          "quantity": 1,
        },
        {
          "id": 3,
          "title": "Mens Cotton Jacket",
          "price": 33,
          "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          "quantity": 1,
        },
      ],
      totalItems: 3,
      summaryInformation: {
        productsAmount: 3,
        subTotal: 333,
        taxes: 333,
        total: 333,
      }
    }
  }
]}

const cartSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addNewOrder(state, action: PayloadAction<SingleOrder>){
      const newOrder = action.payload;
      const indexOfOrderInList = state.orders.map(x => x.id).indexOf(action.payload.id);

      if( indexOfOrderInList !== -1){
        return;
      }
      state.orders.push(newOrder);
    },
  }
});

export const { 
  addNewOrder,
} = cartSlice.actions

export default cartSlice.reducer
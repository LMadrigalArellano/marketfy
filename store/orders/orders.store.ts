import { OrdersState, SingleOrder } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: OrdersState = {
  orders: []
}

const cartSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {

    setInitialOrders(state, action: PayloadAction<OrdersState>){
      state.orders = action.payload.orders;
    },

    addNewOrder(state, action: PayloadAction<SingleOrder>){
      state.orders.push(action.payload);
    },
  }
});

export const {
  setInitialOrders, 
  addNewOrder,
} = cartSlice.actions

export default cartSlice.reducer
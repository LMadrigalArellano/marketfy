import { OrdersState, SingleOrder } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: OrdersState = {
  orders: [
    {
      "id": "d7b13eeb-e5c9-4b8e-ad8f-7d086224489a",
      "userId": "333",
      "date": "Tue Mar 26 2024 14:48:59 GMT-0600 (Central Standard Time)",
      "orderSummary": {
        "cart": [
          {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "quantity": 3,
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          }
        ],
        "totalItems": 3,
        "summaryInformation": {
          "productsAmount": 3,
          "subTotal": 66.9,
          "taxes": 10.704,
          "total": 77.60400000000001
        }
      }
    }
  ]
}

const cartSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {

    setInitialOrders(state, action: PayloadAction<OrdersState>){
      if(action.payload.orders.length > 0){
        state.orders = action.payload.orders;
      }
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
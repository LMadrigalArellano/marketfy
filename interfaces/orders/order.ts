import { CartState } from "..";

export interface SingleOrder {
  id: string;
  date: string;
  orderSummary: CartState;
}


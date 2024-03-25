import { CartState } from "..";

export interface SingleOrder {
  id: string;
  date: Date;
  orderSummary: CartState;
}


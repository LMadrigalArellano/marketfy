import { CartProduct } from "..";

export interface CartState {
  cart: CartProduct[];
  totalItems: number;
}
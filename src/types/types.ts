import { ChangeEventHandler } from "react";

export interface IProduct {
  image: string;
  name: string;
  description: string;
  price: number;
  count: number;
  id: number;
}

export interface ICustomer {
  name: string;
  wishlist: Array<IWishlistItem>;
  cart: Array<ICartItem>;
}

export interface IWishlistItem {
  image: string;
  name: string;
}
export interface ICartItem {
  image: string;
  name: string;
  count: number;
  price: number;
}

export interface ISelect {
  options: Array<IOption>;
  className?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}
export interface IOption {
  label: string;
  value: string;
}

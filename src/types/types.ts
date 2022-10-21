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
  wishlist: Array<IFlyoutItem>;
  cart: Array<IFlyoutItem>;
}

export interface IFlyoutItem {
  image: string;
  name: string;
  stock: number;
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

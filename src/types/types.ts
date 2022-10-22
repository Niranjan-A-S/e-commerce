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
  id: number;
  name: string;
  wishlist: Array<IWishListItem>;
  cart: Array<IFlyoutItem>;
}

export interface IFlyoutItem {
  id: number;
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

export interface IPayLoadWishList {
  checked: boolean;
  item: IWishListItem;
}

export interface IWishListItem {
  id: number;
  image: string;
  name: string;
  stock: number;
}

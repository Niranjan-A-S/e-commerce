import { ChangeEventHandler } from "react";

export interface IProduct {
  image: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  id: number;
}

export interface ICustomer {
  id: number;
  name: string;
  wishlist: Array<IFlyoutItem>;
  cart: Array<IFlyoutItem>;
}

export interface IFlyoutItem {
  id: number;
  image: string;
  name: string;
  stock: number;
  quantity?: number;
  price?: number;
}

export interface ISelect {
  options: Array<IOption>;
  className?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}
export interface IOption {
  label: string;
  value: string;
}

export interface IPayLoadItem {
  checked: boolean;
  item: IFlyoutItem;
}

export interface IWishListItem {
  id: number;
  image: string;
  name: string;
  stock: number;
}

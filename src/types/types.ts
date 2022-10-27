import { ChangeEventHandler } from "react";

export interface IProduct {
  image: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  id: number;
  stockLeft: number;
}
export interface ICartItem extends Omit<IProduct, "description"> {
  quantity: number;
}

export interface IWishListItem
  extends Omit<IProduct, "price" | "description" | "stockLeft"> {}
export interface ICustomer {
  id: number;
  name: string;
  wishlist: Array<number>;
  cart: Array<ICartItem>;
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
  item: ICartItem;
}

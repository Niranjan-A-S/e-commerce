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
export interface ICartItem
  extends Omit<IProduct, "description" | "stock" | "stockLeft"> {
  quantity: number;
}

export interface ICart {
  id: number;
  quantity: number;
}
export interface IWishListItem
  extends Omit<IProduct, "price" | "description" | "stock"> {}

export interface IProductStock {
  id: number;
  quantity: number;
}
export interface ICustomer {
  id: number;
  name: string;
  wishlist: Array<any>;
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

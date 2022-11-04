import { ChangeEventHandler } from "react";

export interface IProductsInitialState {
  products: Products;
}

export type Products = Record<string, IProductItem>;
export interface IProductItem {
  image: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  stockLeft: number;
}

export interface ICartItem
  extends Omit<IProductItem, "description" | "stock" | "stockLeft"> {
  quantity: number;
  productID: string;
}

export interface IWishListItem
  extends Omit<IProductItem, "price" | "description" | "stock"> {}

export interface ICustomer {
  id: number;
  name: string;
  wishlist: Array<string>;
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

export interface IItemUpdate {
  productID: string;
  event: boolean;
}

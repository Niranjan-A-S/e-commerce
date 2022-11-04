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
  extends Omit<IProductItem, "price" | "description" | "stock"> {
  productID: string;
}

export type ICustomers = {
  customerList: Record<string, ICustomer>;
  selectedCustomer: string;
};

export type CustomerID = "c11" | "c12" | "c13";

export interface ICustomer {
  name: string;
  wishlist: Array<string>;
  cart: Array<ICartItem>;
}

export interface IOption {
  name: string;
  customerID: string;
}

export interface IItemUpdate {
  productID: string;
  event: boolean;
}

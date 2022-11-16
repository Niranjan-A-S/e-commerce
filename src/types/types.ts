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

export interface ICartItemUpdate {
  productID: string;
  event: boolean;
  selectedCustomer: string;
}

export interface IPayloadItem {
  productID: string;
  selectedCustomer: string;
}

export interface IPayloadCartItem {
  cartItem: ICartItem;
  selectedCustomer: string;
}

export interface IPayloadProduct {
  productID: string;
  quantity: number;
}

export interface IFilters {
  sortValue: string;
  view: string;
}

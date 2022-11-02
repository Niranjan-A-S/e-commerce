import { createSlice } from "@reduxjs/toolkit";
import { IProductStore } from "../../../types";

const productStore: IProductStore = {
  products: {
    a11: {
      name: "MacBook Air M2",
      image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg",
      description: "2022 Apple MacBook Air, M2 chip",
      price: 149000,
      stock: 5,
      stockLeft: 5,
    },
    a12: {
      name: "Sony WH-1000XM4",
      image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
      description:
        "Wireless Noise Cancellation Bluetooth Headphones, 30 Hrs Battery",
      price: 19900,
      stock: 3,
      stockLeft: 3,
    },
    a13: {
      name: "HP Monitor",
      image: "https://m.media-amazon.com/images/I/813UPEDF+zL._SL1500_.jpg",
      description:
        "HP M24fwa 23.8-(60.4cm) Eye-safe Certified Full HD IPS, Monitor ",
      price: 14200,
      stock: 5,
      stockLeft: 5,
    },
    a14: {
      name: "Apple AirPods Pro",
      image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg",
      description: "Apple AirPods Pro (2nd Generation) ​​​",
      price: 26400,
      stock: 8,
      stockLeft: 8,
    },
    a15: {
      name: "Canon EOS 1DX",
      image: "https://m.media-amazon.com/images/I/81rBRIp8FnL._SL1500_.jpg",
      description: "Canon EOS 1DX Mark III",
      price: 609495,
      stock: 4,
      stockLeft: 4,
    },
    a16: {
      name: "Apple iPhone 14",
      image: "https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg",
      description: "Apple iPhone 14 256GB Midnight",
      price: 89900,
      stock: 2,
      stockLeft: 2,
    },
    a17: {
      name: "Keychron K2",
      image: "https://m.media-amazon.com/images/I/614chmBNoqL._SL1200_.jpg",
      description:
        "Keychron K2 Wireless Bluetooth/USB Wired Gaming Mechanical Keyboard,",
      price: 18234,
      stock: 10,
      stockLeft: 10,
    },
    a18: {
      name: "Logitech MX Master 3",
      image: "https://m.media-amazon.com/images/I/614w3LuZTYL._SL1500_.jpg",
      description: "Logitech MX Master 3 Advanced Wireless Mouse - Graphite",
      price: 9995,
      stock: 12,
      stockLeft: 12,
    },
  },
};

const productStoreSlice = createSlice({
  name: "productsStore",
  initialState: productStore,
  reducers: {},
});

export const productStoreReducer = productStoreSlice.reducer;

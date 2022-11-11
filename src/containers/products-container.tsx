import { useCallback } from "react";
import styled from "styled-components";

import { ProductItem } from "../components";
import { itemAddedToCart, itemToggledToWishList } from "../features/customer";
import { productStockUpdated } from "../features/products";
import { useAppDispatch, useAppSelector } from "../redux";
import { ICartItem } from "../types";

export const ProductsList = () => {
  const dispatch = useAppDispatch();

  const {
    products,
    customer: { selectedCustomer },
  } = useAppSelector((state) => state);

  const toggleItemToWishList = useCallback(
    (productID: string) => {
      dispatch(itemToggledToWishList({ productID, selectedCustomer }));
    },
    [dispatch, selectedCustomer]
  );

  const addToCart = useCallback(
    (cartItem: ICartItem) => {
      const { productID } = cartItem;
      dispatch(itemAddedToCart({ cartItem, selectedCustomer }));
      dispatch(productStockUpdated({ productID, event: false }));
    },
    [dispatch, selectedCustomer]
  );

  return (
    <ProductsListWrapper>
      {Object.entries(products).map(([productID, productItem]) => (
        <ProductItem
          key={productID}
          productID={productID}
          productItem={productItem}
          toggleItemToWishList={toggleItemToWishList}
          addToCart={addToCart}
        />
      ))}
    </ProductsListWrapper>
  );
};

const ProductsListWrapper = styled.main`
  padding: 100px 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  /* @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  } */
`;

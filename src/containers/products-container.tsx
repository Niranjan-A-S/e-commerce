import { useCallback } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app";
import { ProductItem } from "../components";
import { itemToggledToWishList, itemAddedToCart } from "../features/customer";
import { productStockUpdated } from "../features/products";
import { ICartItem } from "../types";

export const ProductsList = () => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state);

  const toggleItemToWishList = useCallback(
    (productID: string) => {
      dispatch(itemToggledToWishList(productID));
    },
    [dispatch]
  );

  const addToCart = useCallback(
    (cartItem: ICartItem) => {
      dispatch(itemAddedToCart(cartItem));
      dispatch(productStockUpdated(cartItem.productID));
    },
    [dispatch]
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

const ProductsListWrapper = styled.div`
  padding: 50px 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

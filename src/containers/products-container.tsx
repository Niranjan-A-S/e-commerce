import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ProductItem } from "../components";
import {
  itemAddedToCart,
  itemAddedToWishList,
  itemRemovedFromWishList,
} from "../redux/features/customer";
import {
  fetchProducts,
  productStockDecreased,
} from "../redux/features/product";
import { customUseSelector, StoreDispatch } from "../redux/store";
import { ICartItem, IWishListItem } from "../types";

export const ProductsList = () => {
  const dispatch = useDispatch<StoreDispatch>();

  const product = customUseSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToWishList = useCallback(
    (item: IWishListItem, checked: boolean) => {
      !checked && dispatch(itemAddedToWishList(item));
      checked && dispatch(itemRemovedFromWishList(item.id));
    },
    [dispatch]
  );

  const addToCart = useCallback(
    (item: ICartItem) => {
      const { id, stockLeft } = item;

      stockLeft &&
        dispatch(productStockDecreased(id)) &&
        dispatch(itemAddedToCart(item));
    },
    [dispatch]
  );

  return (
    <ProductsListWrapper>
      {product.loading && <h1>Loading...</h1>}
      {!product.loading && product.error && <h1>{product.error}</h1>}
      {!product.loading &&
        product.productList.length &&
        product.productList.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToWishList={addToWishList}
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

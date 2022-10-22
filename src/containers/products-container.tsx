import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ProductItem } from "../components";
import { fetchProducts } from "../redux/features/product";
import { customUseSelector, StoreDispatch } from "../redux/store";

export const ProductsList = () => {
  const dispatch = useDispatch<StoreDispatch>();

  const product = customUseSelector((state) => state.product);
  const [checked, setChecked] = useState<boolean>(true);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToWishList = useCallback(
    (id: number) => {
      setChecked(!checked);
    },
    [checked]
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
            checked={checked}
            addToWishList={addToWishList}
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

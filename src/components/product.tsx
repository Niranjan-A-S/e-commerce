import { memo, useState } from "react";
import styled from "styled-components";

import { IProduct } from "../types";
import { ProductCounter } from ".";

interface IProductProps {
  product: IProduct;
  checked: boolean;
  addToWishList(id: number): void;
}

export const ProductItem = memo((props: IProductProps) => {
  const [count, setCount] = useState<number>(0);

  const { product, checked, addToWishList } = props;

  const incrementCounter = () => {
    product.count > count && setCount((prev) => prev + 1);
  };

  const decrementCounter = () => count > 0 && setCount((prev) => prev - 1);

  return (
    <ProductItemWrapper>
      <ProductInfo>
        <ProductImage src={product.image} alt={"product-image"} />
        <ProductName children={product.name} />
        <ProductDescription children={product.description} />
        <ProductPrice>Rs.{product.price}</ProductPrice>
      </ProductInfo>
      <ProductTools>
        <ProductCounter
          count={count}
          incrementCount={incrementCounter}
          decrementCount={decrementCounter}
        />
        <ProductRemaining>
          <strong>{product.count}</strong> left
        </ProductRemaining>
        <ProductButton>Add to Cart</ProductButton>
        <ProductButton onClick={(event) => addToWishList(product.id)}>
          <WishListIcon
            src={
              checked
                ? "https://cdn-icons-png.flaticon.com/512/1216/1216649.png"
                : "https://cdn-icons-png.flaticon.com/512/1216/1216575.png"
            }
            alt="heart-logo"
          />
        </ProductButton>
      </ProductTools>
    </ProductItemWrapper>
  );
});

const ProductItemWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px;
  display: grid;
  grid-row-gap: 20px;
`;

const ProductInfo = styled.div`
  display: grid;
  grid-row-gap: 5px;
`;
const ProductTools = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  grid-gap: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 270px;
  justify-self: center;
  border: none;
`;

const ProductName = styled.span`
  justify-self: center;
  font-weight: bolder;
`;

const ProductDescription = styled.span`
  height: 45px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  align-self: center;
`;

const ProductPrice = styled.span`
  font-weight: bold;
`;

const ProductRemaining = styled.span`
  justify-self: end;
`;

const ProductButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 5px 0;
`;

const WishListIcon = styled.img`
  height: 20px;
  width: 20px;
`;

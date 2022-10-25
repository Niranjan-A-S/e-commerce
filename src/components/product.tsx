import { memo, useState } from "react";
import styled from "styled-components";

import { ICartItem, IProduct, IWishListItem } from "../types";
import { ProductCounter } from ".";

interface IProductProps {
  product: IProduct;
  addToWishList(item: IWishListItem, checked: boolean): void;
  addToCart(item: ICartItem): void;
}

export const ProductItem = memo((props: IProductProps) => {
  const [quantity, setCount] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);

  const {
    product: { id, price, image, stock, name, description },
    addToWishList,
    addToCart,
  } = props;

  const incrementCounter = () => {
    stock > quantity && setCount((prev) => prev + 1);
  };

  const decrementCounter = () => quantity > 0 && setCount((prev) => prev - 1);

  return (
    <ProductItemWrapper>
      <ProductInfo>
        <ProductImage src={image} alt={"product-image"} />
        <ProductName children={name} />
        <ProductDescription children={description} />
        <ProductPrice>Rs.{price}</ProductPrice>
      </ProductInfo>
      <ProductTools>
        <ProductCounter
          count={quantity}
          incrementCount={incrementCounter}
          decrementCount={decrementCounter}
        />
        <ProductRemaining>
          <strong>{stock}</strong> left
        </ProductRemaining>
        <ProductButton
          onClick={() => addToCart({ id, image, name, stock, price, quantity })}
        >
          Add to Cart
        </ProductButton>
        <ProductButton
          onClick={(event) => {
            addToWishList({ id, name, image, stock }, checked);
            setChecked(!checked);
          }}
        >
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

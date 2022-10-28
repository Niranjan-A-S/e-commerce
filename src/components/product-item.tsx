import { memo, useState } from "react";
import styled from "styled-components";

import { ICartItem, IProduct } from "../types";
import { ImageSources } from "../enums";

interface IProductProps {
  product: IProduct;
  addToWishList(item: number): void;
  addToCart(item: ICartItem): void;
}

export const ProductItem = memo((props: IProductProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const {
    product: { id, price, image, name, description, stockLeft },
    addToWishList,
    addToCart,
  } = props;

  return (
    <ProductItemWrapper>
      <ProductImage src={image} alt={"product-image"} />
      <ProductName children={name} />
      <ProductDescription children={description} />
      <ProductInfo>
        <strong>Rs.{price}</strong>
        <ProductStock>
          <strong>{stockLeft}</strong> left
        </ProductStock>
      </ProductInfo>
      <ProductTools>
        <ProductButton
          disabled={!stockLeft ? true : false}
          onClick={() => addToCart({ id, name, price, image, quantity: 1 })}
          children={stockLeft ? "Add to Cart" : "Out of Stock"}
        />
        <ProductButton
          onClick={() => {
            setChecked(!checked);
            addToWishList(id);
          }}
        >
          <WishListIcon
            src={checked ? ImageSources.WISHLIST_RED : ImageSources.WISHLIST}
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
  grid-row-gap: 5px;
`;

const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const ProductStock = styled.span`
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

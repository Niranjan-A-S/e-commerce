import { memo, useState } from "react";
import styled from "styled-components";

import { ICartItem, IProduct, IWishListItem } from "../types";
import { ImageSources } from "../enums";
import { InStock, outOfStock } from "../styles";

interface IProductProps {
  product: IProduct;
  addToWishList(item: IWishListItem, checked: boolean): void;
  addToCart(item: ICartItem): void;
}

export const ProductItem = memo((props: IProductProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const {
    product: { id, price, image, stock, name, description, stockLeft },
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
          style={!stockLeft ? outOfStock : InStock}
          onClick={() => {
            addToCart({
              id,
              image,
              name,
              price,
              stock,
              quantity: 1,
              stockLeft,
            });
          }}
        >
          {stockLeft ? "Add to Cart" : "Sold Out"}
        </ProductButton>
        <ProductButton
          onClick={() => {
            addToWishList({ id, name, image }, checked);
            setChecked(!checked);
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

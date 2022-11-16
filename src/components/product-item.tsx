import { memo } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import { ICartItem, IProductItem } from "../types";
import { WISHLIST, WISHLIST_RED } from "../enums";
import { useAppSelector } from "../redux";
import { productImage, productItem, productName } from "../styles";

interface IProductItemProps {
  productItem: IProductItem;
  productID: string;
  toggleItemToWishList(productID: string): void; //change name
  addToCart(cartItem: ICartItem): void;
}

export const ProductItem = memo((props: IProductItemProps) => {
  const navigate = useNavigate();

  const {
    customer: { customerList, selectedCustomer },
    filter: { view },
  } = useAppSelector((state) => state);

  const {
    productItem: { image, name, price, stockLeft },
    productID,
    toggleItemToWishList,
    addToCart,
  } = props;

  return (
    <ProductItemWrapper style={view === "list" ? productItem : {}}>
      <ProductImage
        src={image}
        onClick={() => navigate(`item/${productID}`)}
        style={view === "list" ? productImage : {}}
      />
      <ProductName children={name} style={view === "list" ? productName : {}} />
      <ProductPrice>${price}</ProductPrice>
      <ProductStock>{stockLeft} left</ProductStock>
      <AddToCartButton
        disabled={!stockLeft ? true : false}
        onClick={() =>
          addToCart({ name, image, price, quantity: 1, productID })
        }
      >
        {stockLeft ? "Add to Cart" : "Out of Stock"}
      </AddToCartButton>
      <WishListButton
        onClick={() => {
          toggleItemToWishList(productID);
        }}
      >
        <WishListIcon
          src={
            customerList[selectedCustomer].wishlist.includes(productID)
              ? WISHLIST_RED
              : WISHLIST
          }
        />
      </WishListButton>
    </ProductItemWrapper>
  );
});

const ProductItemWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 2.6px;
  padding: 5px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 2fr 0.5fr;
`;

const ProductImage = styled.img`
  justify-self: center;
  width: 100%;
  aspect-ratio: 1/0.9;
  grid-column: 1/3;
  cursor: pointer;
  @media screen and (max-width: 1060px) {
    width: 60%;
  }
  @media screen and (max-width: 620px) {
    width: 40%;
  }
`;

const ProductName = styled.span`
  font-weight: bolder;
  color: #3c4048;
  grid-column: 1/3;
`;

const ProductPrice = styled.span`
  font-weight: bold;
  color: #b2b2b2;
`;

const ProductStock = styled.span`
  text-align: center;
  font-weight: bold;
  color: #b2b2b2;
`;

const WishListButton = styled.button`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 2px 0;
`;

const WishListIcon = styled.img`
  width: 25px;
  aspect-ratio: 1/1;
`;

const AddToCartButton = styled.button`
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #fff;
  padding: 8px;
`;

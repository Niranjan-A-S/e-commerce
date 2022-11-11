import { memo } from "react";
import styled from "styled-components";

import { ICartItem, IProductItem } from "../types";
import { useNavigate } from "react-router";
import { WISHLIST, WISHLIST_RED } from "../enums";
import { useAppSelector } from "../redux";

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
    products,
  } = useAppSelector((state) => state);

  const { wishlist } = customerList[selectedCustomer];

  const {
    productItem: { description, image, name, price, stockLeft },
    productID,
    toggleItemToWishList,
    addToCart,
  } = props;

  return (
    <ProductItemWrapper>
      <ProductImage src={image} onClick={() => navigate(`item/${productID}`)} />
      <ProductName children={name} />
      <ProductDescription children={description} />
      <ProductInfo>
        <strong>Rs.{price}</strong>
        <ProductStock>
          <strong>{stockLeft}</strong> left
        </ProductStock>
      </ProductInfo>
      <ProductTools>
        <AddToCartButton
          disabled={!stockLeft ? true : false}
          onClick={() =>
            addToCart({ name, image, price, quantity: 1, productID })
          }
        >
          {stockLeft
            ? stockLeft === products[productID].stock
              ? "Add to Cart"
              : "Add more to Cart"
            : "Out of Stock"}
        </AddToCartButton>
        <WishListButton
          onClick={() => {
            toggleItemToWishList(productID);
          }}
        >
          <WishListIcon
            src={wishlist.includes(productID) ? WISHLIST_RED : WISHLIST}
          />
        </WishListButton>
      </ProductTools>
    </ProductItemWrapper>
  );
});

const ProductItemWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 10px;
  cursor: pointer;
  height: 400px;
  width: 300px;
  display: grid;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  border: none;
`;

const ProductName = styled.span`
  justify-self: center;
  font-weight: bolder;
  color: #3c4048;
  font-size: large;
`;

const ProductDescription = styled.span`
  max-height: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
  align-self: center;
`;

const ProductStock = styled.span`
  justify-self: end;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductTools = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const WishListButton = styled.button`
  border: none;
  background-color: #fff;
  padding: 0 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const WishListIcon = styled.img`
  height: 25px;
  width: 25px;
`;

const AddToCartButton = styled(WishListButton)`
  flex-grow: 2;
  font-size: 15px;
  font-weight: bold;
`;

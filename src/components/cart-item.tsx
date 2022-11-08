import { memo } from "react";
import styled from "styled-components";

import { ProductCounter } from ".";
import { ICartItem } from "../types";

interface ICartItemProps {
  cartItem: ICartItem;
  quantityDecreased(productID: string): void;
  quantityIncreased(productID: string): void;
  removeItem(productID: string, quantity: number): void;
}

export const CartItem = memo((props: ICartItemProps) => {
  const {
    cartItem: { image, name, quantity, price, productID },
    quantityDecreased,
    quantityIncreased,
    removeItem,
  } = props;

  return (
    <CartItemWrapper>
      <ItemInfo>
        <ItemImage src={image} />
        <ItemName>{name}</ItemName>
      </ItemInfo>
      <ItemDetails>
        <ProductCounter
          count={quantity}
          incrementCount={() => quantityIncreased(productID)}
          decrementCount={() => quantityDecreased(productID)}
          productID={productID}
        />
        <DeleteButton onClick={() => removeItem(productID, quantity)}>
          Remove from Cart
        </DeleteButton>
        <ItemPrice>
          Price : Rs. <strong>{price * quantity}</strong>
        </ItemPrice>
      </ItemDetails>
    </CartItemWrapper>
  );
});

const CartItemWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  height: fit-content;
`;

const ItemInfo = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.8fr;
  grid-gap: 10px;
`;

const ItemImage = styled.img`
  width: 70px;
  height: 70px;
`;

const ItemName = styled.span`
  justify-self: start;
  padding: 5px;
  align-self: center;
  width: fit-content;
  font-weight: bold;
  font-size: 18px;
`;

const ItemDetails = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 18px;
`;

const ItemPrice = styled.span`
  justify-self: start;
`;

const DeleteButton = styled.button`
  border: 1px solid red;
  background-color: #fff;
  padding: 5px 10px;
  height: fit-content;
  justify-self: end;
`;

import { useCallback, useMemo } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../app";
import { CartItem, FlyoutHeader } from "../components";
import { itemRemovedFromCart, itemUpdatedInCart } from "../features/customer";
import {
  productStockRestored,
  productStockUpdated,
} from "../features/products";

export const Cart = () => {
  const dispatch = useAppDispatch();

  const {
    customer: { cart },
    products,
  } = useAppSelector((state) => state);

  const totalPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  const quantityIncreased = useCallback(
    (productID: string) => {
      dispatch(itemUpdatedInCart({ productID, event: true }));
      dispatch(productStockUpdated({ productID, event: false }));
    },
    [dispatch]
  );

  const removeItem = useCallback(
    (productID: string) => {
      dispatch(itemRemovedFromCart(productID));
      dispatch(productStockRestored(productID));
    },
    [dispatch]
  );

  const quantityDecreased = useCallback(
    (productID: string) => {
      dispatch(itemUpdatedInCart({ productID, event: false }));
      dispatch(productStockUpdated({ productID, event: true }));
      products[productID].stockLeft === products[productID].stock - 1 &&
        removeItem(productID);
    },
    [dispatch, products, removeItem]
  );

  return (
    <CartWrapper>
      <FlyoutHeader flyoutName={"Cart"} />
      <CartItemsWrapper>
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.productID}
            cartItem={cartItem}
            removeItem={removeItem}
            quantityDecreased={quantityDecreased}
            quantityIncreased={quantityIncreased}
          /> //Look for an alternative approach
        ))}
      </CartItemsWrapper>
      <TotalPrice>
        Total Price: <strong>Rs.{totalPrice}</strong>
      </TotalPrice>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  position: fixed;
  right: 0px;
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 0.2fr 0.8fr 1fr;
  border: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 2;
  background-color: #fff;
  width: 500px;
  height: 100%;
  animation: flyout 1s;

  @keyframes flyout {
    0% {
      opacity: 0%;
      transform: translateX(400px);
    }

    100% {
      opacity: 100%;
      transform: translate(0);
    }
  }
`;

const CartItemsWrapper = styled.div`
  height: 560px;
  display: grid;
  grid-gap: 20px;
  overflow-y: scroll;
`;

const TotalPrice = styled.span`
  align-self: end;
  font-size: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px;
`;

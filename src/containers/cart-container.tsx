import { useCallback, useMemo } from "react";
import styled from "styled-components";

import { CartItem, FlyoutHeader } from "../components";
import { itemRemovedFromCart, itemUpdatedInCart } from "../features/customer";
import {
  productStockRestored,
  productStockUpdated,
} from "../features/products";
import { useAppDispatch, useAppSelector } from "../redux";

export const Cart = () => {
  const dispatch = useAppDispatch();

  const {
    customer: { customerList, selectedCustomer },
  } = useAppSelector((state) => state);

  const { cart } = customerList[selectedCustomer];

  const totalPrice = useMemo(
    () =>
      customerList[selectedCustomer].cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
    [customerList, selectedCustomer]
  );

  const quantityIncreased = useCallback(
    (productID: string) => {
      dispatch(itemUpdatedInCart({ productID, event: true, selectedCustomer }));
      dispatch(productStockUpdated({ productID, event: false }));
    },
    [dispatch, selectedCustomer]
  );

  const quantityDecreased = useCallback(
    (productID: string) => {
      dispatch(
        itemUpdatedInCart({ productID, event: false, selectedCustomer })
      );
      dispatch(productStockUpdated({ productID, event: true }));
      cart.some((item) => item.quantity === 1) &&
        dispatch(itemRemovedFromCart({ productID, selectedCustomer }));
    },
    [cart, dispatch, selectedCustomer]
  );

  const removeItem = useCallback(
    (productID: string, quantity: number) => {
      dispatch(itemRemovedFromCart({ productID, selectedCustomer }));
      dispatch(productStockRestored({ productID, quantity }));
    },
    [dispatch, selectedCustomer]
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
      {totalPrice ? (
        <TotalPrice>
          Total Price: <strong>Rs.{totalPrice}</strong>
        </TotalPrice>
      ) : null}
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
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TotalPrice = styled.span`
  align-self: end;
  font-size: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 30px 10px;
`;

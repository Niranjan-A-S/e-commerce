import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { FlyoutItem } from "../components";
import { FlyoutFooter } from "../components/flyout-footer";
import {
  itemQuantityDecreased,
  itemQuantityIncreased,
  itemRemovedFromCart,
} from "../redux/features/customer";
import {
  productStockDecreased,
  productStockIncreased,
  productStockUpdated,
} from "../redux/features/product";
import { customUseSelector, StoreDispatch } from "../redux/store";

export const Cart = () => {
  const dispatch = useDispatch<StoreDispatch>();

  const { cart } = customUseSelector((state) => state.customer);

  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  const numOfItems = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((acc, item) => item.price * item.quantity + acc, 0),
    [cart]
  );

  const increaseQuantity = useCallback(
    (id: number, stock: number, quantity: number, stockLeft: number) => {
      quantity < stock &&
        dispatch(productStockDecreased(id)) &&
        dispatch(itemQuantityIncreased(id));
    },
    [dispatch]
  );

  const decreaseQuantity = useCallback(
    (id: number, stock: number, quantity: number, stockLeft: number) =>
      quantity > 0 &&
      dispatch(productStockIncreased(id)) &&
      dispatch(itemQuantityDecreased(id)),
    [dispatch]
  );

  const deleteItem = useCallback(
    (id: number) => {
      dispatch(itemRemovedFromCart(id)) && dispatch(productStockUpdated(id));
    },
    [dispatch]
  );

  return (
    <CartWrapper>
      <Title>Cart</Title>
      <CartItemsWrapper>
        {cart.map((item) => (
          <FlyoutItem
            key={item.id}
            item={item}
            incrementCount={increaseQuantity}
            decrementCount={decreaseQuantity}
            deleteItem={deleteItem}
          />
        ))}
      </CartItemsWrapper>
      <Checkout>
        Total Price : <strong>Rs {totalPrice}</strong>
        Number of items : <strong>{numOfItems}</strong>
      </Checkout>
      <FlyoutFooter navigateBack={navigateBack} />
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
  overflow-y: scroll;
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

const Title = styled.span`
  font-size: 50px;
  font-weight: 100;
  justify-self: start;
  padding: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: fit-content;
`;

const CartItemsWrapper = styled.div`
  height: fit-content;
  display: grid;
  grid-gap: 20px;
`;

const Checkout = styled.span`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  align-self: end;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
`;

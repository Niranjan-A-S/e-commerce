import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { CartItem } from "../components";
import { FlyoutFooter } from "../components/flyout-footer";
import { cartItemUpdated } from "../redux/features/customer";
import { customUseSelector, StoreDispatch } from "../redux/store";

export const Cart = () => {
  const dispatch = useDispatch<StoreDispatch>();

  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  const { cart } = customUseSelector((state) => state.customer);

  const incrementQuantity = useCallback(
    (id: number, event: boolean) => {
      dispatch(cartItemUpdated({ id, event }));
    },
    [dispatch]
  );

  const decrementQuantity = useCallback(
    (id: number, event: boolean) => {
      dispatch(cartItemUpdated({ id, event }));
    },
    [dispatch]
  );

  return (
    <CartWrapper>
      <Title>Cart</Title>
      <CartItemsWrapper>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        ))}
      </CartItemsWrapper>
      <Checkout>
        Total Price : <strong>Rs totalPrice</strong>
        Number of items : <strong>numOfItems</strong>
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

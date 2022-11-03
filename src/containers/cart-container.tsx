import styled from "styled-components";
import { CartItem } from "../components";
import { FlyoutHeader } from "../components/flyout-header";
import { customUseSelector } from "../redux/store";

export const Cart = () => {
  const { cart } = customUseSelector((state) => state.customer);

  return (
    <CartWrapper>
      <FlyoutHeader flyoutName={"Cart"} />
      <CartItemsWrapper>
        {cart.map((cartItem) => (
          <CartItem cartItem={cartItem} />
        ))}
      </CartItemsWrapper>
      <h2>Total Price: Rs.totalPrice</h2>
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

const CartItemsWrapper = styled.div`
  height: fit-content;
  display: grid;
  grid-gap: 20px;
`;

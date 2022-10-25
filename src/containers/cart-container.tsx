import { useNavigate } from "react-router";
import styled from "styled-components";
import { FlyoutItem } from "../components";
import { FlyoutFooter } from "../components/flyout-footer";
import { customUseSelector } from "../redux/store";

export const Cart = () => {
  const { cart } = customUseSelector((state) => state.customer);

  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  return (
    <CartWrapper>
      <Title>Cart</Title>
      <CartItemsWrapper>
        {cart.map((item) => (
          <FlyoutItem item={item} />
        ))}
      </CartItemsWrapper>
      <TotalPrice>
        Total Price : <strong>Rs 1000000</strong>
      </TotalPrice>
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
  width: 400px;
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

const TotalPrice = styled.span`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  align-self: end;
  margin-bottom: 10px;
`;

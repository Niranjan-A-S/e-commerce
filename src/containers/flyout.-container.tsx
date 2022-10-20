import styled from "styled-components";
import { FlyoutItem } from "../components/flyout-item";

interface IFlyout {
  name: string;
}

export const Flyout = (props: IFlyout) => {
  const { name } = props;

  return (
    <FlyoutWrapper>
      <FlyoutName>{name}</FlyoutName>
      <FlyOutItemsWrapper>
        <FlyoutItem />
        <FlyoutItem />
        <FlyoutItem />
        <FlyoutItem />
      </FlyOutItemsWrapper>
      {/* <CartFooter>
        <span>
          Number of Products: <strong>4</strong>
        </span>
        <span>
          Total Cost : {""} Rs.<strong>150000</strong>
        </span>
      </CartFooter> */}
    </FlyoutWrapper>
  );
};

const FlyoutWrapper = styled.div`
  margin-top: 10px;
  padding: 30px;
  display: grid;
  grid-gap: 40px;
  width: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const FlyoutName = styled.span`
  font-size: 50px;
  font-weight: 100;
  justify-self: start;
  padding: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const FlyOutItemsWrapper = styled.div`
  height: fit-content;
  display: grid;
  grid-gap: 20px;
`;

// const CartFooter = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 10px;
// `;

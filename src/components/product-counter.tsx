import { memo, MouseEventHandler } from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux";

interface IProductCounter {
  count: number;
  productID: string;
  incrementCount: MouseEventHandler;
  decrementCount: MouseEventHandler;
}

export const ProductCounter = memo((props: IProductCounter) => {
  const { products } = useAppSelector((state) => state);

  const { count, incrementCount, decrementCount, productID } = props;

  return (
    <ProductCounterWrapper>
      <CounterButton onClick={decrementCount}>-</CounterButton>
      <ProductsCount>{count}</ProductsCount>
      <CounterButton
        onClick={incrementCount}
        disabled={!products[productID].stockLeft}
      >
        +
      </CounterButton>
    </ProductCounterWrapper>
  );
});

const ProductCounterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: fit-content;
  grid-gap: 5px;
`;

const CounterButton = styled.button`
  background-color: inherit;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0 5px;
  font-size: 20px;
`;

const ProductsCount = styled.span`
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  padding: 5px 10px;
`;

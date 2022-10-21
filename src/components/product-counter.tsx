import { memo, MouseEventHandler } from "react";
import styled from "styled-components";

interface IProductCounter {
  count: number;
  incrementCount: MouseEventHandler;
  decrementCount: MouseEventHandler;
}

export const ProductCounter = memo((props: IProductCounter) => {
  const { count, incrementCount, decrementCount } = props;

  return (
    <ProductCounterWrapper>
      <CounterButton onClick={incrementCount}>+</CounterButton>
      <ProductsCount>{count}</ProductsCount>
      <CounterButton onClick={decrementCount}>-</CounterButton>
    </ProductCounterWrapper>
  );
});

const ProductCounterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: fit-content;
  grid-gap: 2px;
`;

const CounterButton = styled.button`
  width: fit-content;
  background-color: inherit;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 5px;
`;

const ProductsCount = styled.span`
  font-size: large;
  font-weight: 600;
  justify-self: center;
`;

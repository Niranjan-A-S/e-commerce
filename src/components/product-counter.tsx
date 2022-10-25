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
      <ProductsCount>
        Quantity :<strong>{count}</strong>
      </ProductsCount>
      <CounterButton onClick={decrementCount}>-</CounterButton>
    </ProductCounterWrapper>
  );
});

const ProductCounterWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 0.7fr 0.1fr;
  grid-gap: 2px;
  height: fit-content;
`;

const CounterButton = styled.button`
  width: fit-content;
  background-color: inherit;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 5px;
  font-size: 20px;
`;

const ProductsCount = styled.span`
  font-size: 20px;
  padding: 0 5px;
`;

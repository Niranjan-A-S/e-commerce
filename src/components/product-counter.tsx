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
      <CounterButton
        disabled={count <= 0 ? true : false}
        onClick={decrementCount}
      >
        -
      </CounterButton>
      <ProductsCount>{count}</ProductsCount>
      <CounterButton onClick={incrementCount}>+</CounterButton>
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

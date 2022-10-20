import styled from "styled-components";

export const ProductCounter = () => {
  return (
    <ProductCounterWrapper>
      <CounterButton>+</CounterButton>
      <ProductsCount>0</ProductsCount>
      <CounterButton>-</CounterButton>
    </ProductCounterWrapper>
  );
};

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

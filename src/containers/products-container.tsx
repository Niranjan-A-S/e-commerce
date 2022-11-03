import styled from "styled-components";
import { ProductItem } from "../components";
import { customUseSelector } from "../redux/store";

export const ProductsList = () => {
  const { products } = customUseSelector((state) => state.product);

  return (
    <ProductsListWrapper>
      {Object.entries(products).map((productItem) => (
        <ProductItem key={productItem[0]} productItem={productItem[1]} />
      ))}
    </ProductsListWrapper>
  );
};

const ProductsListWrapper = styled.div`
  padding: 50px 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

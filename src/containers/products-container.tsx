import styled from "styled-components";
import { Product } from "../components";
import { data } from "../data";

export const ProductsList = () => {
  return (
    <ProductsListWrapper>
      {data.map((product) => (
        <Product key={product.id} product={product} />
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

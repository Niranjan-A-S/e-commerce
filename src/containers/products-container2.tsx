import styled from "styled-components";
import { ProductItem2 } from "../components";
import { customUseSelector } from "../redux/store";

export const ProductsList2 = () => {
  const { products } = customUseSelector((state) => state.productStore);

  const productItems = Object.entries(products);

  console.log(productItems);

  return (
    <ProductsListWrapper>
      {productItems.map((product) => (
        <ProductItem2 key={product[0]} productItem={product[1]} />
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

import { useParams } from "react-router";
import styled from "styled-components";
import { useAppSelector } from "../app";

export const ProductDetails = () => {
  const { productID } = useParams();
  const { products } = useAppSelector((state) => state);

  return (
    <ProductDetailsWrapper>
      {Object.entries(products).map(
        ([ID, product]) =>
          ID === productID && (
            <>
              <ProductImage src={product.image} />
              <ProductText children={product.name} />
              <ProductText children={`Rs.${product.price}`} />
              <ProductText children={product.description} />
              <ProductText children={`${product.stockLeft} left`} />
            </>
          )
      )}
    </ProductDetailsWrapper>
  );
};

const ProductDetailsWrapper = styled.div`
  width: 600px;
  height: fit-content;
  margin: 0 auto;
  border: 0.2px solid #000;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const ProductImage = styled.img`
  width: 100%;
  justify-self: center;
`;

const ProductText = styled.span`
  font-size: 20px;
  font-weight: bolder;
`;

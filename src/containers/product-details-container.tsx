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
              <ProductName children={product.name} />
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>
                Rs. <strong>{product.price}</strong>
              </ProductPrice>
              <ProductStock>
                <strong>{product.stockLeft}</strong> left
              </ProductStock>
            </>
          )
      )}
    </ProductDetailsWrapper>
  );
};

const ProductDetailsWrapper = styled.div`
  margin: 150px auto;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 50px;
  width: 500px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: grid;
  grid-row-gap: 10px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  grid-row: span 4;
`;

const ProductName = styled.span`
  font-size: 30px;
  max-height: 90px;
  font-weight: bold;
`;
const ProductDescription = styled.span`
  font-size: 20px;
`;
const ProductPrice = styled.span`
  font-size: 20px;
`;
const ProductStock = styled.span`
  font-size: 20px;
  color: red;
`;

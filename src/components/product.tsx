import styled from "styled-components";
import { IProduct } from "../types";
import { ProductCounter } from ".";
import { useState } from "react";

interface IProductProps {
  product: IProduct;
}

export const Product = (props: IProductProps) => {
  const { product } = props;

  const [checked, setChecked] = useState<boolean>(false);

  return (
    <ProductsWrapper>
      <ProductInfo>
        <ProductImage src={product.image} alt={"product-image"} />
        <ProductName children={product.name} />
        <ProductDescription children={product.description} />
        <ProductPrice>Rs.{product.price}</ProductPrice>
      </ProductInfo>
      <ProductTools>
        <ProductCounter />
        <ProductRemaining>
          <strong>{product.count}</strong> left
        </ProductRemaining>
        <ProductButton>Add to Cart</ProductButton>
        <ProductButton onClick={() => setChecked(!checked)}>
          <AddToWishList
            src={
              checked
                ? "https://cdn-icons-png.flaticon.com/512/1216/1216649.png"
                : "https://cdn-icons-png.flaticon.com/512/1216/1216575.png"
            }
            alt="heart-logo"
          />
        </ProductButton>
      </ProductTools>
    </ProductsWrapper>
  );
};

const ProductsWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px;
  display: grid;
  grid-row-gap: 20px;
`;

const ProductInfo = styled.div`
  display: grid;
  grid-row-gap: 5px;
`;
const ProductTools = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  grid-gap: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 270px;
  justify-self: center;
  border: none;
`;

const ProductName = styled.span`
  justify-self: center;
  font-weight: bolder;
`;

const ProductDescription = styled.span`
  height: 45px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  align-self: center;
`;

const ProductPrice = styled.span`
  font-weight: bold;
`;

const ProductRemaining = styled.span`
  justify-self: end;
`;

const ProductButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 5px 0;
`;

const AddToWishList = styled.img`
  height: 20px;
  width: 20px;
`;

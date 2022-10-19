import styled from "styled-components";
import { IProduct } from "../types";

interface IProductProps {
  product: IProduct;
}

export const Product = (props: IProductProps) => {
  const { product } = props;

  return (
    <ProductsWrapper>
      <ProductImage src={product.image} alt={"product-image"} />
      <ProductName children={product.name} />
      <ProductDescription children={product.description} />
      <ProductCount>
        <strong>{product.count}</strong> left
      </ProductCount>
      <ProductButton>Add to Wishlist</ProductButton>
      <ProductButton>Add to Cart</ProductButton>
    </ProductsWrapper>
  );
};

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  justify-self: center;
`;

const ProductName = styled.span`
  justify-self: center;
  font-weight: bolder;
`;

const ProductDescription = styled.span`
  height: 65px;
  display: inline-block;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
  word-wrap: break-word;
  align-self: center;
`;

const ProductCount = styled.span`
  justify-self: end;
`;

const ProductButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 5px 0;
`;

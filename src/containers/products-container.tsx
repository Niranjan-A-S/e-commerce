import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ProductItem } from "../components";
import { itemToggledToWishList } from "../redux/features/customer";
import { customUseSelector, StoreDispatch } from "../redux/store";

export const ProductsList = () => {
  const dispatch = useDispatch<StoreDispatch>();

  const { products } = customUseSelector((state) => state.product);

  const toggleItemToWishList = (productID: string) => {
    dispatch(itemToggledToWishList(productID));
  };

  return (
    <ProductsListWrapper>
      {Object.entries(products).map((productItem) => (
        <ProductItem
          key={productItem[0]}
          productID={productItem[0]}
          productItem={productItem[1]}
          toggleItemToWishList={toggleItemToWishList}
        />
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

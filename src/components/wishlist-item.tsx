import { memo } from "react";
import styled from "styled-components";
import { ImageSources } from "../enums";
import { IWishListItem } from "../types";

interface IWishListItemProps {
  wishListItem: IWishListItem;
  removeItem(productID: string): void;
}

export const WishListItem = memo((props: IWishListItemProps) => {
  const {
    wishListItem: { name, image, stockLeft, productID },
    removeItem,
  } = props;
  return (
    <WishListItemWrapper>
      <ItemImage src={image} />
      <ItemName>{name}</ItemName>
      {!stockLeft && <ItemStatus>Currently Unavailable</ItemStatus>}
      <DeleteButton onClick={() => removeItem(productID)}>
        <TrashImage src={ImageSources.DELETE_BUTTON} />
      </DeleteButton>
    </WishListItemWrapper>
  );
});

const WishListItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 0fr 2fr 1fr 0fr;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 10px;
`;

const ItemImage = styled.img`
  width: 70px;
  height: 70px;
`;

const ItemName = styled.span`
  padding: 5px;
  align-self: center;
  font-weight: bold;
  font-size: 18px;
`;

const ItemStatus = styled.span`
  align-self: center;
  opacity: 0.6;
`;

const DeleteButton = styled.button`
  background: #fff;
  border: none;
  justify-self: end;
`;

const TrashImage = styled.img`
  width: 40px;
  height: 40px;
`;

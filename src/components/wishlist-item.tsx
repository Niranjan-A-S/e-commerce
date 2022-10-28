import { memo } from "react";
import styled from "styled-components";
import { IWishListItem } from "../types";

interface IWishListItemProps {
  item: IWishListItem;
}

export const WishListItem = memo((props: IWishListItemProps) => {
  const {
    item: { name, image, stockLeft },
  } = props;
  return (
    <WishListItemWrapper>
      <ItemImage src={image} />
      <ItemName>{name}</ItemName>
      {!stockLeft && <ItemStatus>Currently Unavailable</ItemStatus>}
    </WishListItemWrapper>
  );
});

const WishListItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.8fr;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
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

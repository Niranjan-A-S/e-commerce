import styled from "styled-components";
import { IWishListItem } from "../types";

interface IFlyoutItemProps {
  item: IWishListItem;
}

export const FlyoutItem = (props: IFlyoutItemProps) => {
  const { item } = props;
  return (
    <FlyoutItemWrapper>
      <ItemInfo>
        <ItemImage src={item.image} />
        <ItemName>{item.name}</ItemName>
        {item.stock === 0 && <ItemStatus>currently unavailable</ItemStatus>}
      </ItemInfo>
    </FlyoutItemWrapper>
  );
};

const FlyoutItemWrapper = styled.div`
  display: grid;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

const ItemInfo = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr 1fr;
  grid-gap: 10px;
`;

const ItemImage = styled.img`
  width: 70px;
  height: 70px;
`;

const ItemName = styled.span`
  justify-self: start;
  padding: 5px;
  align-self: center;
  width: fit-content;
  font-weight: bold;
  font-size: 18px;
`;

const ItemStatus = styled.span`
  justify-self: start;
  align-self: center;
  width: fit-content;
  opacity: 0.6;
`;

// const ItemDataWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   width: fit-content;
// `;

// const ItemCount = styled.span`
//   justify-self: start;
//   width: 1005;
// `;

// const ItemPrice = styled.span`
//   justify-self: end;
//   width: 1005;
// `;

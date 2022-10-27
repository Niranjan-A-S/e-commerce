import { memo } from "react";
import styled from "styled-components";
import { ProductCounter } from ".";

interface IFlyoutItem {
  item: any; //bug
  incrementCount: (
    id: number,
    stock: number,
    quantity: number,
    stockLeft: number
  ) => void;
  decrementCount: (
    id: number,
    stock: number,
    quantity: number,
    stockLeft: number
  ) => void;
  deleteItem: (id: number) => void;
}

export const FlyoutItem = memo((props: IFlyoutItem) => {
  const {
    item: { image, name, stock, price, quantity, id, stockLeft },
    incrementCount,
    decrementCount,
    deleteItem,
  } = props;

  return (
    <FlyoutItemWrapper>
      <ItemInfo>
        <ItemImage src={image} />
        <ItemName>{name}</ItemName>
      </ItemInfo>
      <ItemDetails>
        <ProductCounter
          count={quantity}
          incrementCount={() => incrementCount(id, stock, quantity, stockLeft)}
          decrementCount={() => decrementCount(id, stock, quantity, stockLeft)}
        />
        <DeleteButton onClick={() => deleteItem(id)}>
          Remove from Cart
        </DeleteButton>
        <ItemPrice>
          Price : Rs. <strong>{price * quantity}</strong>
        </ItemPrice>
      </ItemDetails>
    </FlyoutItemWrapper>
  );
});

const FlyoutItemWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

const ItemInfo = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.8fr;
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

// const ItemStatus = styled.span`
//   justify-self: start;
//   align-self: center;
//   width: fit-content;
//   opacity: 0.6;
// `;

const ItemDetails = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 18px;
`;

const ItemPrice = styled.span`
  justify-self: start;
`;

const DeleteButton = styled.button`
  border: 1px solid red;
  background-color: #fff;
  padding: 5px 10px;
  height: fit-content;
  justify-self: end;
`;
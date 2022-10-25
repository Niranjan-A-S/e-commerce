import styled from "styled-components";

interface IFlyoutItem {
  item: any;
}

export const FlyoutItem = (props: IFlyoutItem) => {
  const {
    item: { image, name, stock, quantity, price },
  } = props;

  return (
    <FlyoutItemWrapper>
      <ItemInfo>
        <ItemImage src={image} />
        <ItemName>{name}</ItemName>
        {stock === 0 && <ItemStatus>currently unavailable</ItemStatus>}
      </ItemInfo>
      <div>
        Price:<strong>{price}</strong>
        quantity:<strong>{quantity}</strong>
      </div>
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

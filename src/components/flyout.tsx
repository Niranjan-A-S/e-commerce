import { useNavigate } from "react-router";
import styled from "styled-components";
import { ImageSources } from "../enums";
import { IFlyoutItem } from "../types";
import { FlyoutItem } from "./flyout-item";

interface IFlyout {
  name: string;
  itemsArray: Array<IFlyoutItem>;
}

export const Flyout = (props: IFlyout) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const { name, itemsArray } = props;

  return (
    <Overlay>
      <FlyoutWrapper>
        <FlyoutName>{name}</FlyoutName>
        <FlyoutItemsWrapper>
          {itemsArray.map((item) => (
            <FlyoutItem item={item} />
          ))}
        </FlyoutItemsWrapper>
        <ExitButton onClick={goBack}>
          <ButtonImage src={ImageSources.BACK_BUTTON_LOGO} alt={"arrow-left"} />
        </ExitButton>
      </FlyoutWrapper>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;

const FlyoutWrapper = styled.div`
  position: fixed;
  right: 0px;
  top: 60px;
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 0.2fr 0.8fr 1fr;
  border: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 2;
  background-color: #fff;
  width: 400px;
  height: 600px;
  overflow-y: scroll;
  animation: flyout 1s;

  @keyframes flyout {
    0% {
      opacity: 0%;
      transform: translateX(400px);
    }

    100% {
      opacity: 100%;
      transform: translate(0);
    }
  }
`;

const FlyoutName = styled.span`
  font-size: 50px;
  font-weight: 100;
  justify-self: start;
  padding: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: fit-content;
`;

const FlyoutItemsWrapper = styled.div`
  height: fit-content;
  display: grid;
  grid-gap: 20px;
`;

const ExitButton = styled.button`
  background-color: #fff;
  height: fit-content;
  align-self: end;
  border: none;
`;

const ButtonImage = styled.img`
  width: 50px;
  height: 50px;
  opacity: 0.5;
`;

// const CartFooter = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 10px;
// `;

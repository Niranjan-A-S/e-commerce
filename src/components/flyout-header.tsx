import { useNavigate } from "react-router";
import styled from "styled-components";
import { ImageSources } from "../enums";

interface IFlyoutHeader {
  flyoutName: string;
}

export const FlyoutHeader = (props: IFlyoutHeader) => {
  const { flyoutName } = props;

  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <ExitButton onClick={() => navigate(-1)}>
        <ButtonImage src={ImageSources.BACK_BUTTON} />
      </ExitButton>
      <Title>{flyoutName}</Title>
    </HeaderWrapper>
  );
};

const ExitButton = styled.button`
  background-color: #fff;
  border: none;
`;

const ButtonImage = styled.img`
  width: 50px;
  height: 50px;
  opacity: 0.5;
`;

const Title = styled.span`
  font-size: 50px;
  font-weight: 100;
  justify-self: start;
  align-self: center;
  padding: 0 20px;
  height: fit-content;
`;

const HeaderWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  margin-bottom: 10px;
`;

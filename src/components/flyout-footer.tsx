import { memo } from "react";
import styled from "styled-components";
import { ImageSources } from "../enums";

interface IFlyoutFooter {
  navigateBack(): void;
}

export const FlyoutFooter = memo((props: IFlyoutFooter) => {
  const { navigateBack } = props;

  return (
    <ExitButton onClick={navigateBack}>
      <ButtonImage src={ImageSources.BACK_BUTTON} />
    </ExitButton>
  );
});

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

import { ReactElement } from "react";
import styled from "styled-components";

interface IFlyoutTrial {
  children: ReactElement<HTMLDivElement>;
}

export const Flyout = (props: IFlyoutTrial) => {
  const { children } = props;

  return <Overlay>{children}</Overlay>;
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

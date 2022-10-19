import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 }

 body {
    font-family: Whitney, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;;
 }

 button {
    cursor: pointer;
    }

   .rotate{ animation: rotation 2s infinite linear};
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

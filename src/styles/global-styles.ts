import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 }

 body {
    font-family: Whitney, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
   }

 button {
    cursor: pointer;
    :disabled{
    cursor: not-allowed;
    pointer-events: all !important;  
   }
 }
`;

export const productItem = {
  width: "100%",
  gridTemplateColumns: ".5fr 4fr 1fr 3fr  2.5fr .5fr",
  alignItems: "center",
  fontSize: "18px",
};

export const productList = {
  gridTemplateColumns: "1fr",
};

export const productImage = {
  width: "70px",
  justifySelf: "auto",
  aspectRatio: "1/1",
  gridColumn: "auto",
};

export const productName = {
  gridColumn: "auto",
};

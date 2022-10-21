import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 }

 body {
    font-family: Whitney, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    position: relative;
 }

 button {
    cursor: pointer;
 }
`;

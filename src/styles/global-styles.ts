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

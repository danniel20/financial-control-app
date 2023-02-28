import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
      font-size: 62.5%;
      /* 1rem = 10px */

  body {
    height: 100vh;
    background: #dedddd;
    background: linear-gradient(180deg, #2c6058 0%, #dedddd 0%, #f2f2f2 95%);
    font-family: Poppins, sans-serif;
    font-size: 1.6rem;
  }
}
`;

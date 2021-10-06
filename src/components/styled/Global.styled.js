import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  body {
    padding: 0;
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

`;

export default GlobalStyles;

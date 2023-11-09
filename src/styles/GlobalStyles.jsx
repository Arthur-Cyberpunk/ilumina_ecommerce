import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Blinker:wght@200;400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'Blinker', sans-serif;
  position: relative;
}

html {
  font-size: 62.5%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 19px;
}
`;

export default GlobalStyles;

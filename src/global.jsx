import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --orange: #f6830f;
  --green: #206a5d;
  --gray: #f0f0f0;
}


`;

export default GlobalStyle;

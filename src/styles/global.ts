import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding:0 ;
    box-sizing:border-box ;
  }

  :root{}

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body,
  input,
  button {
    font: 400 1rem "Roboto", sans-serif;
  }

  body {
    background: #1e1e1e;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  button,
  svg,
  li,
  a {
    cursor: pointer;
  }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'Material Symbols Rounded';
    src: url('/fonts/material-symbols-rounded.woff2') format('woff2');
    font-weight: 100 700;
    font-style: normal;
    font-display: swap;
  }

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.background.default};
    color: ${({ theme }) => theme.colors.text.body};
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
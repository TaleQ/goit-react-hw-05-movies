import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
}
  body {
    margin: 0;
    font-family: 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #212121;
    background-color: #fff;
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
  button {
    display: inline-block;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
  }
  a {
    color:inherit;
    text-decoration: none;
    cursor: pointer;
  }
  h1 {
    text-align: center;
  }
`;

export default GlobalStyle;

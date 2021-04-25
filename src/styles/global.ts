import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: #FCFCFC;
    color: #171717;
    height: 100%;
  }

  body, button {
    font: 400 1rem Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px;
  }

`;

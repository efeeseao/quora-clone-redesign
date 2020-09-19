import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    background: var(--color-background);
  }
  *, button, input {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
  }
  :root {
    --color-header: #283e4a;
    --color-quora: #b92b27;
    --color-input: #e1e9ee;
    --color-background: #fff;
    --color-ad-text: #434649;
    --color-panel: #fff;
    --color-link: rgb(46,105,255);
    --color-black: rgba(40,40,41);
    --color-border: #dee0e1;
    --color-gray: #636466;
    --color-gray-light: #939598;
    --color-separator: rgba(0,0,0,0.15);
    --color-white: #fff;
  }
`;

export const Button = styled.button``;

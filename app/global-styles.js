import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Bungee', cursive;
  }

  body.fontLoaded {
    font-family: 'Bungee', cursive;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Bungee', cursive;
    line-height: 1.5em;
  }
`;

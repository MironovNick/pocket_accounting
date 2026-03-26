import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    transition: .2s ease-in-out;
    /*background: linear-gradient(275deg,rgba(2, 0, 36, 1) 0%, rgba(18, 33, 54, 1) 35%, rgba(3, 3, 31, 1) 100%) fixed;*/
    /*background: linear-gradient(105deg, rgba(214, 91, 90) 0%, rgba(237, 149, 93) 10%, rgba(228, 221, 221) 100%) fixed;*/
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  a {
    color: white;
    text-decoration: none;
  }
`
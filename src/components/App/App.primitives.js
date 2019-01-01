import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../../config';
import 'normalize.css';
import pattern from '../../assets/leaves-pattern.png';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: url(${pattern});
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const Container = styled.main`
  box-sizing: border-box;
  padding: 10px;
  height: 100vh;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 100px;
  font-weight: bold;
  color: ${colors.gunmetal};
`;

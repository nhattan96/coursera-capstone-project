import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: smooth;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    -webkit-font-smoothing: antialiased;
  };

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.small};
    outline: none;
  };

  h1, h2, .card-title {
    font-family: ${({ theme }) => theme.font.family.primary};
  };

  h1 {
    font-size: ${({ theme }) => theme.font.size.huge};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin: 20px 0;
  };

  h2 {
    font-size: ${({ theme }) => theme.font.size.xlarge};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin: 20px 0;
  };

  h3 {
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
    text-transform: uppercase;
    margin: 20px 0;
  };

  h4 {
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
    margin: 20px 0;
  };

  .highlight {
    font-weight: ${({ theme }) => theme.font.weight.medium};
  };

  .card-title {
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  };

  a {
    text-decoration: none;
    color: inherit;
  };

  button, a, input[type="submit"] {
    cursor: pointer;
    transition: filter 0.2s;
  };

  button:hover, a:hover, input[type="submit"]:hover {
    filter: brightness(.9);
  };
`;

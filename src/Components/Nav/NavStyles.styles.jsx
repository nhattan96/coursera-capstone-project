import styled from "styled-components";
import theme from "../../styles/theme";

export const NavStyles = styled.nav`
  width: 100%;
  height: 100%;
  margin: 20px 0;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    font-weight: ${theme.font.weight.bold};
  }

  ul.mobile {
    display: none;
  }

  li img {
    cursor: pointer;
    transition: filter 0.2s;
  }

  li:hover a {
    font-size: ${theme.font.size.xxlarge};
    color: ${theme.colors.secondary};
    transition: linear 0.25s;
  }

  a {
    font-size: ${theme.font.size.large};
  }

  .active {
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.weight.bold};
  }

  .basketIcon {
    max-width: 3.5rem;
  }

  .img-close {
    display: none;
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
    }

    ul.desktop {
      position: fixed;
      background: ${theme.colors.white};
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 1;
      transform: translateY(-100vh);
      transition: linear 0.25s;
    }

    .desktop.menu-active {
      transform: translateY(0);
      transition: linear 0.25s;
    }

    ul.mobile {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .img-close {
      display: block;
      position: fixed;
      right: 0;
      top: 0;
    }
  }
`;

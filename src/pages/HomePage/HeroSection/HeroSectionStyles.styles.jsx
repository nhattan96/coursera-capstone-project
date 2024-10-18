import styled from "styled-components";
import theme from "../../../styles/theme";

export const HeroSectionStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  min-height: 50vh;

  &:before {
    content: "";
    width: 100%;
    height: 38vh;
    background-color: ${theme.colors.primary};
    position: absolute;
    z-index: -1;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  h1 {
    color: ${theme.colors.secondary};
  }

  h2 {
    color: ${theme.colors.white};
  }

  p {
    color: ${theme.colors.white};
    font-size: ${theme.font.size.medium};
  }

  .flex-item {
    flex: 1 1 48%;
    margin-top: 20px;
  }

  .hero-img {
    text-align: right;
  }

  .hero-img img {
    object-fit: cover;
    width: 300px;
    height: 400px;
    border-radius: ${theme.border.radius};
  }

  @media (max-width: 768px) {
  &:before {
    height: 50vh;
  }

    .flex-item {
      flex: 1 1 100%;
    }

    .hero-img {
      text-align: center;
    }
  }
`;

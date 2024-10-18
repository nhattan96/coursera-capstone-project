import styled from "styled-components";
import theme from "../../styles/theme";

export const CardStyles = styled.article`
  display: flex;
  flex-direction: column;
  width: 33%;
  gap: 25px;
  background: #edefee;
  border-top-left-radius: ${theme.border.radius};
  border-top-right-radius: ${theme.border.radius};
  margin-bottom: 50px;

  img {
    width: 100%;
    object-fit: cover;
    height: 185px;
    border-top-left-radius: ${theme.border.radius};
    border-top-right-radius: ${theme.border.radius};
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-size: ${theme.font.size.large};
  }

  p {
    padding: 0 20px;
    color: ${theme.colors.primary};
  }

  .price {
    color: ${theme.colors.tertiary};
  }

  footer {
    display: flex;
    padding: 0 20px;
    margin-top: auto;
    margin-bottom: 20px;
  }

  footer img {
    object-fit: fill;
    height: 20px;
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    img {
      height: 100%;
    }
  }
`;

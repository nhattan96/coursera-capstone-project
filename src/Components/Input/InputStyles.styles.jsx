import styled from "styled-components";
import theme from "../../styles/theme";

export const InputStyles = styled.input`
  font-size: ${theme.font.size.large};
  border: ${theme.colors.primary} solid 1px;
  color: ${theme.colors.primary};
  border-radius: ${theme.border.radius};
  padding: 10px 20px;
  width: 100%;

  &[type="submit"] {
    margin: 25px 0;
    background: ${theme.colors.secondary};
    color: ${theme.colors.black};
    font-weight: ${theme.font.weight.bold};
  }
`;

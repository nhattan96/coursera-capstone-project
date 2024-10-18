import styled from "styled-components";
import theme from "../../styles/theme";

export const SelectStyles = styled.select`
  font-size: ${theme.font.size.small};
  color: ${theme.colors.primary};
  border-radius: ${theme.border.radius};
  padding: 10px 20px;
  width: 100%;
  display: block;
`;

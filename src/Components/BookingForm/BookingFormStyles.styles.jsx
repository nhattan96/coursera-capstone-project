import styled from "styled-components";
import theme from "../../styles/theme";

export const BookingFormStyles = styled.form`
  form {
    display: grid;
    min-width: 360px;
    gap: 10px;
  }
`;

export const ErrorInfoStyles = styled.p`
  color: ${theme.colors.red};
  font-weight: ${theme.font.weight.extrabold};
`;

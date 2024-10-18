import styled from "styled-components";
import theme from "../../styles/theme";

export const BookingPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  form {
    display: grid;
    min-width: 360px;
    gap: 10px;
  }

  h1 {
    margin-bottom: 30px;
  }
`;

export const ErrorInfoStyles = styled.p`
   color: ${theme.colors.red};
   font-weight: ${theme.font.weight.extrabold}
`;

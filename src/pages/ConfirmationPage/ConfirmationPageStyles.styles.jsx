import styled from "styled-components";
import theme from "../../styles/theme";

export const ConfirmationPageStyles = styled.div`
  text-align: center;
  margin-bottom: 50px;
  color: ${theme.colors.primary};

  table {
    margin: 20px 0;
  }

  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
`;

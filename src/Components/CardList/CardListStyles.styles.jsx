import styled from "styled-components";

export const CardListStyles = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

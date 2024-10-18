import styled from "styled-components";

export const MenuSectionStyles = styled.section`
  display: flex;
  position: relative;
  flex-wrap: wrap;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    justify-content: center;

    .header {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-item: center;
    }
  }
`;

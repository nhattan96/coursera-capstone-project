import styled from "styled-components";

export const FooterSectionStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px;
  background: #edefee;

  .footer-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-placeholder {
    width: 100px;
    height: 150px;
  }

  .footer-section {
    display: flex;
    flex-direction: column;
  }

  .footer-section h3 {
    margin-bottom: 10px;
  }

  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }

  .footer-section li {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;

    .footer-section {
      margin-bottom: 20px;
    }
  }
`;

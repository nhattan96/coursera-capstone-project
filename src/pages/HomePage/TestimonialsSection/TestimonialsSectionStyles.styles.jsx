import styled from "styled-components";

export const TestimonialsSectionStyles = styled.section`
  text-align: center;
  padding: 50px;
  background: #edefee;
  align-items: center;
  gap: 10px;

  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }

  .testimonial-card {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .testimonial-body {
    display: flex;
    align-items: center;
    margin-left: 10;
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  h3 {
    margin: 10px 0;
  }

  .rating {
    color: #ffcc00;
    font-weight: bold;
  }

  .review {
    font-style: italic;
    color: #555;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

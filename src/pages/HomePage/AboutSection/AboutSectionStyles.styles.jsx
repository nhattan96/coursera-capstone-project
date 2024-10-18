import styled from "styled-components";

export const AboutSectionStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 40px;
  margin-bottom: 80px;

  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text-section h2 {
    margin-bottom: 20px;
  }

  .text-section p {
    margin-bottom: 20px;
  }

  .image-section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  img {
    width: 270px;
    height: 370px;
    margin-bottom: 20px;
    object-fit: cover;
  }

  .image1 {
  }

  .image2 {
    position: absolute;
    left: 0;
    bottom: -100px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin-bottom: 50px;

    .image-section {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
    }

    .image2 {
      position: unset;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 50px;

    .image-section {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
    }

    .image {
      margin-bottom: 0;
    }

    .image2 {
      position: unset;
    }
  }
`;

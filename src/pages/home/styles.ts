import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  .header {
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    width: 90%;
    height: 10rem;
  }

  @media (min-width: 768px) {
    .header {
      width: 55%;
      p {
        font-size: 1.3rem;
      }
    }
    form {
      width: 50%;
    }
  }

  @media (min-width: 768px) {
    .header {
      width: 50%;
    }
  }
`;

import styled from "styled-components";

export const ResultContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  position: relative;

  h1 {
    text-align: center;
    border-bottom: 1px solid #ccc;
  }

  #home {
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: snow;

    &:hover {
      color: #ccc;
      transition: 0.8s ease;
    }
  }

  #exit {
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: snow;

    &:hover {
      color: #ccc;
      transition: 0.8s ease;
    }
  }

  .card-result {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 90%;
    height: 50vh;
    padding: 20px;

    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);

    background: snow;
    color: var(--black);
  }

  @media (min-width: 800px) {
    .card-result {
      width: 50%;

      h1 {
        width: 50%;
        margin-left: 25%;
      }
    }
  }
`;

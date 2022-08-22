import styled from "styled-components";

export const LoginContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  .login-form {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    width: 50%;
    height: 80%;
  }

  .login-image {
    display: none;
    width: 50%;
    height: 100%;

    background: snow;
    img {
      width: 90%;
      height: auto;
    }
  }

  @media (min-width: 900px) {
    justify-content: space-between;
    .login-image {
      display: inherit;
      transition: all 01s ease;
    }
  }
`;

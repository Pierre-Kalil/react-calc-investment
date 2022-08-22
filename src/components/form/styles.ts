import styled from "styled-components";

export const FormContainer = styled.form`
  width: 90%;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  @media (min-width: 767px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
`;

import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  padding: 1rem;

  border-radius: 3px;
  background-color: #ccc;

  input {
    width: 100%;
    background: transparent;
    border: none;
    align-items: center;
    color: var(--black);
  }

  input:focus {
    outline: none;
  }
`;

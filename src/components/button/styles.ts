import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 1.1rem 0rem;

  border-radius: 7px;
  border: none;

  background: rgba(255, 255, 255, 0.4);
  color: var(--black);
  text-align: center;
  font-size: 1.5rem;

  &:hover {
    background-color: snow;
    transition: all 0.3s ease-in;
  }
`;

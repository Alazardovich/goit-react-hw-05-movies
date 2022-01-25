import styled from "styled-components";
export const Button = styled.button`
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
  }
`;

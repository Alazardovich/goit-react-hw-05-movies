import styled from "styled-components";
export const Button = styled.button`
  width: 70px;
  display: flex;
  align-items: center;
  color: black;
  background-color: #f19c9c;
  margin-top: 10px;
  border-radius: 3px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
  }
`;

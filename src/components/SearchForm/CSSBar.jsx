import styled from "styled-components";
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  background-color: #f19c9c;
  border-radius: 3px;
  overflow: hidden;
`;
export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 12px;
`;
export const Button = styled.button`
  display: inline-block;
  width: 58px;
  height: 48px;
  border: 0;
  background-size: 40%;
  opacity: 0.5;
  color: #060607;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
export const Label = styled.label`
  display: inline-block;
  /* width: 100%; */
  font: inherit;
  font-size: 18px;
  font-weight: bold;
  border: none;
  outline: none;
  padding-left: 10px;
  /* padding-right: 10px; */
`;

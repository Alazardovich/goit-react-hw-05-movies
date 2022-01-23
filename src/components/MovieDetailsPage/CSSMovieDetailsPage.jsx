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
export const Container = styled.div`
  display: flex;
  /* max-width: 1170px; */
  width: 100%;
  margin: 0 15px;
`;
export const BlockImg = styled.div`
  margin: 10px 10px 10px 0;
`;
export const Genre = styled.span`
  &:not(:first-child) {
    margin-left: 5px;
  }
`;
export const ContainerNav = styled.ul`
  display: block;
  margin-left: 15px;
  padding: 0;
`;

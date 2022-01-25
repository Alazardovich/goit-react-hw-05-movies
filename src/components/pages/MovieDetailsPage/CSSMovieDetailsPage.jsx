import styled from "styled-components";
export const Container = styled.div`
  display: flex;
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

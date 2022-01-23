import styled from "styled-components";

export const ContainerLoad = styled.div`
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
`;

export const ContainerNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 20px;
  background: #adad05;
  border-radius: 5px;
  border-bottom: 2px solid black;
  && > li {
    margin-left: 10px;
    padding: 0;
  }
`;

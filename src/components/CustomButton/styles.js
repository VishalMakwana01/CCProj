import styled from "styled-components";

export const StyledCustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 20px 0 20px;
  font-size: 15px;
  background-color: ${(props) => (props.isGoogleSignIn ? "blue" : "black")};
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: ${(props) => (props.isGoogleSignIn ? "blue" : "black")};
    border: ${(props) =>
    props.isGoogleSignIn ? "1px solid blue" : "1px solid black"};
  }
`;

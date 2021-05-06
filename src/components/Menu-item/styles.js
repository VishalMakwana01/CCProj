import styled from "styled-components";

export const StyledMenuItem = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background: ${(props) => `url(${props.imageUrl})`};
  background-position: center;
  background-size: cover;
  ${(props) => props.size && `height: 380px`};

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: white;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubTitle = styled.div`
  font-weight: lighter;
  font-size: 16px;
`;

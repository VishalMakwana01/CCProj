import styled from "styled-components";

export const CollectionItemWrapper = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${(props) => `url(${props.image})`};
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.div`
  width: 10%;
`;

import React from "react";
import { useHistory, useRouteMatch, Link } from "react-router-dom";

import { StyledMenuItem, Content, Title, SubTitle } from "./styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let history = useHistory();
  let match = useRouteMatch();
  return (
    <StyledMenuItem
      imageUrl={imageUrl}
      size={size}
    ><Link to={"/shop/" + title}>
        <Content>
          <Title>{title.toUpperCase()}</Title>
          <SubTitle>Shop Now</SubTitle>
        </Content>
      </Link>
    </StyledMenuItem>

  );
};

export default MenuItem;

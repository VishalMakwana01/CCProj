import React from "react";

import { StyledCustomButton } from "./styles";

const CustomButton = ({ children, ...otherProps }) => {
  return <StyledCustomButton {...otherProps}>{children}</StyledCustomButton>;
};

export default CustomButton;

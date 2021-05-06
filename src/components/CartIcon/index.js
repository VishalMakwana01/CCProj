import React from "react";
import { connect } from "react-redux";

import { CartIconWrapper, ItemCount } from "./styles";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <CartIconWrapper onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCount>0</ItemCount>
    </CartIconWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);

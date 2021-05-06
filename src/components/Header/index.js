import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { HeaderWrapper, LogoContainer, Option, Options } from "./styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/index";
import CartDropdown from "../CartDropdown/index";
import { useHistory } from "react-router";

const Header = ({ currentUser, hidden }) => {
  const history = useHistory();
  return (
    <HeaderWrapper>
      <LogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
      <Options>
        <Option to="/shop">Shop</Option>
        <Option to="/contact">Contact</Option>
        {console.log("current:", currentUser)}
        {currentUser ? (
          <Option onClick={() => auth.signOut()}>Sign out</Option>
        ) : (
          <Option to="/signin">Sign in</Option>
        )}
        {currentUser && <CartIcon />}
      </Options>
      {currentUser && hidden && <CartDropdown />}
    </HeaderWrapper>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);

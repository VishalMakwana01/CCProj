import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SignInAndSignUpPage from "./pages/SignInAndSignUp/index";
import Header from "./components/Header/index";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userAction";
import Contact from "./pages/Contact";
import Hats from "./pages/Shop/Hats"
import Sneakers from "./pages/Shop/Sneakers"
import Jackets from "./pages/Shop/Jackets";
import Men from "./pages/Shop/Men";
import Women from "./pages/Shop/Women";
import Checkout from "./components/Checkout";
import OrderPlaced from "./pages/OrderPlaced";

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }

      return () => unsubscribeFromAuth();
    });
  }, [setCurrentUser]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route path="/contact" component={Contact} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/shop/hats" component={Hats} />
        <Route path="/shop/sneakers" component={Sneakers} />
        <Route path="/shop/men" component={Men} />
        <Route path="/shop/jackets" component={Jackets} />
        <Route path="/shop/women" component={Women} />
        <Route path="/orderplaced" component={OrderPlaced} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

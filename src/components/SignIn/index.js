import React, { useState, Component } from "react";

import { SignInWrapper, Buttons } from "./styles";
import FormInput from "../FormInput/index";
import CustomButton from "../CustomButton";
import { connect } from "react-redux";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/userAction";
class SignIn extends Component {
  state = { email: "", password: "" }
  render() {


    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const { user } = await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
        this.setState({ email: "", password: "" });

      } catch (error) {
        console.log(error);
      }
    };

    const handleChange = (event) => {
      const { value, name } = event.target;
      this.setState({ [name]: value })
    };
    return (
      <SignInWrapper>
        <h2>I already have a account</h2>
        <span>Sign in with your email and passowrd</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            label="Email"
            handleChange={handleChange}
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            label="Password"
            handleChange={handleChange}
          />
          <Buttons>
            <CustomButton type="submit">Sign</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
          </CustomButton>
          </Buttons>
        </form>
      </SignInWrapper>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
/*const SignIn = (props) => {
  const [credential, setCredential] = useState({ email: "", password: "" });

  const { email, password } = credential;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      console.log(user)
      setCredential({ email: "", password: "" });


    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredential({ ...credential, [name]: value });
  };

  return (

    <SignInWrapper>
      <h2>I already have a account</h2>
      <span>Sign in with your email and passowrd</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={credential.email}
          required
          label="Email"
          handleChange={handleChange}
        />

        <FormInput
          name="password"
          type="password"
          value={credential.password}
          required
          label="Password"
          handleChange={handleChange}
        />
        <Buttons>
          <CustomButton type="submit">Sign</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </Buttons>
      </form>
    </SignInWrapper>
  );
};

export default SignIn;*/

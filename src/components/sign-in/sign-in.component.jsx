import React from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, SignInTitleContainer, SignInButtonsContainer} from './sign-in.styles';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  };

  handleOnChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
    
  };

  render() {
    return(
      <SignInContainer>
        <SignInTitleContainer>I already have an account</SignInTitleContainer>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email'
            type='email'
            value={this.state.email}
            label='email'
            required
            onChange={this.handleOnChange}
          />
          <FormInput 
            name='password'
            type='password'
            value={this.state.password}
            label='password'
            required
            onChange={this.handleOnChange}
          />
          <SignInButtonsContainer>
            <CustomButton type='submit'>SIGN IN</CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN With Google
            </CustomButton>
          </SignInButtonsContainer>
        </form>
      </SignInContainer>
    );
  };
};

export default SignIn;
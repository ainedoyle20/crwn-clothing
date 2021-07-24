import React from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, SignUpTitleContainer } from './sign-up.styles';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  };

  handleOnChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument( user, { displayName });

    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return(
      <SignUpContainer>
        <SignUpTitleContainer>I don't have an account</SignUpTitleContainer>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='displayName'
            type='text'
            label='display name'
            value={displayName}
            required
            onChange={this.handleOnChange}
          />
          <FormInput 
            name='email'
            type='email'
            label='email'
            value={email}
            required
            onChange={this.handleOnChange}
          />
          <FormInput 
            name='password'
            type='password'
            label='password'
            value={password}
            required
            onChange={this.handleOnChange}
          />
          <FormInput 
            name='confirmPassword'
            type='password'
            label='confirmPassword'
            value={confirmPassword}
            required
            onChange={this.handleOnChange}
          />
          <CustomButton type='submit'>sign up</CustomButton>
        </form>
      </SignUpContainer>
    );
  };
};

export default SignUp;
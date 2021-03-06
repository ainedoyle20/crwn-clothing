import React from 'react';

import { signUpStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, SignUpTitleContainer } from './sign-up.styles';
import { connect } from 'react-redux';

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

    const { signUpStart } = this.props;

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }

    signUpStart(displayName, email, password);
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

const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password ) => dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);
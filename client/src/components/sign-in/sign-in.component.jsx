import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, SignInTitleContainer, SignInButtonsContainer} from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  };

  handleOnChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  render() {
    const { googleSignInStart } = this.props;
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
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
              SIGN IN With Google
            </CustomButton>
          </SignInButtonsContainer>
        </form>
      </SignInContainer>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
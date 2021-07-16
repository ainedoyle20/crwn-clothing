import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

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
      <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
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
      </div>
    );
  };
};

export default SignUp;
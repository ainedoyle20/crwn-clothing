import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ history, toggleCartHidden }) => {
  return(
    <div className='cart-dropdown'>
      <div className='cart-items'>

      </div>
      <CustomButton
        onClick={() => {
          return(
            history.push('/checkout'),
            toggleCartHidden() 
          );
        }}
      >GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(withRouter(CartDropdown));
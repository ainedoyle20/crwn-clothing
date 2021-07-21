import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ history, cartItems, dispatch }) => {
  return(
    <div className='cart-dropdown'>
      <div className='cart-items'>
      { cartItems.length ? (
          cartItems.map(cartItem => {
            return <CartItem key={cartItem.id} item={cartItem} />
          })
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )
      }
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

//for toggleCartHidden, the Dispatch shorthand see onClick above
//review Dispatch Action Shorthand lecture (in redux 1 section)

export default withRouter(connect(mapStateToProps)(CartDropdown));
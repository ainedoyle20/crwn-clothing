import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItemsContainer, CartDropdownButton } from './cart-dropdown.styles';

const CartDropdown = ({ history, cartItems, dispatch }) => {
  return(
    <CartDropdownContainer>
      <CartItemsContainer>
      { cartItems.length ? (
          cartItems.map(cartItem => {
            return <CartItem key={cartItem.id} item={cartItem} />
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )
      }
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

//for toggleCartHidden, the Dispatch shorthand see onClick above
//review Dispatch Action Shorthand lecture (in redux 1 section)

export default withRouter(connect(mapStateToProps)(CartDropdown));
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { CheckoutPageContainer, CheckoutHeaderContainer, CheckoutHeaderBlock, CheckoutTotal, CheckoutWarning } from './checkout-page.styles';


const CheckoutPage = ({ cartItems, total }) => {
  return(
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeaderContainer>
      {
        cartItems.map(cartItem => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        })
      }
      <CheckoutTotal>TOTAL: ${total}</CheckoutTotal>
      <CheckoutWarning>
        *Please use the following mock credit card for payments*
          <br />
        4242 4242 4242 4242 - Exp: any future date - CVV: 123
      </CheckoutWarning>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import crwnImage from '../../assets/favicon.ico';

import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IsruTAf5D9mxr02PIJJnHqjMPgh8C2mQoeMyGqc5Q3b4kvnsxpfgSu75kqUCur6562vgcaILuENBAPWYioht8ZE00X1fhB91p';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
    .then(response => {
      alert('Payment Successful');
    })
    .then(clearCart())
    .catch(error => {
      console.log('Payment error: ', error);
      alert('There was an issue with your payment! Please make sure you use the provided credit card.');
    });
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN-Clothing Ltd.'
      image={crwnImage}
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
      amount={priceForStripe}
      shippingAddress
      billingAddress
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);